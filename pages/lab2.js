import { useEffect, useState } from "react";

export default function Home() {
  const [historicalToolsData, setHistoricalToolsData] = useState([]);
  const [clothesData, setClothesData] = useState([]);
  const [instrumentsData, setInstrumentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const clothesResponse = await fetch("https://mongol-api-rest.vercel.app/Clothes");
        const clothesResult = await clothesResponse.json();
        setClothesData(clothesResult.clothes);

    
        const instrumentsResponse = await fetch("https://mongol-api-rest.vercel.app/Instruments");
        const instrumentsResult = await instrumentsResponse.json();
        setInstrumentsData(instrumentsResult.instruments);

        const historicalToolsResponse = await fetch("https://mongol-api-rest.vercel.app/HistoricalTools");
        const historicalToolsResult = await historicalToolsResponse.json();
        setHistoricalToolsData(historicalToolsResult.historicalTools);
      


      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto p-8">
     
      <h1 className="text-3xl font-semibold text-center mb-8">Clothes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clothesData.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg">
            {item.images && (
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-md text-gray-800 ps-4">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2 ps-4">{item.description}</p>

            {item.materials && (
              <p className="text-sm text-gray-600 mt-2 flex ps-4">
                <h1>Materials:</h1> {item.materials}
              </p>
            )}

            {item.timePeriod && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>Time Period:</h1> {item.timePeriod}
              </p>
            )}
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-semibold text-center mb-8 mt-12">Instruments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {instrumentsData.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg">
            {item.images && (
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-md text-gray-800 ps-4">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2 ps-4">{item.description}</p>

            {item.materials && (
              <p className="text-sm text-gray-600 mt-2 flex ps-4">
                <h1>Materials:</h1> {item.materials}
              </p>
            )}

            {item.timePeriod && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>Time Period:</h1> {item.timePeriod}
              </p>
            )}
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8 mt-12">HistoricalTools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {historicalToolsData.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg">
            {item.images && (
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-md text-gray-800 ps-4">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2 ps-4">{item.description}</p>

            {item.materials && (
              <p className="text-sm text-gray-600 mt-2 flex ps-4">
                <h1>Materials:</h1> {item.materials}
              </p>
            )}

            {item.timePeriod && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>Time Period:</h1> {item.timePeriod}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}