import { render, screen } from "@testing-library/react"
import { Text } from "./Text"
import React from "react"

test("render text", () => {
    render(<Text>Text</Text>)
    expect(screen.getByText("Text")).toBeInTheDocument()
})