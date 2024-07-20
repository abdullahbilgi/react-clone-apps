import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TittleCards = ({ title, category }) => {
  const cardsRef = useRef();

  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2MxNjExYmI5NDYxYThkZTM5NGZmMGU4M2NjOGI2NiIsIm5iZiI6MTcyMTIyODg4OC42NDAzNTUsInN1YiI6IjY2OTdkZDQyYTc5MzQ2MGZmMWUxZWIxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3OMiIPlZZ4SjKdiC8g-nRNUj0NOsrrLN0NI_l4OWTS4",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWhell);
  }, []);

  const handleWhell = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular On Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
        {apiData.map((movie, index) => {
          return (
            <Link to={`/player/${movie.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
                alt=""
              />
              <p>{movie.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TittleCards;
