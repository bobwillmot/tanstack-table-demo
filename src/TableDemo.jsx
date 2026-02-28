import React from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

// Gettysburg Address data from previous project
const data = [
  { word: "Four", len: 4, idx: 0, count: 1 },
  { word: "score", len: 5, idx: 1, count: 1 },
  { word: "and", len: 3, idx: 2, count: 1 },
  { word: "seven", len: 5, idx: 3, count: 1 },
  { word: "years", len: 5, idx: 4, count: 1 },
  { word: "ago", len: 3, idx: 5, count: 1 },
  // ... add more rows as needed
];

const columns = [
  { accessorKey: "word", header: "Word" },
  { accessorKey: "len", header: "Length" },
  { accessorKey: "idx", header: "Index" },
  { accessorKey: "count", header: "Count" },
];

export default function TableDemo() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} style={{ border: "1px solid #ccc", padding: "8px", background: "#eee" }}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} style={{ border: "1px solid #ccc", padding: "8px" }}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
