import React from 'react';
import genknowData from './genknowData';
import Quiz from './Quiz';
import { NavLink } from 'react-router-dom';


const Genknowledge = () => {
  return (
   <>
    <div className="App">
        <h4>General Knowledge</h4>
        <Quiz quizQuestions={genknowData} />
        <div className="button-container">
          <NavLink to="/" className="go-back-button">
            Go Back
          </NavLink>
        </div>
      </div>
   </>
  );
};

export default Genknowledge;
