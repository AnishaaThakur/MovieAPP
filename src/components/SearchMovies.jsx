import { useState } from "react";
import MovieCard from "./MovieCard";
import ActionAreaCard from "./MaterialCard";
import { Grid } from "@mui/material";
export default function SearchMovies() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  function fetchMovies(event) {
    event.preventDefault();
    {
      /*it will prevent the query from appending ...form will not submit*/
    }
    console.log("fetch movies called");
    const url = `https://api.themoviedb.org/3/search/movie?&api_key=db2237739f5fcf8857aa40eb01259c05&query=${movieName}&include_adult=false&language=en-US&page=1`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }

  function handleInput(event) {
    console.log(event.target.value);
    setMovieName(event.target.value);
  }
  {
    /*zero warnings should be there in console */
  }

  return (
    <>
      <form className="form" onSubmit={fetchMovies}>
        {" "}
        {/*class is a reserved keyword in js */}
        <label className="label" htmlFor="query">
          Movie Name{" "}
        </label>
        <input
          className="input"
          name="query"
          type="text"
          placeholder="Enter the movie name"
          value={movieName}
          onChange={handleInput}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <Grid container columnGap={4}>
        {movies
          .filter((movie) => movie.poster_path != null)
          .map(
            (movie) => (
              <ActionAreaCard data={movie} key={movie.id} />
            ) //code reuseability
          )}
      </Grid>
    </>
  );
}
