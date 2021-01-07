import { useEffect, useState } from "react";
import axios from 'axios'
import { filterDataOfSongs } from "utils";

export const useGetTrendsSongs = ({trends, setTrends}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?limit=18"
        )
        .then((res) => {
            const songs = filterDataOfSongs(res.data.data)
            setData(songs)
        })
        .catch((err) => setError(err));
    };
    if(!trends){
      getData();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if(data){
      setTrends(data)
    }
    // eslint-disable-next-line
  }, [data])



  return {
      error
  }

};
