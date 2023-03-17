import { Link,Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../Tools/store'
import { useState } from "react";

const Navbar = () => {
  const username = useSelector(state => state.user.value.username);
  const dispatch = useDispatch();
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full bg-white dark:bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="block md:hidden">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* <a href="javascript:void(0)">
                <h2 className="text-2xl font-bold">LOGO</h2>
              </a> */}
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-500 dark:text-white">{username.length > 0 ? `Hello, ${username}` : ""}</span>
                <img src={username.length > 0 ? `https://github.com/${username}.png` : ""} className="ml-6 rounded-2xl h-6 sm:h-9" />
              </div>


              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                  <Link to="/classes/Form">
                    <span onClick={dispatch(logout())} className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">{username.length > 0 ? "Logout" : "Login"}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/classes/useState">
                    <span className="text-gray-900 dark:text-white hover:underline" aria-current="page">useState</span>
                  </Link>
                </li>
                <li>
                  <Link to="/classes/PredictAge">
                    <span className="text-gray-900 dark:text-white hover:underline" aria-current="page">Predict Age</span>
                  </Link>
                </li>
                <li>
                  <Link to="/classes/RandomDog">
                    <span className="text-gray-900 dark:text-white hover:underline" aria-current="page">RandomDog</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* <a href="javascript:void(0)">
                <h2 className="text-2xl font-bold">LOGO</h2>
              </a> */}
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-500 dark:text-white">{username.length > 0 ? `Hello, ${username}` : ""}</span>
                <img src={username.length > 0 ? `https://github.com/${username}.png` : ""} className="ml-6 rounded-2xl h-6 sm:h-9" />
              </div>


              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar


