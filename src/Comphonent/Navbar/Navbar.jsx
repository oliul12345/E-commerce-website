import { Link } from "react-router-dom";
import { FaIdCardClip } from "react-icons/fa6";
const Navbar = () => {
  const navItem = (
    <>
      <Link to={'/'}><li>Home</li></Link>
      <Link><li>Blog</li></Link>
      <Link><li>About Us</li></Link>
      <Link to={'/contactUs'}><li>Contact Us</li></Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">  
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img src="public/resource/logo.png" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
        </div>
        <div className="navbar-end  gap-10">
           <ul className="menu menu-horizontal px-1 gap-5 hidden lg:flex">{navItem}</ul>
          <a className="btn"><FaIdCardClip /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
