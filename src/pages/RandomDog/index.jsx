import { useEffect } from "react";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import { useGetData } from "../../Hooks/useGetData"; 

const RandomDog = () => {
  const { data, isFetching, refetch } = useGetData('https://random.dog/woof.json'); 
  const showImage = () => {  
    if (isFetching)
      return <Spinner />
    else 
      return (data?.url.includes('.mp4')) ? <video controls><source src={data?.url} type="video/mp4"></source></video> : <img src={data?.url} alt="" />  
    }

  useEffect(() => {
    return console.log("teste")
  }, [data])

  return (
    <div className="content">
      <Header title="RandomDog"/>
      <div className="mt-4 w-96 mx-auto">
        { 
          showImage()
        }
      </div>
      <button onClick={refetch} className="mt-4 btn-primary">New</button>
    </div>
  );
}
export default RandomDog;
