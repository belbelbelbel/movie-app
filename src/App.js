import { useState } from 'react';
import './App.css';
import { MovielistContainer } from './Component/MovielistContainer';
import axios from 'axios';
import styled from "styled-components"
import { Movieinfocontainer } from './Component/Movieinfocontainer';
export const API_KEY = "8f1b566c"
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;
function App() {
  const [searchquery, setsearchquery] = useState("")
  const [timeout, setimeout] = useState()
  const [movielist, setmovielist] = useState([])
  const [selectedMovie, setselectedMovie] = useState()
  const fetch = async (searchString) => {
    const res = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
    setmovielist(res.data.Search)
  }
  const handlechange = (e) => {
    clearTimeout(timeout)
    setsearchquery(e.target.value)
    const timeup = setTimeout(() => {
      fetch(e.target.value)
    }, 500);
    setimeout(timeup);
  }
  return (
    <div className="container">
      <div className='Header'>
        <div className='appname'>
          <img src="/movie-icon.svg" alt="movie" className='movieimage' />
          Movie Apps
        </div>
        <div className='searchbox'>
          <div className="searchicon">
            <img src="/search-icon.svg" alt="icon" className="searchicon" />
          </div>
          <div className='searchinput'>
            <input type="text" className='searchinput' value={searchquery} onChange={handlechange} placeholder='Search movie' />
          </div>
        </div>
      </div>
      <div>
        {selectedMovie && <Movieinfocontainer selectedMovie={selectedMovie} setselectedMovie={setselectedMovie}/>}
      </div>
      <div className='movielistcontainer'>
        {
          movielist?.length ?   movielist.map((movie,index) => <MovielistContainer key={index} setselectedMovie={setselectedMovie} movie={movie}/>):<Placeholder src="/movie-icon.svg" />

        }
      </div>
    </div>
  );
}

export default App;
