import { HiHeart } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Navber = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isStatistics = location.pathname === "/statistics";

  return (
    <div
      className={`fixed top-0 w-full z-10 md:mx-3 mx-auto ${
        isHome ? "bg-[#9538E2] rounded-t-lg rounded-b-lg mx-3 px-10" : isStatistics ? "bg-white" : "bg-gray-100"
      }`}>
      <div className="navbar mt-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <NavLink
                  to={"/"}
                  className={`text-${isHome ? "white" : "black"}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/statistics"}
                  className={`text-${isStatistics ? "black" : "text-black"}`}>
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard"} className="text-black">
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-black">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink
                to={"/"}
                className={`text-${isHome ? "white" : "black"}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/statistics"}
                className={`text-${isStatistics ? "black" : "black"}`}>
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"} className="text-black">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <NavLink to={"/dashboard"}>
            <button className="btn text-2xl">
              <FaShoppingCart />
            </button>
          </NavLink>
          <NavLink to={"/dashboard"}>
            <button className="btn text-2xl">
              <HiHeart />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navber;
