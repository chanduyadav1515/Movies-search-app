export const ADD_MOVIES = "ADD_MOVIES"
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const SHOW_FAV = "SHOW_FAV"
export const DATA_MOVIE = "DATA_MOVIE"
export const ADD_MOVIE = "ADD_MOVIE"

export function moviesList(movies)
{
    return{
        type:ADD_MOVIES,
        movies
      }
}
export function favList(movie)
{
    return{
        type:ADD_FAV,
        movie
      }
}
export function RemoveFav(movie)
{
    return{
        type:REMOVE_FAV,
        movie
      }
}
export function showFav(value)
{
    return{
        type:SHOW_FAV,
        value
      }
}
 export function dataMovies(movie)
 {
   return{
     type:DATA_MOVIE,
     movie
   }
 }
export function addMovie(movie)
{
    return{
        type:ADD_MOVIE,
        movie
      }
}
export function apiCall(value)
{
  return function(dispatch){
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=71270667&t=${value}`
    fetch(url)
      .then((Response)=>Response.json())
      .then((movie)=>{
        console.log(movie)

        dispatch(dataMovies(movie))
      })
  }
  
}