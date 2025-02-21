import {useEffect, useState } from "react"
export default function Batatgah() {
    const [color, setColor] = useState("");
    return (
        <div className={`bg-${color}-800 h-screen`}>
            <div className="flex flex-cols gap-6">
            <div onClick={() => setColor("red")} className="h-12 w-12 bg-red-800 mt-5 ml-5 flex items-center justify-center ">
                <button>red</button>
            </div>
            <div onClick={() => setColor("blue")} className="h-12 w-12 bg-blue-800 mt-5 ml-5 flex items-center justify-center ">
                <button>blue</button>
            </div>
            <div onClick={() => setColor("green")} className="h-12 w-12 bg-green-800 mt-5 ml-5 flex items-center justify-center ">
                <button>green</button>
            </div>
            <div onClick={() => setColor("clear")} className="h-12 w-12 bg-black mt-5 ml-5 flex items-center justify-center ">
                <button>clear</button>
            </div>
            </div>
        </div>
    )
}