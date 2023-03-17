import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";

const PredictAge = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState(0);

  const getData = async () => {
    await axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setData(res.data.age);
    })
  }

  return(
    <>
      <div className="content">
        <Header title="Predict Age"/>
        <div className="flex mx-auto justify-center content-center mt-6 mb-2">
          <div className="w-52">
            <input onChange={(e) => setName(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <button onClick={getData} className="ml-2 btn-primary">
            Predict
          </button>
        </div>
        <span className="font-bold leading-none tracking-tight dark:text-white text-gray-900 lg:text-2xl">Predicted age: <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">{data}</mark></span>
      </div>
    </>
  );
}

export default PredictAge