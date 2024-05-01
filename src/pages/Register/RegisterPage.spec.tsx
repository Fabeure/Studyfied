import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Login from "./ResgisterPage";

test("Renders the Login page", () => {
  render(<Login />);
  expect(true).toBeTruthy();
});
