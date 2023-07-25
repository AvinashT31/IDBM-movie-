import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/Searchmovie.css'

const API_key = "c45a857c193f6302f2b5061c3b85e743";

const SearchMovie = () => {

    const [result, setresult] = useState();
    console.log(result, "result")

    const route = useNavigate();

    const { movie } = useParams();
    console.log(movie, "movie")

    const fetchurl = `https://api.themoviedb.org/3/search/movie?api_key=${API_key}&language=en-US&query=${movie}&page=1`

    useEffect(() => {
        fetch(fetchurl)
            .then(res => res.json())
            .then(json => setresult(json.results))
    }, [fetchurl])

    return (
        <>
            <div className='searchfullpage'>
                <div className='searchpage'>
                    {result && result.map((e) => (
                        <div className='searchpage-one' onClick={() => route(`/singlemovie/${e.id}`)}>
                            <div className='searchpage-one-box'>
                                <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} alt="logo" className="adj-img" />
                            </div>
                            <div className='searchpage-one-box-caption'>
                                <p>{e.title}</p>
                                <p style={{ marginTop: "3%" }}>Rating: {e.vote_average}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default SearchMovie


