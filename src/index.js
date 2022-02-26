import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


// const feeling = (state = {}, action) => {
//   if (action.type === 'ADD_FEELING') {
//     return action.payload
//   }
//   return state;
// }

// const understanding = (state = [], action) => {
//   if (action.type === 'ADD_UNDERSTANDING') {
//     return action.payload
//   }
//   return state;
// }

const currentFeedback = (state = {
  feeling: 0,
  understanding: 0,
  support: 0,
  comment: '',
}, action) => {

  if (action.type === 'ADD_FEELING') {

      const { feeling } = action.payload;

      return {
          ...state,
          feeling: feeling,
      }
  }
  if (action.type === 'ADD_UNDERSTANDING') {

      const { understanding } = action.payload;

      return {
          ...state,
          understanding: understanding,
      }
  }
  if (action.type === 'ADD_SUPPORT') {

      const { support } = action.payload;

      return {
          ...state,
          support: support,
      }
  }
  if (action.type === 'ADD_COMMENT') {

      const { comment } = action.payload;

      return {
          ...state,
          comment: comment,
      }
  }

  return state;
}


const reduxStore = createStore(
  combineReducers({
    currentFeedback
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();