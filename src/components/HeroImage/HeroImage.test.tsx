import { render, screen } from "@testing-library/react";
import React from "react";
import { HeroImage } from "./HeroImage";

test("render hero image with src and default alt", () => {
  render(<HeroImage src="https://picsum.photos/1200/600" />);
  const image = screen.getByRole("img");

  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "https://picsum.photos/1200/600");
  expect(image).toHaveAttribute("alt", "Hero image");
});

test("render title and subtitle", () => {
  render(
    <HeroImage
      src="https://picsum.photos/1200/600"
      title="Welcome"
      subtitle="Minimal usable hero banner"
      alt="Custom hero"
    />
  );

  expect(screen.getByText("Welcome")).toBeInTheDocument();
  expect(screen.getByText("Minimal usable hero banner")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("alt", "Custom hero");
});

test("apply default height and overlay background", () => {
  render(<HeroImage src="https://picsum.photos/1200/600" title="With Overlay" />);
  const section = screen.getByRole("img").closest("section");
  const overlay = screen.getByText("With Overlay").parentElement;

  expect(section).toHaveStyleRule("height", "320px");
  expect(overlay).toHaveStyleRule(
    "background",
    "linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6))"
  );
});

test("support custom height and no overlay", () => {
  render(<HeroImage src="https://picsum.photos/1200/600" title="No Overlay" height="50vh" overlay={false} />);
  const section = screen.getByRole("img").closest("section");
  const overlay = screen.getByText("No Overlay").parentElement;

  expect(section).toHaveStyleRule("height", "50vh");
  expect(overlay).toHaveStyleRule("background", "transparent");
});

test("do not render content layer without title or subtitle", () => {
  render(<HeroImage src="https://picsum.photos/1200/600" />);
  expect(screen.queryByRole("heading")).not.toBeInTheDocument();
});
