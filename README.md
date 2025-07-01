# AI-Powered Spreadsheet Prototype

This project is a static, front-end-only React prototype that visually matches the provided Figma design for a spreadsheet product view. It demonstrates a Google Sheets/Excel-like experience, built as part of an intern assignment.

## Features
- **Pixel-perfect UI** matching the Figma design
- **Spreadsheet-like table** with:
  - Cell selection and keyboard navigation (arrow keys)
  - Inline cell editing (double-click or press Enter to edit)
  - Special cell rendering for status, priority, and URLs
- **Interactive toolbar, tabs, and action buttons** (all log to console or change state)
- **No dead UI**: Every button/tab is interactive
- **TypeScript (strict mode)** and **Tailwind CSS** for styling
- **No external state management**: All state is local

## Tech Stack
- React 18 (Vite)
- TypeScript (strict mode)
- Tailwind CSS
- [react-table](https://tanstack.com/table/v8) for the grid

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- Yarn (preferred) or npm

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd spreadsheet-assingment
   ```
2. Install dependencies:
   ```sh
   yarn install
   # or
   npm install
   ```

### Running the App
```sh
yarn dev
# or
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Linting & Type Checking
- Run linter:
  ```sh
  yarn lint
  # or
  npm run lint
  ```
- Run type-check:
  ```sh
  yarn type-check
  # or
  npm run type-check
  ```

## Assignment Requirements Checklist
- [x] Pixel-close layout to Figma
- [x] Spreadsheet experience (selection, navigation, editing)
- [x] All buttons/tabs are interactive (log to console or change state)
- [x] Passes lint and type-check
- [x] Clean commit history
- [x] (Stretch) Keyboard navigation in grid

## Figma Design
[Figma Assignment Link](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1)

## License
This project is for demonstration and assignment purposes only.
