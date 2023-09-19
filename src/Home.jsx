import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
<>
<h1>Quiz <span> 360 </span></h1>
      <div className="card-container">
        <NavLink to="/english" className="card">English</NavLink>
        <NavLink to="/computer" className="card">Computer</NavLink>
        <NavLink to="/biology" className="card">Biology</NavLink>
        <NavLink to="/physics" className="card">Physics</NavLink>
        <NavLink to="/chemistry" className="card">Chemistry</NavLink>
        <NavLink to="/genknowledege" className="card">General Knowledge</NavLink>
      </div>
</>
  );
};

export default Home;
