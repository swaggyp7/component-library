import { render, screen } from "@testing-library/react";
import React from "react";
import { Image } from "./Image";

test("render image with src", () => {
  render(<Image src="https://picsum.photos/200/200" />);
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src", "https://picsum.photos/200/200");
});

test("use default styles", () => {
  render(<Image src="https://picsum.photos/200/200" />);
  expect(screen.getByRole("img")).toHaveStyleRule("width", "200px");
  expect(screen.getByRole("img")).toHaveStyleRule("height", "200px");
  expect(screen.getByRole("img")).toHaveStyleRule("border-radius", "5px");
  expect(screen.getByRole("img")).toHaveStyleRule("border", "0");
});

test("render rounded image with border color", () => {
  render(<Image src="https://picsum.photos/200/200" round border borderColor="#1d4ed8" />);
  expect(screen.getByRole("img")).toHaveStyleRule("border-radius", "50%");
  expect(screen.getByRole("img")).toHaveStyleRule("border", "1px solid #1d4ed8");
});

test("support string width and height values", () => {
  render(<Image src="https://picsum.photos/200/200" width="100%" height="auto" />);
  expect(screen.getByRole("img")).toHaveStyleRule("width", "100%");
  expect(screen.getByRole("img")).toHaveStyleRule("height", "auto");
});
