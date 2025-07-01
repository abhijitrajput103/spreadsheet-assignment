export default function SheetTabs() {
  return (
    <div className="flex gap-3 mt-4 text-sm text-gray-600">
      {['All Orders', 'Pending', 'Reviewed', 'Arrived'].map(tab => (
        <button
          key={tab}
          className={`px-3 py-1 rounded border ${tab === 'All Orders' ? 'border-green-600 text-green-600 font-medium' : 'border-transparent hover:border-gray-300'}`}
          onClick={() => console.log(`${tab} tab clicked`)}
        >
          {tab}
        </button>
      ))}
      <button className="px-3 py-1 rounded border border-gray-300" onClick={() => console.log('Add new tab clicked')}>+</button>
    </div>
  );
}