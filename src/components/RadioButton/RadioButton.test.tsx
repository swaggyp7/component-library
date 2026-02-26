import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RadioButton } from "./RadioButton";

test("render radio button label", () => {
  render(<RadioButton label="RadioButton" checked={false} />);
  expect(screen.getByText("RadioButton")).toBeInTheDocument();
  expect(screen.getByRole("radio")).toBeInTheDocument();
});

test("respect default checked state", () => {
  render(<RadioButton label="Checked" checked />);
  expect(screen.getByRole("radio")).toBeChecked();
});

test("update checked state on click", () => {
  render(<RadioButton label="Click me" checked={false} />);
  const radio = screen.getByRole("radio");
  fireEvent.click(radio);
  expect(radio).toBeChecked();
});

test("disabled radio cannot be changed", () => {
  render(<RadioButton label="Disabled" checked={false} disabled />);
  const radio = screen.getByRole("radio");
  expect(radio).toBeDisabled();
  expect(screen.getByText("Disabled").closest("label")).toHaveStyleRule("cursor", "not-allowed");
});
