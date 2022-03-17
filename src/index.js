import React, { createContext } from 'react';
import { Provider } from 'react-redux';
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

export const storeContext = createContext();
// console.log("store:",store)
// console.log("BEFORE STATE:",store.getState())

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:['m1','m2','m3']
// })
// console.log("AFTER STATE:",store.getState())

// class Provider extends React.Component{ 
//   render(){
//     const {store} = this.props;
//     return <storeContext.Provider value={store}>
//         {this.props.children}
//       </storeContext.Provider>
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App store = {store}/>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <storeContext.Provider value={store}>
//     <App store = {store} />
//     </storeContext.Provider>  
//   </React.StrictMode>,
//   document.getElementById('root')
// );

