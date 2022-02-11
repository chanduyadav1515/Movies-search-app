import react from 'react';
import {data} from '../data';
import NavBar from './NavBar';
import MovieCart from './MovieCart';
import {moviesList} from '../actions'
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
  render(){
    // const movies = this.props.store.getState()[]= {list,fav}
    const {movies} = this.props.store.getState()
    return (
      <div className="App">
        <NavBar/>
        <div className="main">
          <div className='list-filter'>
            <button>Movies</button>
            <button>Favourites</button>
          </div>
          <div className="list">
            {movies.map((movie,index)=>(
              <MovieCart movie = {movie}
                          key = {index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
