import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Singlemovie.css'

const API_key = "c45a857c193f6302f2b5061c3b85e743";

const Singlemovie = () => {
    const [single, setSingle] = useState([]);

    const [heading, setheading] = useState([]);

    // const { id } = useParams()
    const data = useParams();
    console.log(data.id, "data");

    useEffect(() => {


        fetch(`https://api.themoviedb.org/3/movie/${data.id}?api_key=${API_key}&language=en-US`)
            .then(res => res.json())
            .then(json => setheading(json))

        fetch(`https://api.themoviedb.org/3/movie/${data.id}/credits?api_key=${API_key}&language=en-US`)
            .then(res => res.json())
            .then(json => {
                if (json.cast) {
                    console.log(json, "helllo");
                    setSingle(json.cast);
                } else {
                    console.log('Cast not found in response.');
                }
            })
            .catch(err => console.error(err));
    }, []);
    console.log(heading, "heading");
    console.log(single, "single");

    return (
        <div>
            <div className='singlemoviepage'>
                <div className='moviepage'>
                    <div className='movietoppage'>
                        <div className='movietopleftpage'>
                            <div className='moviepages'>
                                <div className='movietopleftpage-one'>
                                    <img src={`https://image.tmdb.org/t/p/w500${heading.backdrop_path}`} alt="Image are not upload" className="adj-img" />
                                </div>
                                <div className='movietopleftpage-two'>
                                    <div className='movietopleft-heading'>
                                        <h1>{heading.original_title}</h1>
                                        <p>Rating: {heading.vote_average}</p>
                                    </div>
                                    <div className='movietopbottom-heading'>
                                        <p>{heading.tagline}</p>
                                        <p>Realease Date: {heading.release_date}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='movieoverview'>
                                <h1>Overview</h1>
                                <p>{heading.overview}</p>
                            </div>
                        </div>
                        <div className='movietoprightpage'>
                            <img src={`https://image.tmdb.org/t/p/w500${heading.poster_path}`} alt="Image are not upload" className="adj-img" />
                        </div>
                    </div>
                </div>
                <div className='homepage'>
                    {single && single.map((e) => (
                        <div className='homepage-one'>
                            <div className='homepage-one-box'>
                                <img src={`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt="Image are not upload" className="adj-img" />
                            </div>
                            <div className='homepage-one-box-caption'>
                                <p>{e.original_name}</p>
                                <p style={{ marginTop: "3%" }}>Rating: {e.known_for_department}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Singlemovie;

