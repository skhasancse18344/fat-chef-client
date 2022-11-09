import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  const menuItems = (
    <>
      {user?.email ? (
        <>
          <li className="font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold">
            <Link to="/myReviews">My Reviews</Link>
          </li>
          <li className="font-semibold">
            <Link to="/addServices">Add Services</Link>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/">Home</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar h-20 mb-12 pt-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img className="w-20 rounded-full" src={logo} alt="" />
          <span className="font-extrabold text-base">Fat Chef</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <button
            onClick={handleLogOut}
            className="btn btn-outline btn-warning"
          >
            Log Out
          </button>
        ) : (
          <div>
            <Link to={"/signup"}>
              {" "}
              <button className="btn btn-outline btn-warning mr-3">
                Sign Up
              </button>
            </Link>
            <Link to={"/login"}>
              <button className="btn btn-outline btn-warning mr-3">
                Log In
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
