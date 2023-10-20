import { IoFastFoodSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { handleLogOut, user } = useContext(AuthProvider);

  const onLogOut = () => {
    handleLogOut()
      .then(() => {
        // Sign-out successful.
        toast("Log out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className=" bg-[burlywood]">
      <div className="navbar ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="/">
                <li>
                  <a>Home</a>
                </li>
              </NavLink>
              <NavLink to="/addProducts">
                <li>
                  <a>Add Product</a>
                </li>
              </NavLink>
              <NavLink to="/cart">
                <li>
                  <a>My Cart</a>
                </li>
              </NavLink>
              <NavLink to="/login">
                <li>
                  <a>Login</a>
                </li>
              </NavLink>
              <NavLink to="/register">
                <li>
                  <a>Register</a>
                </li>
              </NavLink>
              <NavLink to="/blog">
                <li>
                  <a>Blog</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <IoFastFoodSharp /> Foodism
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to="/">
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink to="/addProducts">
              <li>
                <a>Add Product</a>
              </li>
            </NavLink>
            <NavLink to="/cart">
              <li>
                <a>My Cart</a>
              </li>
            </NavLink>
            <NavLink to="/login">
              <li>
                <a>Login</a>
              </li>
            </NavLink>
            <NavLink to="/register">
              <li>
                <a>Register</a>
              </li>
            </NavLink>
            <NavLink to="/blog">
              <li>
                <a>Blog</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <img className="w-[30px] rounded-full" src={user.photoURL} alt="" />
              <p>{user.displayName}</p>
              <button className="btn" onClick={onLogOut}>
                Log out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
