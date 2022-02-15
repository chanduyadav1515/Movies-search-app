import React from 'react';
import {data} from '../data'
import {dataMovies,showBox,addMovie, apiCall} from '../actions'

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            searchText:'',
        }
    }
    searchTextChange = (e)=>{
        this.setState({
            searchText:e.target.value
        })
        console.log(this.state.searchText)
    }
    searchMovie = ()=>{
        this.props.dispatch(apiCall(this.state.searchText))
        // this.props.dispatch(showBox(true))
    }
    addToMovies = (movie) => {
        this.props.dispatch(addMovie(movie))
    }
    render(){
        return (
            <div className="Nav-Bar">
                <div className='Search-Box'>
                    <input onChange={this.searchTextChange}></input>
                    <button onClick={this.searchMovie} >Search</button>
                </div>
                {this.props.searchlist.searchboxView && (<div className='Search-list'>
                    <div>
                        <img src={this.props.searchlist.result.Poster}></img>
                    </div>
                    <div className='search-movie-info'>
                        <span>{this.props.searchlist.result.Title}</span>
                        <br />
                        <button onClick={()=>this.addToMovies(this.props.searchlist.result)}>Add to Movies</button>
                    </div> 
                </div>)}
            </div>
        );
    }
}

export default NavBar;
