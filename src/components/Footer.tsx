export default function Footer() {
    return (
        <footer className="flex gap-2 px-6 py-2 border-t border-gray-200 bg-white text-sm">
        {[
          "All Orders",
          "Pending",
          "Reviewed",
          "Arrived",
          "+"
        ].map((label, idx) => (
          <button
            key={label}
            className={`px-3 py-1 rounded-md border text-gray-700 hover:bg-gray-100 ${
              idx === 0 ? "bg-green-100 border-green-300 text-green-800" : "border-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </footer>
    );
}