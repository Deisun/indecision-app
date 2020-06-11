import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterExample from './playground/counter-example'
import Visibility from "./playground/build-it-visible";

ReactDOM.render(
  <React.StrictMode>
    <Visibility />
  </React.StrictMode>,
  document.getElementById('root')
);

