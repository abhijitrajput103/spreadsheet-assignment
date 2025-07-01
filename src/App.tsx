import React from "react";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import SpreadsheetTable from "./components/SpreadsheetTable";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <Header />
      <Toolbar />
      <main className="flex-1 p-6">
        <SpreadsheetTable />
      </main>
      <Footer />
    </div>
  );
}
