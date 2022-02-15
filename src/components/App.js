import react from 'react';
import {data} from '../data';
import NavBar from './NavBar';
import MovieCart from './MovieCart';
import {moviesList , showFav} from '../actions'
import React from 'react';
import { storeContext } from '../index';
class App extends react.Component  {
  
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    })
    store.dispatch(moviesList(data))
    console.log("STORE AT APP",store.getState())
  }
  isFavourite=(movie)=>{
    const {movies,searchlist} = this.props.store.getState()

    const index = movies.favourite.indexOf(movie);
    if(index !== -1)
    {
      return true
    }
    return false
  }
  isshowFav=(show)=>{
   
    this.props.store.dispatch(showFav(show))
    console.log(show)
  }
  render(){
    // const movies = this.props.store.getState()[]= {list,fav}
    console.log("STATE",this.props.store.getState())
    const {movies,searchlist} = this.props.store.getState()
    console.log("movies object:",movies)
    const {list,favourite,showFav} = movies
    const showDisplay = showFav ? favourite : list
    return (
      <div className="App">
        <NavBar 
                movies = {movies}
                searchlist = {searchlist}/>
        <div className="main">
          <div className='list-filter'>
            <button className={`${showFav ? '' :'highlightButton'}`} onClick ={()=>this.isshowFav(false)}>Movies</button>
            <button className={`${showFav?'highlightButton':''}`} onClick={()=>this.isshowFav(true)}>Favourites</button>
          </div>
          <div className="list">
            {showDisplay.map((movie,index)=>(
              < MovieCart 
                movie = {movie}
                key = {`movies-${index}`}
                dispatch = {this.props.store.dispatch} 
                isFavourite = {this.isFavourite(movie)}
              />
            ))}
          </div>
          {showDisplay.length===0?<div>NO list to show</div>:''}
        </div>
      </div>
    );
  }
}

class AppWrapper extends React.Component{

  render(){
    return(
    <storeContext.Consumer>
      {(store)=><App store={store} />}
    </storeContext.Consumer>

    )
  }
}

export default AppWrapper;
