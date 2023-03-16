import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../Tools/store'

const Navbar = () => {
  const username = useSelector(state => state.user.value.username);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
              <div className="flex items-center">
                <ul className="flex flex-row mt-0 space-x-8 text-sm font-medium">
                  <li>
                    <Link to="/classes/Form">
                      <span onClick={dispatch(logout())} className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">{username.length > 0 ? "Logout" : "Login" }</span>
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
                  <li>
                    <Link to="/classes/Redux">
                      <span className="text-gray-900 dark:text-white hover:underline" aria-current="page">Redux</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-500 dark:text-white">{username.length > 0 ? `Hello, ${username}` : "" }</span>
                <img src={username.length > 0 ? `https://github.com/${username}.png` : "" } className="ml-6 rounded-2xl h-6 sm:h-9" />
              </div>
          </div>
      </nav>
    </>
  );
}

export default Navbar