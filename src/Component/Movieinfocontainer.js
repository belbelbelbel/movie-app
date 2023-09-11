import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Axios from 'axios';

export const API_KEY = "8f1b566c";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;

export const Movieinfocontainer = ({ selectedMovie,setselectedMovie }) => {
  const [movie, setMovie] = useState({}); // Initialize movie as an empty object

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await Axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`);
        setMovie(response.data); // Update movie with the fetched data
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    if (selectedMovie) {
      fetchMovieData();
    }
  }, [selectedMovie]);

  return (
    <Container>
      {movie.Title ? (
      <>
        <CoverImage src={movie?.Poster} alt="Movie Poster" />{/* Use movie?.Poster */}
      <InfoColumn>
            <MovieName>
              {movie?.Type}: <span>{movie?.Title}</span>
            </MovieName>
            <MovieInfo>
              IMDB Rating: <span>{movie?.imdbRating}</span>
            </MovieInfo>
            <MovieInfo>
              Year: <span>{movie?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Language: <span>{movie?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Rated: <span>{movie?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released: <span>{movie?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime: <span>{movie?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre: <span>{movie?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director: <span>{movie?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors: <span>{movie?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot: <span>{movie?.Plot}</span>
            </MovieInfo>
          </InfoColumn>
          <Close onClick={()=> setselectedMovie(null)}><span>x</span> </Close>
      </>
      ):(
        "loading..."
      )}
      
    </Container>
  );
};
