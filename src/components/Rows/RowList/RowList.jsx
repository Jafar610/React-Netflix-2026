import React from "react";
import Row from "../Row/Row";
import "./rowList.css";
import requests from "../../../utils/request";
function RowList() {
  return (
    <>
      <Row
        title = "Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row
        title = "Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title = "TV Shows"
        fetchUrl={requests.fetchTvShow}
      />
      
      <Row
        title = "Top Rated Movies"
        fetchUrl={requests.fetchTopRatedMovies}
      />

      <Row
        title = "Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title = "Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title = "Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title = "Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
    </>
  );
}

export default RowList;
