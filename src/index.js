import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./icon/css/all.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mylogin from './login';

const root = ReactDOM.createRoot(document.getElementById('root'));

    if(localStorage.getItem("type")!=null)
    {
    root.render
    
    (<App/>)
    }
    
    else
    {
      root.render(<Mylogin/>) 
    }
    
  
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
