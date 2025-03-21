import { useEffect, useState } from "react";

export default function Home() {
  const [historicalToolsData,  setHistoricalToolsData, ] = useState([]);
  const [touristAttractionsData, setTouristAttractionsData, ] = useState([]);
  const [instrumentsData, setInstrumentsData] = useState([]);
  const [ethnicGroupsData, setEthnicGroupsData] = useState([]);
  const [historicalFiguresData, setHistoricalFiguresData] = useState([]);
  const [provincesData, setprovincesData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {

        const touristAttractionsResponse = await fetch("https://mongol-api-rest.vercel.app/TouristAttractions");
        const touristAttractionsResult = await touristAttractionsResponse.json();
        setTouristAttractionsData(touristAttractionsResult.touristAttractions);

    
        const instrumentsResponse = await fetch("https://mongol-api-rest.vercel.app/Instruments");
        const instrumentsResult = await instrumentsResponse.json();
        setInstrumentsData(instrumentsResult.instruments);

        const historicalToolsResponse = await fetch("https://mongol-api-rest.vercel.app/HistoricalTools");
        const historicalToolsResult = await historicalToolsResponse.json();
        setHistoricalToolsData(historicalToolsResult.historicalTools);
      
        const ethnicGroupsResponse = await fetch("https://mongol-api-rest.vercel.app/ethnicGroups");
        const ethnicGroupsResult = await ethnicGroupsResponse.json();
        setEthnicGroupsData(ethnicGroupsResult.ethnicGroups);

        const historicalFiguresResponse = await fetch("https://mongol-api-rest.vercel.app/historicalFigures");
        const historicalFiguresResult = await historicalFiguresResponse.json();
        setHistoricalFiguresData(historicalFiguresResult.historicalFigures);
        
        const provincesResponse = await fetch("https://mongol-api-rest.vercel.app/provinces");
        const provincesResult = await provincesResponse.json();
        setprovincesData(provincesResult.provinces);

      } catch (error) {
        console.log(error);
      }
    };  
    fetchData();
  }, []);

  const filterData = (category) => {
    if (!search) return category; 
    return category.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="mx-auto p-8">
     
      <h1 className="text-3xl font-semibold text-center mb-8">TouristAttractions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {touristAttractionsData.map((item, index) => (
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

            {item.country && (
              <p className="text-sm text-gray-600 mt-2 flex ps-4">
                <h1>country:</h1> {item.country}
              </p>
            )}

            {item.street && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>Street:</h1> {item.street}
              </p>
            )}
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-semibold text-center mb-8 mt-12">Instruments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <input
            type="search"
            placeholder="Search by name"
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-300 transition -translate-y-3 text-black ease-out delay-250 hover:shadow-md hover:shadow-gray-500 rounded-2xl px-3 py-2 w-1/2"
          />

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
                <h1>Time Period: </h1> {item.timePeriod}
              </p>
            )}
          </div>
        ))}
      </div>
      
      <h1 className="text-3xl font-semibold text-center mb-8 mt-12">ethnicGroups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ethnicGroupsData.map((item, index) => (
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
                <h1>Time Period: </h1> {item.timePeriod}
              </p>
            )}
          </div>
        ))}
        </div> 

        <h1 className="text-3xl font-semibold text-center mb-8 mt-12">HistoricalFigures</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {historicalFiguresData.map((item, index) => (
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
                <h1>Time Period: </h1> {item.timePeriod}
              </p>
            )}
          </div>
        ))}
      </div>
      
      <div>      
    
    </div>
      <h1 className="text-3xl font-semibold text-center mb-8 mt-12">Provinces</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {provincesData.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg">
            {item.images && (
              <img
                src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYQe7sk8paP8GwcE7D6iEMSmj82HEVN8lZg&s"
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-md text-gray-800 ps-4">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2 ps-4">{item.description}</p>

            {item.name && (
              <p className="text-sm text-gray-600 mt-2 flex ps-4">
                <h1>name:</h1> {item.name}
              </p>
            )}

            {item.area && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>area: </h1> {item.area}
              </p>
            )}

            {item.population && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>population: </h1> {item.population}
              </p>
            )}

            {item.capital && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>capital: </h1> {item.capital}
              </p>
            )}

            {item.soums && (
              <p className="text-sm text-gray-600 flex ps-4">
                <h1>soums: </h1> {item.soums}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}