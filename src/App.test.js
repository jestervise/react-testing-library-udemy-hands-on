import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import App from "./App";

test("change color when click on the button", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /change to blue/i });
  expect(button).toHaveStyle("background-color: red");
  fireEvent.click(button);
  expect(button).toHaveStyle("background-color: blue");
  expect(button.textContent).toBe("Change To Red");
});

test("initial conditiions", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /change to blue/i });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
