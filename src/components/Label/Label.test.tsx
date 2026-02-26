import { render, screen } from "@testing-library/react"
import { Label } from "./Label"
import React from "react"

test("render label", () => {
    render(<Label>Label</Label>);
    expect(screen.getByText("Label")).toBeInTheDocument()
})