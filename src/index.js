import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as config from "request";
import app from "../api";
import * as pkg from "express";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
var port = process.env.PORT || config.port
app.listen(port, function(){
    console.log(`${pkg.name} listening on port ${port}`)
});