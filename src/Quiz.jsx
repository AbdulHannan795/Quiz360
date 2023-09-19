
import React, { useState } from 'react';



function Quiz({ quizQuestions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  const handleAnswerClick = (selectedAnswer) => {
    if (quizCompleted) {
      return; // Prevent answering questions after quiz completion
    }

    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setSelectedOption('correct');
    } else {
      setSelectedOption('wrong');
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setTimeout(() => {
        setSelectedOption(null); // Reset option highlight
        setCurrentQuestion(nextQuestion);
      }, 1000); // Delay transition to the next question
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedOption(null); // Reset selected option
  };

  return (
    <div className="quiz-container">
      {quizCompleted ? (
        <div>
          <h3>Quiz Completed!</h3>
          <p>Your Score: {score} / {quizQuestions.length}</p>
          <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{quizQuestions[currentQuestion].question}</h2>
          <ul>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`option ${selectedOption === 'correct' && option === quizQuestions[currentQuestion].correctAnswer ? 'correct' : ''} ${selectedOption === 'wrong' && option === quizQuestions[currentQuestion].correctAnswer ? 'correct' : ''} ${selectedOption === 'wrong' && option !== quizQuestions[currentQuestion].correctAnswer ? 'wrong' : ''}`}
              >
                {option}
              </li>
            ))}
          </ul>
        
        </div>
      )}
    </div>
  );
}

export default Quiz;
