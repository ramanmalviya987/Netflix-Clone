import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import './Banner.css'
const base_URL = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // console.log(Math.floor(Math.random() * request.data.results.length-1))
      // console.log(request.data.results.length-1)
      return request;
    }
    fetchData();
  }, []);
  // console.log(movies);

  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_URL}${movies?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movies?.title || movies?.name|| movies?.original_name}</h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        
        </div>
        <h1 className="banner__descriptions">{truncate(movies?.overview,150)}</h1>
      </div>
      <div className="banner__fadebottom" />
    </header>
  );
}

export default Banner;
