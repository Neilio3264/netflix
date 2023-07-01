import React, { useEffect, useState } from "react";
import { IoPlaySharp, IoInformationCircleOutline } from "react-icons/io5";
import "./Banner.css";
import axios from "@services/TMDB/API/axios";
import requests from "@services/TMDB/API/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.NetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">
            <IoPlaySharp className="banner__buttonIcon" />
            <span className="banner__buttonText">Play</span>
          </button>
          <button className="banner__button">
            <IoInformationCircleOutline className="banner__buttonIcon" />
            <span className="banner__buttonText">More Info</span>
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 100)}
        </h1>
      </div>

      <div className="banner__fadeButton" />
    </header>
  );
}

export default Banner;
