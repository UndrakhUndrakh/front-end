import { useState } from "react";

const data = [
  { id: 1, name: "Ariunbayr", nas: 17 },
  { id: 2, name: "Badraa", nas: 17 },
  { id: 3, name: "Bilguntugs", nas: 17 },
  { id: 4, name: "Boldoo", nas: 17 },
  { id: 5, name: "Gan-Erdene", nas: 17 },
  { id: 6, name: "Gunbileg", nas: 17 },
  { id: 7, name: "Delgermurun", nas: 17 },
  { id: 8, name: "Jargal", nas: 17 },
  { id: 9, name: "Munkhbaysgalan", nas: 17 },
  { id: 10, name: "Munkhnaran", nas: 17 },
  { id: 11, name: "Nomindari", nas: 17 },
  { id: 12, name: "Siilen", nas: 17 },
  { id: 13, name: "Tuvshin", nas: 17 },
  { id: 14, name: "Temulan", nas: 17 },
  { id: 15, name: "Temuugei", nas: 17 },
  { id: 16, name: "Undrakh", nas: 17 },
  { id: 17, name: "Khangarid", nas: 17 },
  { id: 18, name: "Chinbiligt", nas: 17 },
  { id: 19, name: "Erdene-Jargal", nas: 17 },
];

export default function Sfilter() {
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(false);

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.nas.toString().includes(search)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col p-6">
      <header className="flex justify-end items-center mb-8">
        <button
          className="bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-md transition-colors hover:bg-gray-200"
          onClick={() => setGrid(!grid)}
        >
          {grid ? "List View" : "Grid View"}
        </button>
      </header>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">11Б Student Directory</h1>
        <input
          className="w-full max-w-md p-3 rounded-lg bg-gray-800 border border-gray-700 text-white shadow-inner"
          type="search"
          placeholder="Search by name or age"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <main className={`flex-grow ${grid ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" : "flex flex-col gap-4"}`}>
        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <div
              key={data.id}
              className={`bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${grid ? "" : "flex items-center space-x-4"}`}
            >
              <div className="flex-grow">
                <p className="text-xl font-semibold">{data.name}</p>
                <p className="text-gray-400">Age: {data.nas}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No results found for: {search}</p>
        )}
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} 11Б Directory</p>
      </footer>
    </div>
  );
}