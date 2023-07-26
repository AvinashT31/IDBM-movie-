import React, { useState } from 'react'
import '../../Styles/Home.css'
import { useNavigate, useParams } from 'react-router-dom';

const API_key = "c45a857c193f6302f2b5061c3b85e743";

const Navbar = () => {

    const [query, setquery] = useState({ movie: "" });
    console.log(query, "query");

    const route = useNavigate();

    function searchhere(e) {
        var name = e.target.name;
        var value = e.target.value;
        setquery({ ...query, [name]: value });
    }

    function handlesearch(e) {
        e.preventDefault();
        setquery({ movie: "" });
        route(`/searchmovie/${query.movie}`)
    }

    return (
        <div className='navbar-fullpage'>
            <div className='navbar-page'>
                <div className='navbar-left'>
                    <div onClick={() => route('/')} className='navbar-left-one'>
                        <p>MovieDb</p>
                    </div>
                </div>
                <div className='navbar-right'>
                    <div onClick={() => route('/')} className='navbar-right-one'>
                        <p>Popular</p>
                    </div>
                    <div onClick={() => route('/topratedmovie')} className='navbar-right-two'>
                        <p>Top Rated</p>
                    </div>
                    <div onClick={() => route('/upcomingmovie')} className='navbar-right-three'>
                        <p>Upcoming</p>
                    </div>
                    <div className='navbar-right-four'>
                        <input onChange={(e) => searchhere(e)} name='movie' value={query.movie} type="text" placeholder='Movie Name' />
                        <button onClick={(e) => handlesearch(e)} >Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
