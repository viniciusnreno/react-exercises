import { useState } from 'react';

export const useCounter = () => {
  const [ result, setResult ] = useState(0);

  const increase = () => {
    setResult(result + 1);
  } 
  const decrease = () => {
    setResult(result - 1);
  } 
  const setZero = () => {
    setResult(0);
  } 

  return { result, increase, decrease, setZero };
}
