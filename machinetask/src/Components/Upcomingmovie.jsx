import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'

const API_key = "c45a857c193f6302f2b5061c3b85e743";

const fetchurl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_key}&language=en-US&page=1
`

const Upcomingmovie = () => {

  const [Data, setData] = useState([]);
  console.log(Data, "Data");

  useEffect(() => {
    fetch(fetchurl)
      .then(Response => Response.json())
      .then(json => setData(json.results))
  }, [])
  console.log(Data, "Data");
  return (
    <div>
      <div className='homepagefullpage'>
        <div className='homepage'>
          {Data && Data.map((e) => (
            <div className='homepage-one'>
              <div className='homepage-one-box'>
                <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} alt="logo" className="adj-img" />
              </div>
              <div className='homepage-one-box-caption'>
                <p>{e.title}</p>
                <p style={{ marginTop: "3%" }}>Rating: {e.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Upcomingmovie
