import React, { useEffect, useState } from 'react'
import '../Styles/Home.css';
import { useNavigate } from 'react-router-dom';


const Api_key = "c45a857c193f6302f2b5061c3b85e743";

const fetchurl = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`

const Home = () => {

  const [Data, setData] = useState([])
  const route = useNavigate();

  useEffect(() => {
    fetch(fetchurl)
      .then(res => res.json())
      .then(json => setData(json.results))
  }, [])
  console.log(Data, "Data");

  function opensinglemovie(e){
    route(`/singlemovie/${e.id}`)
  }


  return (
    <>
      <div id='homepagefullpage'>
        <div id='homepage'>
          {Data && Data.map((e) => (
            <div id='homepage-one' onClick={() => opensinglemovie(e)}>
              <div id='homepage-one-box'>
              <img src ={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} alt="logo" className="adj-img" />
              </div>
              <div id='homepage-one-box-caption'>
                <p>{e.title}</p>
                <p style={{marginTop:"3%"}}>Rating: {e.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Home;

