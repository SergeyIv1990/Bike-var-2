import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostNew, numberOfItems} from './Redux/state';



let rerenderEntireTree = (state) =>{
    ReactDOM.render(
      <React.StrictMode> <App state={state} addPostNew={addPostNew} numberOfItems={numberOfItems}/> 
      
      </React.StrictMode>,
      document.getElementById('root')
      
    );
    }

export default rerenderEntireTree ;