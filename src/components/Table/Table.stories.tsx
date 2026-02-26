import React from "react";
import { Table, TableColumn } from ".";
import { TableFoot } from "./Table";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Table",
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: false },
    showTableFoot: { control: "boolean" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default = {
  args: {
    columns: [
      { id: "name", displayName: "Name", width: 200 },
      { id: "age", displayName: "Age", width: 100 },
      { id: "score", displayName: "Score", width: 100 },
    ] as Array<TableColumn>,
    data: [
      { name: "John Doe", age: 25, score: 80 },
      { name: "Rasoul Setiawan", age: 21, score: 75 },
      { name: "Rasoul Setiawan", age: 35, score: 90 },
    ],
    showTableFoot: true,
    footColumns: [
      { span: 2, content: "Average" },
      { span: 1, content: "82" },
    ],
  },
  render: (args) => {
    const { showTableFoot, footColumns, ...tableProps } = args as any;

    return (
      <Table {...tableProps}>
        {showTableFoot ? <TableFoot columns={footColumns} /> : null}
      </Table>
    );
  },
};
