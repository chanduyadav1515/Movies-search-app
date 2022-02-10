import React from 'react';
class MovieCart extends React.Component {
    render(){
        const {movie} = this.props
        return (
            <div className="movie-list-box">
                <div className='image-div'>
                    <img src={movie.Poster} alt='poster'/>
                </div>
                <div className='title-box'>
                    <p ><span>Title:</span> {movie.Title}</p>
                    <p><span>Released:</span>{movie.Released}</p>
                    <p><span>Genre:</span>{movie.Genre}</p>
                    <p><span>imdbRating:</span>{movie.imdbRating}</p>
                </div>
                <div className='fav-box'>
                    <button>Favourite</button>
                </div>
            </div>
        );
    }
}

export default MovieCart;
