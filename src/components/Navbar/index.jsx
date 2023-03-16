import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
              <img src="https://github.com/viniciusnreno.png" className="rounded-2xl h-6 mr-3 sm:h-9" />
              <div className="flex items-center">
                  <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
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
                  <span className="mr-6 text-sm font-medium text-gray-500 dark:text-white"></span>
                  <Link to="/classes/Form">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</span>
                  </Link>
              </div>
          </div>
      </nav>
    </>
  );
}

export default Navbar