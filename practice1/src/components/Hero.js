import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with data Analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="font-bold text-xl md:text-5xl sm:text-4xl">
            Fast, flexible financing for
          </p>
          <Typed
            className="font-bold py-4 text-xl pl-2 md:text-5xl md:pl-4 sm:text-4xl"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Hero;
