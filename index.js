import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Userprovider from './Components/Userprovider';
// import Userprovider from './Components/Userprovider';
// import Userprovider from './Userprovider'; 
 const root = ReactDOM.createRoot(document.getElementById('root'));

 
root.render(
  
   <BrowserRouter>
    <Userprovider>
      <App />
    </Userprovider>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

