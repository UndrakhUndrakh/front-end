import Image from "next/image";
import localFont from "next/font/local";


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen text-balck font-mono border-black font-sans font-medium text-lg bg-gray-950 relative">
      <div className="bg-[url('https://i.pinimg.com/736x/68/6f/c6/686fc66d5f5c49703d0a5ebe8bb568fc.jpg')] bg-cover blur-lg h-screen w-full absolute"></div>
        <div className="bg-white border-4 border-black flex items-center space-x-2 w-auto h-60 p-4 z-50">
        <div className="w-200 ">
        <p>Hello world my name is Undrakh</p>
        <p>I studie at Nest Education IT School</p>
        <p>My age is 16 and i studie to become an developer.</p>
        </div>
        <Image src="/person2.ico" width={100} height={100} />

        </div>
      </div>
  );
}
