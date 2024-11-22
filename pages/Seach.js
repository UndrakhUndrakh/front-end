import image from "next/image";
import localFont from "next/font/local";
import React, {useState} from "react";
export default function Search() {
const [search, setSearch] = useState("");

console.log(search);
    return (
        <div className="flex justify-center items-center">

                <input type="search" onChange={(e) => setSearch(e.target.value)} className="border-2 border-black"/>
                <p>search: {search}</p>
        </div>
    );
}