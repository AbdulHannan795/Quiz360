import React from 'react';
import Quiz from "./Quiz";
import chemData from './chemData';
import { NavLink } from 'react-router-dom';

const Chemistry = () => {
  return (
   <>
    <div className="App">
        <h4>Chemistry</h4>
        <Quiz quizQuestions={chemData} />
        <div className="button-container">
          <NavLink to="/" className="go-back-button">
            Go Back
          </NavLink>
        </div>
      </div>
   </>
  );
};

export default Chemistry;
