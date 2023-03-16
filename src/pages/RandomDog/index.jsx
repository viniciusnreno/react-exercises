import axios from "axios";
import { useEffect } from "react";
import { useLoaderData, useNavigation, useRevalidator }   from "react-router-dom";
import Header from "../../components/Header";

const RandomDog = () => {
  const dogUrl = useLoaderData();
  const navigation = useNavigation();
  const revalidator = useRevalidator();

  useEffect(() => {
    console.log(navigation.state)
  }, [dogUrl])
  
  return (
    <div className="content">
      <Header title="RandomDog"/>
      <div className="mt-4 w-96 mx-auto">
        { 
          (dogUrl.includes('.mp4')) ? <video controls><source src={dogUrl} type="video/mp4"></source></video> : <img src={dogUrl} alt="" />  
        }
      </div>
      <button onClick={() => revalidator.revalidate()} className="mt-4 btn-primary">New</button>
    </div>
  );
}
export default RandomDog;

export const getData = async () => {
  const data =  await fetch(' ')
  const dog = await data.json();
  return dog.url;
}