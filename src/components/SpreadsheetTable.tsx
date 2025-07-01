import React, { useState } from "react";
import { useTable } from "react-table";
import { columns, data as initialData } from "../assets/tableData";

export default function SpreadsheetTable() {
  const [tableData, setTableData] = useState(initialData);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: tableData });

  const [focusedCell, setFocusedCell] = useState<[number, number] | null>(null);
  const [editingCell, setEditingCell] = useState<[number, number] | null>(null);
  const [editValue, setEditValue] = useState("");

  const statusColors = {
    "In-process": "bg-yellow-100 text-yellow-800",
    "Need to start": "bg-blue-100 text-blue-800",
    Complete: "bg-green-100 text-green-800",
    Blocked: "bg-red-100 text-red-800",
  };
  const priorityColors = {
    High: "text-red-600 font-semibold",
    Medium: "text-yellow-700 font-semibold",
    Low: "text-blue-600 font-semibold",
  };

  const handleKeyDown = (e: React.KeyboardEvent, rowIdx: number, colIdx: number) => {
    let [r, c] = [rowIdx, colIdx];
    switch (e.key) {
      case "ArrowDown":
        r = Math.min(rows.length - 1, r + 1);
        break;
      case "ArrowUp":
        r = Math.max(0, r - 1);
        break;
      case "ArrowRight":
        c = Math.min(columns.length - 1, c + 1);
        break;
      case "ArrowLeft":
        c = Math.max(0, c - 1);
        break;
      case "Enter":
        setEditingCell([rowIdx, colIdx]);
        setEditValue(rows[rowIdx].cells[colIdx].value);
        return;
      default:
        return;
    }
    e.preventDefault();
    setFocusedCell([r, c]);
  };

  const handleEditSave = (rowIdx: number, colIdx: number) => {
    const colId = columns[colIdx].accessor as string;
    setTableData(prev => prev.map((row, i) => i === rowIdx ? { ...row, [colId]: editValue } : row));
    setEditingCell(null);
  };

  return (
    <div className="overflow-auto rounded-md border border-gray-300">
      <table {...getTableProps()} className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-white">
          {headerGroups.map((headerGroup, headerGroupIdx) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="border-b border-gray-300" key={headerGroup.id || headerGroupIdx}>
              <th className="px-4 py-2 border font-semibold text-gray-700 text-xs">#</th>
              {headerGroup.headers.map((column, colIdx) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 border font-semibold text-gray-700 text-xs"
                  key={column.id || colIdx}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-50 text-xs" key={row.id || i}>
                <td className="px-4 py-2 border text-gray-600 font-medium">{i + 1}</td>
                {row.cells.map((cell, index) => {
                  const columnId = cell.column.id;
                  const value = String(cell.value);
                  const isEditing = editingCell?.[0] === i && editingCell?.[1] === index;
                  let content: React.ReactNode = value;
                  let className = "px-4 py-2 border";

                  if (isEditing) {
                    content = (
                      <input
                        className="w-full px-1 py-0.5 border rounded text-xs"
                        value={editValue}
                        autoFocus
                        onChange={e => setEditValue(e.target.value)}
                        onBlur={() => handleEditSave(i, index)}
                        onKeyDown={e => {
                          if (e.key === "Enter") {
                            handleEditSave(i, index);
                          }
                        }}
                      />
                    );
                  } else {
                    if (columnId === "status") {
                      const colorClass = value in statusColors ? statusColors[value as keyof typeof statusColors] : "";
                      content = (
                        <span className={`inline-block px-2 py-1 text-[10px] font-semibold rounded-full ${colorClass}`}>{value}</span>
                      );
                      className += " text-center";
                    }

                    if (columnId === "priority") {
                      const priorityClass = value in priorityColors ? priorityColors[value as keyof typeof priorityColors] : "";
                      className += ` ${priorityClass}`;
                    }

                    if (columnId === "url") {
                      content = (
                        <a
                          href={`https://${value}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {value}
                        </a>
                      );
                    }
                  }

                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`${className} ${focusedCell?.[0] === i && focusedCell?.[1] === index ? "outline-blue-500 outline-2" : ""}`}
                      tabIndex={0}
                      onKeyDown={e => handleKeyDown(e, i, index)}
                      onClick={() => setFocusedCell([i, index])}
                      onDoubleClick={() => {
                        setEditingCell([i, index]);
                        setEditValue(value);
                      }}
                      key={cell.column.id || index}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
