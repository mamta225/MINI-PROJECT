import React, { useState } from"react";//The React useState Hook allows us to track state in a function component
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Wc from "./Wc";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user},dispatch]=useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ): (
        <div className="app_body">
        <Router>
          <Routes >
            <Route path="/" element={<Home />}/>
            <Route  path="/rooms/:roomId" element={<Wc />}>
              
            </Route>
          </Routes>
        </Router>
        </div>
      )}
      
    </div>
  );
}


export default App;
