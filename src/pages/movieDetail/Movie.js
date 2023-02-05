import React,{useEffect,useState} from 'react'
import './Movie.css'
import { useParams } from 'react-router-dom'

const Movie = () =>{
    const [movieDetail,setMovie] = useState()
    const {id} = useParams();
    useEffect(()=>{
        getData();
    },[])
    
    useEffect(()=>{
        getData()
    },[id])
    
    const getData = () => {
        
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8e647b6393150bbda1a91e715d50e47f`)
        .then(res => res.json())
        .then(data => setMovie(data))
        
    }
    
    return (
        <div className="movie">
            <div className="movie_intro">
                <img className="movie_backdrop" src={`https://image.tmdb.org/t/p/original/${movieDetail ? movieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie_detail">
                <div className="movie_detailLeft">
                    <div className="movie_posterBox">
                        <img className="movie_poster" src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie_detailRight">
                    <div className="movie_detailRightTop">
                        <div className="movie_name">{movieDetail ? movieDetail.original_title : ""}</div>
                        <div className="movie_tagline">{movieDetail ? movieDetail.tagline : ""}</div>
                        <div className="movie_rating">
                            {movieDetail ? movieDetail.vote_average : ""} <i class="fas fa-star" />
                            <span className="movie_voteCount">{movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}</span>
                        </div>
                        <div className="movie_runtime">{movieDetail ? movieDetail.runtime + " mins" : ""}</div>
                        <div className="movie_releaseDate">{movieDetail ? "Release date: " + movieDetail.release_date : ""}</div>
                        <div className="movie_genres">
                            {
                                movieDetail && movieDetail.genres
                                    ?
                                    movieDetail.genres.map(genre => (
                                        <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                    ))
                                    :
                                    ""
                            }
                        </div>
                    </div>
                    <div className="movie_detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div className='text'>{movieDetail ? movieDetail.overview : ""}</div>
                    </div>

                </div>
            </div>
            <div className="movie_links">
                <div className="movie_heading">Useful Links</div>
                {
                    movieDetail && movieDetail.homepage && <a href={movieDetail.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie_homeButton movie_Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    movieDetail && movieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + movieDetail.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie_imdbButton movie_Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie_heading">Production companies</div>
            <div className="movie_production">
                {
                    movieDetail && movieDetail.production_companies && movieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path
                                &&
                                <span className="productionCompanyImage">
                                    <img className="movie_productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
    
}

export default Movie