import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import '../../components/mediaQueries/mediaQueries.css'
import MovieList from '../../components/movieList/MovieList'

const Home = () => {
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8e647b6393150bbda1a91e715d50e47f').
            then(res => res.json()).
            then(data => setPopular(data.results))

    }, [])

    const [popular, setPopular] = useState([])
    return (
        <div className='carousel_wrapper'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    popular.map((movie) => {
                        return <Link style={{textDecoration:"none" ,color:'white'}} to = {`/movie/${movie.id}`}>
                            <div className="posterImg">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="Poster Image" />
                            </div>

                            <div className="posterImg_overlay">
                                <div className="posterImg_title">
                                    {movie ? movie.original_title : ''}
                                </div>
                                <div className="posterImg_runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage__rating">
                                        {movie ? movie.vote_average : ""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                            </div>
                        </Link>


                    })
                }
            </Carousel>
            <MovieList></MovieList>
        </div>
    )
}

export default Home
