import { useState, useEffect } from "react";
import axios from "axiosConfig";
import ax from "axios";
import { filterDataOfSongs } from "utils";

export const useGetArtistData = ({ id }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = () => {
      axios
        .get(`artist/${id}`)
        .then(async (res) => {
          const tracklist = res.data.tracklist;
          const url = tracklist.slice(0, tracklist.length - 2);
          try {
            const resp = await ax.get(`https://thingproxy.freeboard.io/fetch/${url}10`)
            const tracks = filterDataOfSongs(resp.data.data)
            const dataArtist = {
                id: res.data.id,
                link: res.data.link,
                name: res.data.name,
                picture: res.data.picture_medium
            }
            setData({tracks, dataArtist})
          } catch (error) {
            setError(error)
          }

        })
        .catch((err) => setError(err));
    };
    getData();
  }, [id]);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
