import { initializeTimes, timesReducer } from "./App";

describe("initializeTimes function", () => {
  test("returns default available times", () => {
    const defaultTimes = ["12:00", "15:00", "18:00"];
    expect(initializeTimes()).toEqual(defaultTimes);
  });
});
describe("timesReducer function", () => {
  const initialState = [];

  test("returns updated times for a specific date", () => {
    const action = { type: "UPDATE_TIMES", selectedDate: "2024-01-01" };
    const updatedState = ["10:00", "11:00", "12:00"];
    expect(timesReducer(initialState, action)).toEqual(updatedState);
  });

  test("returns same state for unknown date", () => {
    const action = { type: "UPDATE_TIMES", selectedDate: "2024-01-04" };
    expect(timesReducer(initialState, action)).toEqual(initialState);
  });

  test("returns default state for unknown action type", () => {
    const action = { type: "UNKNOWN_ACTION", selectedDate: "2024-01-01" };
    expect(timesReducer(initialState, action)).toEqual(initialState);
  });
});
