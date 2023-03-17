import { useCounter } from "../../Hooks/useCounter";
import Header from "../../components/Header";

const UseStateClass = () => {
  const { result, increase, decrease, setZero } = useCounter();
  return(
    <div className="content">
      <Header title="useState" />
      <h2 className="mb-8 mt-6 font-extrabold text-gray-900 text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{result}</span></h2>
      <div className="flex w-52 justify-around mx-auto">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increase}>+</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrease}>-</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={setZero}>0</button>
      </div>
    </div>
  );
}

export default UseStateClass;
