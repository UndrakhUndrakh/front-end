import { LocaleRouteNormalizer } from "next/dist/server/normalizers/locale-route-normalizer";
import { useState } from "react"


const data = [
    {
        id: 1,
        title: "Test 1",
        descrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula urna at dolor gravida, a elementum ligula vulputate. Sed non nisl ac odio venenatis consequat. Morbi sit amet erat vestibulum, fermentum magna et, efficitur leo. Aliquam erat volutpat."
    },
    {
        id: 2,
        title: "Test 2",
        descrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula urna at dolor gravida, a elementum ligula vulputate. Sed non nisl ac odio venenatis consequat. Morbi sit amet erat vestibulum, fermentum magna et, efficitur leo. Aliquam erat volutpat."
    },
    {
        id: 1,
        title: "Test 1",
        descrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula urna at dolor gravida, a elementum ligula vulputate. Sed non nisl ac odio venenatis consequat. Morbi sit amet erat vestibulum, fermentum magna et, efficitur leo. Aliquam erat volutpat."
    },
    {
        id: 2,
        title: "Test 2",
        descrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula urna at dolor gravida, a elementum ligula vulputate. Sed non nisl ac odio venenatis consequat. Morbi sit amet erat vestibulum, fermentum magna et, efficitur leo. Aliquam erat volutpat."
    },
    {
        id: 1,
        title: "Test 1",
        descrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula urna at dolor gravida, a elementum ligula vulputate. Sed non nisl ac odio venenatis consequat. Morbi sit amet erat vestibulum, fermentum magna et, efficitur leo. Aliquam erat volutpat."
    },
    {
        id: 2,
        title: "Test 2",
        descrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula urna at dolor gravida, a elementum ligula vulputate. Sed non nisl ac odio venenatis consequat. Morbi sit amet erat vestibulum, fermentum magna et, efficitur leo. Aliquam erat volutpat."
    },
]

export default function Json() {
    const [grid, setGrid] = useState(false);
    return <div className="p-6 max-2-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Niitleluud</h1>
            <button
            onClick={()=> setGrid(!grid)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-6000 transition"
            >
                {grid ? "Jagsaalt harah ruu shiljih" : "Grid view ruu shiljih"}
            </button>
        </div>
        <div className={
            grid == true ? "grid grid-cols-1 sm-grid-cols-2 gap-6" : "space-y-4"
        }>
    
        </div>
    </div>
}