import { ADD_MOVIES,ADD_FAV ,REMOVE_FAV,SHOW_FAV,DATA_MOVIE,ADD_MOVIE} from "../actions";
import { combineReducers } from "redux";
import {data} from '../data'

const initialMovieList = {
    list:[],
    favourite:[],
    showFav:false
}
export function movies (state=initialMovieList,action)
{
    if(action.type === ADD_MOVIES)
    {
        return {
            ...state,
            list:action.movies
        }
    }
    else if(action.type === ADD_FAV)
    {
        return{
            ...state,
            favourite:[action.movie, ...state.favourite]
            }
    }
    else if(action.type === REMOVE_FAV)
    {
        const filteredArray = state.favourite.filter(movie => movie.Title !== action.movie.Title)
        // const filteredArray = state.favourite.splice(state.favourite.indexOf(action.movie.Title), 1)
        
        return{
            ...state,
            favourite:filteredArray
            }
    }
    else if(action.type === SHOW_FAV)
    {   
        return{
            ...state,
            showFav:action.value
            }
    }
    else if(action.type === ADD_MOVIE)
    {
        return{
            ...state,
            list:[action.movie,...state.list]
        }
    }
    return state;

}

const initialsearchResults={
    result:[],
    searchboxView:false
}
export function searchlist(state = initialsearchResults,action)
{
    if(action.type === DATA_MOVIE)
    {
        return{
            ...state,
            result:action.movie,
            searchboxView:true
        }
    }
    else if(action.type === ADD_MOVIE)
    {
        return{
            ...state,
            searchboxView:false
        }
    }
    else{
        return state
    }
}

//Root reducer
// const root={
//     listMovies:initialMovieList,
//     searchResults:initialsearchResults
// }
// export default function rootList(state = root,action)
// {
//     return{
//         movies:movies(state.listMovies,action),
//         searchlist:searchlist(state.searchResults,action)
//     }
// }
export default combineReducers({
    movies,
    searchlist,
  });
  