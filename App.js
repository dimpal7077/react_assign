import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/HeaderData";
import HeaderData from "./Components/HeaderData";
import Home from "./Components/Home";
import About from "./Components/About";
import Hooks from "./Components/Hooks";
import Counter from "./Components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculater from "./Components/Calculater";
import Btnclick from "./Components/Btnclick";
import Map from "./Components/Map";
import Userprofile from "./Components/Userprofile";
import Lazyloading from "./Components/Lazyloading";
import U2prac from  "./Components/U2prac"
import Myform from "./Components/Myform";
import FetchData from "./Components/Fetchdata";


function App() {
  return (
    <div className="App">
      <h1>Unit 1 Practicals</h1>
    
      <nav>
        <Link to="/" style={{ marginRight: "30px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "30px" }}>
          About
        </Link>
        <Link to="/hooks" style={{ marginRight: "30px" }}>
          Hooks
        </Link>
           <Link to="/calculater" style={{ marginRight: "30px" }}>
         Calculater
        </Link>
        
         <Link to="/u2prac" style={{ marginRight: "10px" }}>
         U2
        </Link>
        
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/calculater" element={<Calculater />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/btnclick" element={<Btnclick />} />
        <Route path="/map" element={<Map />} />
            <Route path="/userprofile" element={<Userprofile />} />
            <Route path="/lazyloading" element={<Lazyloading />} />
 <Route path="/u2prac" element={<U2prac />} />
        <Route path="/myform" element={<Myform />} />
        <Route path="/fetchdata" element={<FetchData />} />
        
            

        
      </Routes>
      
    </div>

    
  );
}

export default App;
