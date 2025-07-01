import React from "react";

export default function ActionButtons() {
  return (
    <div className="flex justify-end gap-3 py-4">
      <button className="px-3 py-1 border border-gray-300 rounded text-sm" onClick={() => console.log('Import button clicked')}>Import</button>
      <button className="px-3 py-1 border border-gray-300 rounded text-sm" onClick={() => console.log('Export button clicked')}>Export</button>
      <button className="px-3 py-1 border border-gray-300 rounded text-sm" onClick={() => console.log('Share button clicked')}>Share</button>
      <button className="px-3 py-1 bg-green-500 text-white rounded text-sm font-medium" onClick={() => console.log('New Action button clicked')}>New Action</button>
    </div>
  );
}