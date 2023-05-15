import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import { json } from 'react-router-dom';

const API_key = "c45a857c193f6302f2b5061c3b85e743";

const fetchurl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`

const Toprated = () => {

    const [topratedmovie, settopratedmovie] = useState([]);
    console.log(topratedmovie, "topratedmovie");

    useEffect(() => {
        fetch(fetchurl)
        .then(response => response.json())
        .then(json => settopratedmovie(json.results))
    }, [])
    console.log(topratedmovie, "hello");
    return (
        <div>
            <div id='homepagefullpage'>
                <div id='homepagetop'>

                </div>
                <div id='homepage'>
                    {topratedmovie && topratedmovie.map((e) => (
                        <div id='homepage-one'>
                            <div id='homepage-one-box'>
                                <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} alt="logo" className="adj-img" />
                            </div>
                            <div id='homepage-one-box-caption'>
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

export default Toprated
