import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_URL = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      // console.log(request.data.results)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  //   console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // const handleClick = (movie) => {
  //   if (trailerURL) {
  //     setTrailerURL("");
  //   } else {
  //     movieTrailer(null,{tmdbId: movie.id})
  //       .then((url) => {
  //         console.log(url);

  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         console.log(urlParams);
  //         setTrailerURL(urlParams.get("v"))
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };



  const handleClick = (movie) => {
    console.log(movie);
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParamsn" + urlParams);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}{" "}
    </div>
  );
}

export default Row;
