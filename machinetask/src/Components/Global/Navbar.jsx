import React, { useState } from 'react'
import '../../Styles/Home.css'
import { useNavigate, useParams } from 'react-router-dom';

const API_key = "c45a857c193f6302f2b5061c3b85e743";

const Navbar = () => {

    //Screen Resolution 
    const screenWidth = window.screen.width;

    const isMobileView = screenWidth <= 480;

    console.log(isMobileView, "Hello Avinash");

    const[isMobileClick, setIsMobileClick] = useState(false);

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

                    <div className='navbar-right-four'>
                        <input onChange={(e) => searchhere(e)} name='movie' value={query.movie} type="text" placeholder='Movie Name' />
                        <button onClick={(e) => handlesearch(e)} >Search</button>
                    </div>

                    {/* Mobile View Controller */}
                    {isMobileView ? <div className='hamberg' onClick={()=> setIsMobileClick(!isMobileClick)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path></svg>
                    </div> : <>

                        <div onClick={() => route('/')} className='navbar-right-one'>
                            <p>Popular</p>
                        </div>
                        <div onClick={() => route('/topratedmovie')} className='navbar-right-two'>
                            <p>Top Rated</p>
                        </div>
                        <div onClick={() => route('/upcomingmovie')} className='navbar-right-three'>
                            <p>Upcoming</p>
                        </div>

                    </>}

                    {isMobileClick && <div className='mobList'>
                    <p onClick={() => {route('/'); setIsMobileClick(!isMobileClick)}} >Popular</p>
                    <p onClick={() => {route('/topratedmovie');setIsMobileClick(!isMobileClick)}} >Top Rated</p>
                    <p  onClick={() => {route('/upcomingmovie');setIsMobileClick(!isMobileClick)  }  }>Upcoming</p>
                        </div>}

                </div>
            </div>
        </div>

    )
}

export default Navbar
