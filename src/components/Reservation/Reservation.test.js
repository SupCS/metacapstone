/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, waitFor } from "@testing-library/react";
import Reservation from "./Reservation";
import userEvent from "@testing-library/user-event";
import { fetchAPI } from "../../api";

jest.mock("../../api", () => ({
  fetchAPI: jest.fn(),
}));

describe("Reservation component tests", () => {
  it("loads and displays available times on initial render", async () => {
    // Установка мока для fetchAPI
    fetchAPI.mockResolvedValue(["10:00", "11:00", "12:00"]);

    render(<Reservation />);

    // Ожидание загрузки времен и проверка их наличия в DOM
    await waitFor(() => {
      expect(screen.getByText("10:00")).toBeInTheDocument();
      expect(screen.getByText("11:00")).toBeInTheDocument();
      expect(screen.getByText("12:00")).toBeInTheDocument();
    });
  });
});

test("Renders the Reservation heading", () => {
  render(<Reservation />);
  const headingElement = screen.getByText("Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("Button 'Confirm' is disabled when the form is incomplete", () => {
  render(<Reservation />);
  const confirmButton = screen.getByRole("button", { name: /confirm/i });

  // Проверка, что кнопка изначально неактивна
  expect(confirmButton).toBeDisabled();

  // Заполнение полей формы
  userEvent.selectOptions(screen.getByLabelText(/choose date/i), "2024-09-10");
  userEvent.selectOptions(screen.getByLabelText(/choose time/i), "10:00");
  userEvent.selectOptions(
    screen.getByLabelText(/select occasion/i),
    "Birthday"
  );
  // Не выбираем гостей, чтобы форма осталась неполной

  // Проверка, что кнопка остаётся неактивной
  expect(confirmButton).toBeDisabled();
});

test("Textarea for additional comment has a max length of 500 characters", () => {
  render(<Reservation />);
  const commentTextarea = screen.getByLabelText(/additional comment/i);

  expect(commentTextarea).toHaveAttribute("maxLength", "500");
});
