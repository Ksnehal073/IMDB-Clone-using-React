import React, { useState } from 'react'
import "./Header.css"
import { NavLink as Link } from 'react-router-dom'

const Header = () => {
    const [mobileNav,setMobileNav] = useState(false)
    return (
        <div className='header'>
            <div className="headerLeft">
                <Link to='/'><img className="header_icon" alt="Logo Image of Imdb" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' /></Link>

            </div>

            <div class="bars">
                <a href="#" onClick={() => setMobileNav(!mobileNav)}><i class="fas fa-bars"></i></a>
            </div>

            <div className={mobileNav ? "headerRight mobile-nav" : "headerRight"}>
                <Link to="/movies/popular" style={{ textDecoration: 'none' }}><span>Popular</span></Link>
                <Link to='/movies/top_rated' style={{ textDecoration: 'none' }}><span>Top Rated</span></Link>
                <Link to='/movies/upcoming' style={{ textDecoration: 'none' }}><span> Upcoming</span></Link>
            </div>

           
        </div>
    )
}

export default Header
