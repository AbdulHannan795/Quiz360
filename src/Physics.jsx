import React from 'react';
import Quiz from "./Quiz";
import { NavLink } from 'react-router-dom';
import physicsData from './physicsData';

const Physics = () => {
  return (
 <>
<div className="App">
        <h4>Physics</h4>
        <Quiz quizQuestions={physicsData} />
        <div className="button-container">
          <NavLink to="/" className="go-back-button">
            Go Back
          </NavLink>
        </div>
      </div>
 </>
  );
};

export default Physics;
