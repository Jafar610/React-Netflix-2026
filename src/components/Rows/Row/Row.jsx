import { useEffect, useState } from "react";
import axios from "../../../utils/axios.jsx";
import "./Row.css";

const Row = ({title, fetchUrl, isLargeRow}) => {
  const [movie, setMovie] = useState([]);
  const [trailerURL, setTrailerURL] = useState([]);
  const base_URL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async ()=>{
      try{
        const request = await axios.get(`${fetchUrl}`);
        setMovie(request.data.results);
      } catch(error){
        console.log("Error",error);
      }
    })()
  }, []);

  const handleClick = (movie)=>{
    if(trailerURL){
      setTrailerURL('')
    }else{
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
      .then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerURL(urlParams.get('v'));
      })
    }
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars:{
      autoplay:1,
    },
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {
          movie?.map((movie, index)=>(
            <img 
            onClick={()=>handleClick(movie)}
            key={index}
            src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} />
          ))
        }
      </div>

      <div style={{padding: '40px'}}>
        {trailerURL && <YouTube videoId = {trailerURL} opts = {opts}/>}
      </div>
    </div>
  );
};

export default Row;
