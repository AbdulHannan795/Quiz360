import React from 'react';
import Quiz from './Quiz';
import compData from './compData';
import { NavLink } from 'react-router-dom';

const Computer = () => {
  return (
    <>
        <div className="App">
          <h4>Computer</h4>
          <Quiz quizQuestions={compData}/>
          <div className="button-container">
        <NavLink to="/" className="go-back-button">
          Go Back
        </NavLink>
        </div>
          
        </div>
    </>
  );
};

export default Computer;
