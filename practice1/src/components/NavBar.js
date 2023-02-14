import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center px-4 max-w-[1240px] mx-auto text-white h-24 ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="cursor-pointer block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 border-r-gray-900 w-[60%] h-full border-r bg-[#000300] ease-in-out duration-500"
            : " fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-600">Home</li>
          <li className="p-4 border-b border-b-600">Company</li>
          <li className="p-4 border-b border-b-600">Resources</li>
          <li className="p-4 border-b border-b-600">About</li>
          <li className="p-4 border-b border-b-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
