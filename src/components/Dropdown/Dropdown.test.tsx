import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Dropdown } from "./Dropdown";

const options = [
  { name: "Java", value: "1" },
  { name: "Javascript", value: "2" },
  { name: "C#", value: "3" },
];

test("render dropdown trigger", () => {
  render(<Dropdown options={options} onOpen={jest.fn()} onChange={jest.fn()} />);
  expect(screen.getByRole("button", { name: "Select" })).toBeInTheDocument();
});

test("open options and call onOpen", () => {
  const onOpen = jest.fn();
  render(<Dropdown options={options} onOpen={onOpen} onChange={jest.fn()} />);

  fireEvent.click(screen.getByRole("button", { name: "Select" }));
  expect(onOpen).toHaveBeenCalled();
  expect(screen.getByText("Java")).toBeInTheDocument();
  expect(screen.getByText("Javascript")).toBeInTheDocument();
  expect(screen.getByText("C#")).toBeInTheDocument();
});

test("select option and call onChange with selected item", () => {
  const onChange = jest.fn();
  render(<Dropdown options={options} onOpen={jest.fn()} onChange={onChange} />);

  fireEvent.click(screen.getByRole("button", { name: "Select" }));
  fireEvent.click(screen.getByText("Javascript"));

  expect(onChange).toHaveBeenCalledWith({ name: "Javascript", value: "2" });
  expect(screen.getByRole("button", { name: "Javascript" })).toBeInTheDocument();
});

test("disabled dropdown does not open or call onOpen", () => {
  const onOpen = jest.fn();
  render(<Dropdown options={options} onOpen={onOpen} onChange={jest.fn()} disabled />);

  fireEvent.click(screen.getByRole("button", { name: "Select" }));
  expect(onOpen).not.toHaveBeenCalled();
  expect(screen.queryByText("Java")).not.toBeInTheDocument();
});
