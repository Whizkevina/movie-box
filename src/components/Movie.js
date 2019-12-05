/** @format */

import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="">
          <div className="">
            <h2>{movie.Title}</h2>
            <div className="card-body">
              <img
                width="200"
                alt={`The movie titled: ${movie.Title}`}
                src={poster}
              />
            </div>
            <p className="card-footer">({movie.Year})</p>
            <p className="card-footer">{movie.Type}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Movie;
