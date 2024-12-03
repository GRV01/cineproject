import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import requests from "../requests";

const Home = () => {
  return (
    <>
      <Hero />
      <Row rowID="1" title="Discover" fetchURL={requests.requestDiscover} />
      <Row
        rowID="2"
        title="Now Playing"
        fetchURL={requests.requestNowplaying}
      />
      <Row rowID="3" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
    </>
  );
};

export default Home;
