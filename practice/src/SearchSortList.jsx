import React, { useState } from 'react';

const itemsData = [
  'Apple',
  'Banana',
  'Orange',
  'Mango',
  'Strawberry',
  'Grapes',
  'Pineapple',
];

const SearchSortList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredItems = itemsData
    .filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Search + Sort List</h1>

      <input
        type="text"
        placeholder="Search items..."
        className="p-2 rounded-md border mb-3 w-full max-w-sm text-base sm:text-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="p-2 rounded-md border mb-5 w-full max-w-sm text-base sm:text-lg"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Sort A → Z</option>
        <option value="desc">Sort Z → A</option>
      </select>

      <ul className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm space-y-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              className="p-2 border rounded-md text-center text-sm sm:text-base"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchSortList;
  