import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Get() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const responses = await fetch("https://api.restful-api.dev/objects");
    const results = await responses.json();
    setData(results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">API Data List</h1>
        <p className="text-md text-gray-500">
          A simple list of fetched objects.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-1">
                {item.name || "No Name"}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                ID:{" "}
                <span className="font-mono text-gray-600">
                  {item.id || "N/A"}
                </span>
              </p>

              <div className="border-t pt-2 mt-2 border-gray-100">
                <h3 className="text-md font-medium text-gray-800">Specs:</h3>
              </div>
            </div>
          ))
        ) : (
          <div className="md:col-span-full text-center text-gray-500 p-8 bg-white rounded-lg shadow-inner">
            <p className="text-lg">No objects found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
