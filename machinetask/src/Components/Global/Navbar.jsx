import React from 'react'
import '../../Styles/Navbar.css'

const Navbar = () => {
    return (
        <div id='navbar-fullpage'>
            <div id='navbar-page'>
                <div id='navbar-left'>
                    <div className='navbar-left-one'>
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
                    </div>
                    <div className='navbar-left-two'>
                        <p>Movies</p>
                    </div>
                    <div className='navbar-left-two'>
                        <p>Tv Show</p>
                    </div>
                    <div className='navbar-left-two'>
                        <p>People</p>
                    </div>
                    <div className='navbar-left-two'>
                        <p>More</p>
                    </div>
                </div>
                <div id='navbar-right'>
                    <div className='navbar-right-one'>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='navbar-right-two'>
                        <div className='navitem'>
                            <p>EN</p>
                        </div>
                    </div>
                    <div className='navbar-right-three'>
                        <p>Login</p>
                    </div>
                    <div className='navbar-right-four'>
                        <p>Join TMDB</p>
                    </div>
                    <div className='navbar-right-five'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Navbar
