import React from "react";
import "./card.css";
export default function MovieCard(props) {
  const movie = props.data;
  const imageUrl = `https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`;

  return (
    <div className="card" key={movie.id}>
      <h3>{movie.title}</h3>
      <img src={imageUrl} alt={movie.title} />
    </div>
  );
}
