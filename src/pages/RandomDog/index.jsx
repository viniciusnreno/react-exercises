import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Header from "../../components/Header";

const RandomDog = () => {
  const { data, isFetching, refetch } = useQuery(["dog"], () => {
    return axios.get('https://random.dog/woof.json').then((res) => res.data)
  });

  console.log(data?.url)
  const showImage = () => {  
    if (isFetching)
      return <img className="mx-auto w-20" src="/images/loading.gif"/>  
    else 
      return (data?.url.includes('.mp4')) ? <video controls><source src={data?.url} type="video/mp4"></source></video> : <img src={data?.url} alt="" />  
  }
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
