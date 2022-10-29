import React from 'react';
import {  Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      
        <div>
            <div className="navbar bg-red-300">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost normal-case text-xl text-white">QUIZ</Link>
  </div>
  <div className="flex-none text-white">
    <ul className="menu menu-horizontal p-4 px-7 mx-5 " >
    
      <li><NavLink to="/home" className={({isActive})=>isActive ? "text-blue-600" : "text-white"}>home</NavLink></li>
      <li><NavLink to="/quiz" className={({isActive})=>isActive ? "text-blue-600" : "text-white"}>Quiz</NavLink></li>
      <li><NavLink to="/about" className={({isActive})=>isActive ? "text-blue-600" : "text-white"}>About</NavLink></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default NavBar;