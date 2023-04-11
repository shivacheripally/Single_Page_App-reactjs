import React from 'react';
import './App.css';
import { BrowserRouter ,Routes, Route, NavLink } from 'react-router-dom';
import { Home, Stuff, Contact } from './index.js';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/stuff">Stuff</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="content">
          <Routes>
            <Route exact path="/" element={Home} />
            <Route exact path="/stuff" element={Stuff} />
            <Route exact path="/contact" element={Contact} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
}
