import { ADD_MOVIES } from "../actions";

const listMovies = {
    movies:[],
    favourite:[]
}
export default function movies (state=listMovies,action)
{
    if(action.type === ADD_MOVIES)
    {
        return {
            ...state,
            movies:action.movies
        }
    }
    return state;
}
