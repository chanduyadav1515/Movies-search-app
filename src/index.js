import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootList from './reducer'
import thunk from 'redux-thunk';

// const logger = function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log(action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch,getState})=>(next)=>(action)=>{
  console.log(action.type);
      next(action);
  
}
const store = createStore(rootList,applyMiddleware(logger,thunk));

// console.log("store:",store)
// console.log("BEFORE STATE:",store.getState())

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:['m1','m2','m3']
// })
// console.log("AFTER STATE:",store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>,
  document.getElementById('root')
);

