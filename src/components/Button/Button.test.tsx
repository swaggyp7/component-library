import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import React from "react";

test("Renders button text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument()
  });

test("Call onClick when clicked button", () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Test</Button>);
    fireEvent.click(screen.getByText("Click Test"))
    expect(handleClick).toHaveBeenCalled()
})

test("Test disabled button background color", () => {
  render(<Button disabled>Disabled</Button>)
  expect(screen.getByText("Disabled")).toHaveAttribute("disabled")
  expect(screen.getByText("Disabled")).toHaveStyleRule("opacity", "0.5", {modifier: ":disabled"})
})