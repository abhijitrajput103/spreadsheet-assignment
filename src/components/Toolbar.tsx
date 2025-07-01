import React from "react";
import { EyeOff, Filter, ChevronsUpDown, LayoutGrid, List } from "lucide-react";

export default function Toolbar() {
  const items = [
    { icon: EyeOff, label: "Hide fields" },
    { icon: List, label: "Sort" },
    { icon: Filter, label: "Filter" },
    { icon: LayoutGrid, label: "Cell view" },
  ];

  return (
    <div className="flex items-center gap-6 px-6 py-2 border-b border-gray-200 bg-white text-sm text-gray-700">
      <div className="flex items-center gap-2">
        <button className="px-3 py-1 rounded hover:bg-gray-200 text-gray-700 text-sm font-medium">Toolbar</button>

      </div>
      {items.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-1.5 hover:text-black focus:outline-none"
          onClick={() => console.log(`${item.label} button clicked`)}
        >
          <item.icon size={16} className="text-gray-500" />
          <span>{item.label}</span>
          <ChevronsUpDown size={12} className="text-gray-400 -ml-1" />
        </button>
      ))}
    </div>
  );
}