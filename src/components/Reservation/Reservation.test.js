import { render, screen } from "@testing-library/react";
import Reservation from "./Reservation";

test("Renders the Reservation heading", () => {
  render(<Reservation />);
  const headingElement = screen.getByText("Reservation");
  expect(headingElement).toBeInTheDocument();
});
