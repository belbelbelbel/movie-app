import React from 'react'
import styled from "styled-components"
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 260px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;

export const MovielistContainer = ({movie,setselectedMovie}) => { 
    const {Title,Year,Type,Poster,imdbID} = movie
    return (
        <MovieContainer onClick={()=>setselectedMovie(imdbID)}>
            <CoverImage src={Poster}></CoverImage>
            <MovieName>{Title}</MovieName>
            <InfoColumn>
                <MovieInfo>year:{Year}</MovieInfo>
                <MovieInfo>type:{Type}</MovieInfo>
            </InfoColumn>
        </MovieContainer>
    )
}
