import react from 'react';
import {data} from '../data';
import NavBar from './NavBar';
import MovieCart from './MovieCart';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="main">
        <div className='list-filter'>
          <button>Movies</button>
          <button>Favourites</button>
        </div>
        <div className="list">
          {data.map(movie=>(
            <MovieCart movie = {movie}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
