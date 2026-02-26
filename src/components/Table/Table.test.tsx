import { render, screen } from "@testing-library/react";
import React from "react";
import { Table, TableFoot } from "./Table";

const columns = [
  { id: "name", displayName: "Name", width: 200 },
  { id: "age", displayName: "Age", width: 100 },
  { id: "score", displayName: "Score", width: 100 },
];

const data = [
  { name: "John Doe", age: "25", score: "80" },
  { name: "Rasoul Setiawan", age: "21", score: "75" },
];

test("render table header and data", () => {
  render(<Table columns={columns} data={data} />);
  expect(screen.getByText("Name")).toBeInTheDocument();
  expect(screen.getByText("Age")).toBeInTheDocument();
  expect(screen.getByText("Score")).toBeInTheDocument();
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("25")).toBeInTheDocument();
  expect(screen.getByText("80")).toBeInTheDocument();
});

test("render table foot when provided", () => {
  render(
    <Table columns={columns} data={data}>
      <TableFoot
        columns={[
          { span: 2, content: "Average" },
          { span: 1, content: "77.5" },
        ]}
      />
    </Table>
  );

  expect(screen.getByText("Average")).toBeInTheDocument();
  expect(screen.getByText("77.5")).toBeInTheDocument();
  expect(screen.getByText("Average").closest("td")).toHaveAttribute("colspan", "2");
});

test("apply custom table color and background", () => {
  render(<Table columns={columns} data={data} color="#1d4ed8" background="#f8fafc" />);
  const table = screen.getByRole("table");
  expect(table).toHaveStyleRule("color", "#1d4ed8");
  expect(table).toHaveStyleRule("background", "#f8fafc");
});
