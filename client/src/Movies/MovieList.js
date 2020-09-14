import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} id={movie.id} />
      ))}
    </div>
  );
}
const NavButton = styled.div`
  color: black;
`;
function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const { url } = useRouteMatch();
  return (
    <Link style={{ textDecoration: "none" }} to={`${url}movie/${props.id}`}>
      <NavButton>
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
        </div>
      </NavButton>
    </Link>
  );
}
