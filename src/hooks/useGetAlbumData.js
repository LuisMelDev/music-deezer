import { useState, useEffect } from "react";
import axios from "axiosConfig";
import { filterDataAlbum } from "utils";

export const useGetAlbumData = ({ id }) => {
  const [dataAlbum, setDataAlbum] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAlbumInfo = () => {
      axios
        .get(`album/${id}`)
        .then((res) => {
            if(res.data.error){
                return setError(res.data.error)
            }
            let data = filterDataAlbum(res.data)
            setDataAlbum(data)
        })
        .catch((err) => setError(err));
    };
    getAlbumInfo();
  }, [id]);

  return {
      isLoading: !dataAlbum && !error,
      dataAlbum,
      error 
  }
};
