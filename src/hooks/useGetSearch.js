import { useEffect, useState } from "react";
import axios from 'axiosConfig'
import { filterDataOfSongs } from "utils";

export const useGetSearch = ({query}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}&limit=24`
        )
        .then((res) => {
            const songs = filterDataOfSongs(res.data.data)
            setData(songs)
        })
        .catch((err) => setError(err));
    };
   
      getData();

  }, [query]);

  return {
      error, 
      data,
      isLoading: !error && !data
  }

};
