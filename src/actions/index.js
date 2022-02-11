export const ADD_MOVIES = "ADD_MOVIES"

export function moviesList(movies)
{
    return{
        type:'ADD_MOVIES',
        movies
      }
}