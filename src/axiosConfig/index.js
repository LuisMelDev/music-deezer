import axios from "axios";

const instance = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "923cff1576msh1afb25e17ddd3eep1183ccjsn6ac33acec8bf",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export default instance