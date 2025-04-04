import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Api() {
  const [data, setData] = useState({
    touristAttractions: [],
    clothes: [],
    instruments: [],
    provinces: [],
    historicalTools: [],
    ethnicGroups: [],
    historicalFigures: [],
  });
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(true);
  const router = useRouter()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mongol-api-rest.vercel.app/touristAttractions");
        const response1 = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const response2 = await fetch("https://mongol-api-rest.vercel.app/instruments");
        const result = await response.json();
        const result1 = await response1.json();
        const result2 = await response2.json();
        const response3 = await fetch("https://mongol-api-rest.vercel.app/provinces");
        const result3 = await response3.json();
        const response4 = await fetch("https://mongol-api-rest.vercel.app/historicalTools");
        const result4 = await response4.json();
        const response5 = await fetch("https://mongol-api-rest.vercel.app/ethnicGroups");
        const result5 = await response5.json();
        const response6 = await fetch("https://mongol-api-rest.vercel.app/historicalFigures");
        const result6 = await response6.json();
        setData({
          touristAttractions: result.touristAttractions,
          clothes: result1.clothes,
          instruments: result2.instruments,
          provinces: result3.provinces,
          historicalTools: result4.historicalTools,
          ethnicGroups: result5.ethnicGroups,
          historicalFigures: result6.historicalFigures,
        });
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
    <div className="w-screen h-scroll bg-gray-400 flex flex-col items-start justify-around px-4">
      
      <div className="flex items-center justify-evenly w-screen h-24">
        <div className="flex items-start justify-center h-1/5 w-screen">
          <input
            type="search"
            placeholder="Search by name"
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-300 transition -translate-y-3 text-black ease-out delay-250 hover:shadow-md hover:shadow-gray-500 rounded-2xl px-3 py-2 w-1/2"
          />
        </div>
        <button
          className="bg-white flex justify-center items-center transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 text-black w-32 h-12 border rounded-xl"
          onClick={() => {
            setGrid(!grid);
          }}
        >
          {grid ? "Hide Grid" : "Show Grid"}
        </button>
      </div>

      <div className={grid == true ? "items-center xl:grid-cols-4 grid-cols-1 grid gap-6 h-scroll md:grid-cols-3 sm:grid-cols-2" : "justify-center w-5/6 space-y-4"}>
        {filterData(data.touristAttractions).map((data) => (
          <div key={data?.id} className={`items-center bg-gray-100 ${grid == true ? "" : "flex"} w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 rounded-xl text-black h-1/7`}>
            <img src={data?.images} className={grid ? "w-64 h-44 object-cover rounded-xl" : "h-50 w-50"}></img>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.description}</p>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.address?.country}</p>
          </div>
        ))}
        
          
        {filterData(data.clothes).map((data) => (
          <div key={data?.id} className="items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7">

            <img src={data?.images} className={grid ? "w-64 h-44 object-cover rounded-xl" : "h-0 w-0"}></img>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.description}</p>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.timePeriod}</p>
          </div>
        ))}

        {filterData(data.instruments).map((data) => (
          <div key={data?.id} className="items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7">
            <img src={data?.images} className={grid ? "w-64 h-44 object-cover rounded-xl" : "h-0 w-0"}></img>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.description}</p>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.timePeriod}</p>
          </div>
        ))}

        {filterData(data.historicalFigures).map((data) => (
          <div key={data?.id} className="items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7">
            <img src={data?.images} className={grid ? "w-64 h-44 object-cover rounded-xl" : "h-0 w-0"}></img>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.accomplishment}</p>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.timePeriod}</p>
          </div>
        ))}

        {filterData(data.historicalTools).map((data) => (
          <div key={data?.id} className="items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7">
            <img src={data?.images} className={grid ? "w-64 h-44 object-cover rounded-xl" : "h-0 w-0"}></img>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.description}</p>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.timePeriod}</p>
          </div>
        ))}

        {filterData(data.ethnicGroups).map((data) => (
          <div key={data?.id} className="items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7">
            <img src={data?.images} className={grid ? "w-64 h-44 object-cover rounded-xl" : "h-0 w-0"}></img>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.linguistic}</p>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.population} people</p>
          </div>
        ))}

        {filterData(data.provinces).map((data) => (
          <div key={data?.id} className="items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7">
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id }</h2>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.capital}</p>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.population} people</p>
            <p className="text-gray-500 mx-4 my-2 text-center">{data?.area} square kilometers</p>
          </div>
        ))}
      </div>
        <div className="items-start">
        <button
        className="border rounded-lg bg-gray-400 p-4 font-bold mb-2 hover:bg-blue-200 items-start"
        onClick={() => {
          router.back();
        }}
      >
        back
      </button>
        </div>
    </div>
    
  );
}
