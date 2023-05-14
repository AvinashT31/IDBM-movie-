// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// const API_key = "c45a857c193f6302f2b5061c3b85e743";
// console.log(API_key, "API_key")


// // const fetchurl = `https://api.themoviedb.org/3/movie/${}/credits?api_key=${API_key}&language=en-US`
// // console.log(fetchurl, "fetchurl");

// const Singlemovie = () => {

//     const [single, setsingle]= useState([]);
//     console.log(data, "data");

//     const data = useParams();
//     console.log(data, "id")

//     useEffect(()=> {
//         async function(){
//             const fetchurl = await axios.get(`https://api.themoviedb.org/3/movie/${data}/credits?api_key=${API_key}&language=en-US`);
//             set(fetchurl)
//         }
//     },[data])

//     return (
//         <div>

//         </div>
//     )
// }

// export default Singlemovie


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Singlemovie.css'
import axios from 'axios';

const API_key = "c45a857c193f6302f2b5061c3b85e743";

const Singlemovie = () => {
    const [single, setSingle] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchurl = axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_key}&language=en-US`)
            .then(response => {
                setSingle(response.data.cast);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);
    console.log(single, "single");

    return (
        <div>
            <div id='homepagefullpage'>
                <div id='homepage'>
                    {single && single.map((e) => (
                        <div id='homepage-one'>
                            <div id='homepage-one-box'>
                                <img src={`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt="Image are not upload" className="adj-img" />
                            </div>
                            <div id='homepage-one-box-caption'>
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
{/* <div id='singlemoviepage'>
                <div id='singlemovie'>
                    {single && single.map((e) => (
                        <div id='castmovie'>
                            <div id='castmoviestar'>
                                <div id='castpic'>
                                    <img src={`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt="logo" className="adj-img" />
                                </div>
                                <div id='castname'>
                                    <p>{e.original_name}</p>
                                    <p style={{ marginTop: "4%", }}>{e.known_for_department}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}