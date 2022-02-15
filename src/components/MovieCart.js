import React from 'react';
import {favList, RemoveFav} from '../actions'
class MovieCart extends React.Component {

    addFav=()=>{
        const {movie} = this.props;
        this.props.dispatch(favList(movie))
    }
    removeFav=()=>{
        const {movie} = this.props;
        this.props.dispatch(RemoveFav(movie))
    }
    render(){
        const {movie,isFavourite} = this.props
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
                    {
                        isFavourite?<button className='unFav' onClick={this.removeFav}>UnFavourite</button>:<button className='Fav' onClick={this.addFav}>Favourite</button>
                    }
                </div>
            </div>
        );
    }
}

export default MovieCart;
