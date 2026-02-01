import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios.jsx";
import requests from "../../../utils/request.jsx";
import "./Row.css";

const Row = () => {
  const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    }, []);
  

  return (
    <div className="row">
      <h1>Netflix Originals</h1>
      <div className="row__posters">
        {movie.map((mov) => (
          <img
            key={mov.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
            alt={mov.name}

          />
        ))}
      </div>

      <div className="trailer"></div>
    </div>
  );
};

export default Row;
