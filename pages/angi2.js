import { useEffect, useState } from "react";

export default function Home(){
    const [data, setData] = useState("");
    useEffect(() =>{
        const fetchData =async () =>{
            try{
                const response = await fetch(
                    "https://mongol-api-rest.vercel.app/touristAttractions"
                );
                const result = await response.json();
                setData(result);

            } catch (error){
                console.log(error);
            }
        };
        fetchData();
    }, []);
    console.log(data.clothes);
    return(
    <div> {data?.clothes?.map((item) =>(
    <div>
        {item.name} {item.description} 
    </div>
    ))}
    </div>
    );
}