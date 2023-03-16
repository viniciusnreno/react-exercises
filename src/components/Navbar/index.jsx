import { Link } from "react-router-dom";

const Navbar = () => {
  return (<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div className="container flex flex-wrap items-center justify-center mx-auto">
      <div className="hidden w-full md:block md:w-auto">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link to="/">
              <span className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/classes/useState">
              <span className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">useState</span>
            </Link>
          </li>
          <li>
            <Link to="/classes/predictAge">
              <span className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Predict Age</span>
            </Link>
          </li>
          <li>
            <Link to="/classes/RandomDog">
              <span className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">RandomDog</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>);
}

export default Navbar