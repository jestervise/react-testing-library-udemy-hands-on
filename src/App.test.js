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

  const checkbox = screen.getByRole("checkbox", {
    name: "Enable/Disable button",
  });
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox", {
    name: "Enable/Disable button",
  });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("check if the button turn grey when checkbox is clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox", {
    name: "Enable/Disable button",
  });

  //flow 1
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "red" });

  //flow 2
  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  //flow 3
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});
