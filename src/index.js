import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , combineReducers} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';

//import RoboCardList from './RoboCardList';
const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})
const store =  createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))
ReactDOM.render(
  <React.StrictMode>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
      <Provider store= {store}>
           <App />  
      </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
