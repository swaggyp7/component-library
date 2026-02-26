import { render, screen } from "@testing-library/react";
import React from "react";
import { Card } from "./Card";

test("render card title and content", () => {
  render(<Card title="Card Title">Card Content</Card>);
  expect(screen.getByText("Card Title")).toBeInTheDocument();
  expect(screen.getByText("Card Content")).toBeInTheDocument();
});

test("use default card styles", () => {
  render(<Card title="Default">Body</Card>);
  const card = screen.getByText("Default").closest("article");

  expect(card).toHaveStyleRule("width", "320px");
  expect(card).toHaveStyleRule("padding", "16px");
  expect(card).toHaveStyleRule("background", "white");
  expect(card).toHaveStyleRule("border", "1px solid #e5e7eb");
});

test("support custom card styles", () => {
  render(
    <Card title="Custom" width="100%" padding={20} background="#f8fafc" borderColor="#1d4ed8">
      Body
    </Card>
  );
  const card = screen.getByText("Custom").closest("article");

  expect(card).toHaveStyleRule("width", "100%");
  expect(card).toHaveStyleRule("padding", "20px");
  expect(card).toHaveStyleRule("background", "#f8fafc");
  expect(card).toHaveStyleRule("border", "1px solid #1d4ed8");
});

test("render card without title", () => {
  render(<Card>Only Content</Card>);
  expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  expect(screen.getByText("Only Content")).toBeInTheDocument();
});
