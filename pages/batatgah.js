export default function Batatgah() {
  return (
    <div className="">
      <p className="h-12 bg-blue-600 w-full mt-20 flex items-center justify-center text-white font-mono font-bold text-lg">
        Nest high school
      </p>
      <div>
        <p className="text-5xl flex justify-center mt-10 font-semibold antialiased">
          Welcome to Nest School
        </p>
        <p className="mt-8 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the<br></br> industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
        </p>
      </div>
      <div className="flex items-center justify-center">
      <div className="w-28 rounded-xl mt-8 h-10 bg-blue-600 flex justify-center items-center">
        <button className="text-white ">Click me</button>
      </div>        <p className="text-center mt-8 ml-2">Clicked 13 times</p>

      </div>
      <div className="max-w-full h-80 mx-96 mt-16 bg-black grid grid-cols-3 gap-4">
        <div className="bg-gray-600">
            <p className="text-center mt-4 font-semibold">Why Choose Us?</p>
            <p className="text-center mt-4 space-y-4"></p>
            <p>High performance</p>  
            <p>Responsive design</p>
            
            
        </div>
        <div className="bg-gray-600"></div>
        <div className="bg-gray-600"></div>

      </div>

    </div>
  );
}
