import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 text-[#f4f4f9]">
      <h1 className="text-3xl font-extrabold text-[#d2d7df]">UndefinedTaste</h1>

      <div className="flex gap-12 px-10 py-3 text-xl bg-[#00253e]/90 rounded-full backdrop-blur-md font-semibold">
        <NavLink className="px-4 py-2 rounded-full transition duration-300 ease-in-out
             hover:text-white hover:bg-white/10 hover:shadow-md hover:shadow-white/10" to="/">Home</NavLink>
        <NavLink className="px-4 py-2 rounded-full transition duration-300 ease-in-out
             hover:text-white hover:bg-white/10 hover:shadow-md hover:shadow-white/10" to="/about">About</NavLink>
        <NavLink className="px-4 py-2 rounded-full transition duration-300 ease-in-out
             hover:text-white hover:bg-white/10 hover:shadow-md hover:shadow-white/10" to="/menu">Menu</NavLink>
        <NavLink className="px-4 py-2 rounded-full transition duration-300 ease-in-out
             hover:text-white hover:bg-white/10 hover:shadow-md hover:shadow-white/10" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
