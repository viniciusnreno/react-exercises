import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetData = (url) => {
  const { data, isFetching, refetch } = useQuery(["dog"], () => {
    return axios.get(url).then((res) => res.data)
  });

  return { data, isFetching, refetch };
}