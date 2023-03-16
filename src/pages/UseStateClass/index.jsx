import { useState, useEffect, useRef } from 'react';

export function UseStateClass(){
  const [ result, setResult ] = useState(0);
  const prevResult = useRef();

  // useEffect(() => {
  //   if (prevResult.current !== undefined) {
  //     const message =
  //       result > prevResult.current
  //         ? "O número foi aumentado!"
  //         : "O número foi diminuído!";
  //     alert(message);
  //   }
  //   prevResult.current = result;
  // }, [result]);


  console.log(result)
    function increase(){
      setResult(result + 1);
    } 
  function decrease(){
    setResult(result - 1);
  } 
  function setZero(){
    setResult(0);
  } 
  return(
    <div className="content">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">UseStateClass</h1>
      <h2 className="mb-8 mt-6 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{result}</span></h2>
      <div className="flex w-52 justify-around mx-auto">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increase}>+</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrease}>-</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={setZero}>0</button>
      </div>
    </div>
  );
}
