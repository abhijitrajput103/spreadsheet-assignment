// File: src/components/Header.tsx
import {Link2, RefreshCcw, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white px-6 pt-4 pb-2 border-b border-gray-200">
      {/* Breadcrumbs & Controls */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <span className="text-gray-700 font-medium">Workspace</span>
          <span className="mx-1">›</span>
          <span className="text-gray-700 font-medium">Folder 2</span>
          <span className="mx-1">›</span>
          <span className="text-black font-semibold">Spreadsheet 3</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search within sheet"
              className="border rounded-md px-3 py-1.5 text-sm focus:outline-none w-64"
            />
          </div>
          <Bell size={18} className="text-gray-500" />
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/32"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-xs text-right leading-tight">
              <p className="font-semibold text-gray-800">John Doe</p>
              <p className="text-gray-500">john.doe@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
          <Link2 size={16} className="text-blue-600" />
          <span>Q3 Financial Overview</span>
          <RefreshCcw size={14} className="text-orange-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}