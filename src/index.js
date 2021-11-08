import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import isDark from './reducers/isDark'
// import { UserProvider } from './contexs/provider';
import allReducers from './reducers';

const store = createStore(allReducers)
store.subscribe(()=>console.log(store.getState()))
ReactDOM.render(
  <React.StrictMode>
    {/* <UserProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </UserProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
