import React from "react";
import "./HomePage.css";
import NavBar from "@components/layout/navigation/NavBar/NavBar";
import Banner from "@components/layout/banner/Banner/Banner";
import Row from "@components/layout/carousel/Row/Row";
import requests from "@services/TMDB/API/requests";

function HomePage() {
  return (
    <div className="homeSreen">
      <NavBar />

      <Banner />

      <Row title="Trending Now" fetchUrl={requests.Trending} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.ActionMovies} />
      <Row title="Top Rated" fetchUrl={requests.TopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.ComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.HorrorMovies} />
      <Row title="Only on Netflix" fetchUrl={requests.NetflixOriginals} />
      <Row title="Romance Movies" fetchUrl={requests.RomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.Documentaries} />
    </div>
  );
}

export default HomePage;
