import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2'



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
  
// );

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <>
  <App2 />
    <App />
    
  </>

);

