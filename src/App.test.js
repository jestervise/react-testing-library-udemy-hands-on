import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import App, { replaceCamelWithSpace } from "./App";

test("change color when click on the button", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  expect(button).toHaveStyle("background-color: MediumVioletRed");
  fireEvent.click(button);
  expect(button).toHaveStyle("background-color: MidnightBlue");
  expect(button).toHaveTextContent("Change To Medium Violet Red");
});

test("initial conditiions", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  const checkbox = screen.getByRole("checkbox", {
    name: "Disable button",
  });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("check if the button turn grey when checkbox is clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  const checkbox = screen.getByRole("checkbox", {
    name: "Disable button",
  });

  //flow 1
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  //flow 2
  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  //flow 3
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("Replace Capital Letter Preceeding with space", () => {
  test("works for no inner capital letter", () => {
    expect(replaceCamelWithSpace("Red")).toBe("Red");
  });

  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
