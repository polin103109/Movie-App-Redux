import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApikey";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieApi.get(
          `?apikey=${APIKey}&s=Harry+Potter&plot=full`
        );
        setMovies(response.data.Search || []); // Assuming `Search` contains the list of movies
      } catch (err) {
        setError("Failed to fetch movies. Please try again later.");
        console.error(err);
      }
    };

    fetchMovies();
  }, []); // Empty dependency array since APIKey doesn't change

  return (
    <div>
      <div className="banner-image"></div>
      {error ? <div>{error}</div> : <MovieListing movies={movies} />}
    </div>
  );
}

export default Home;
