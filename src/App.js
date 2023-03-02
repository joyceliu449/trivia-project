import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";
import Question from "./components/Question.js";
import NextQuestion from "./components/NextQuestion.js";

function App() {
  let [currentAnswerState, setAnswerState] = useState(null);
  let [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  let [currentScore, setScore] = useState(0);

  function getCorrectAnswer() {
    return data[currentQuestionNumber].question.choices[
      data[currentQuestionNumber].question.correct_choice_index
    ];
  }

  function questionAnswered() {
    // console.log(currentAnswerState);
    console.log(data[currentQuestionNumber].question.image);
    if (currentAnswerState === null) {
      return <p>Please click an answer choice above </p>;
    } else if (currentAnswerState === getCorrectAnswer()) {
      return <p>Your answer is correct!</p>;
    } else {
      return <p>Your answer is incorrect!</p>;
    }
  }

  function goToNextQuestion() {
    if (currentAnswerState === getCorrectAnswer()) {
      setScore(currentScore + 1);
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);

    // console.log(currentQuestionNumber);
    setAnswerState(null);
  }

  function goNextPic() {
    let x = data[currentQuestionNumber].question.image;
    return "pics/" + x;
  }

  if (currentQuestionNumber > 4) {
    return (
      <div className="app">
        <h1 className="title"> Music Trivia!</h1>
        <h2> Your score was {currentScore}!!</h2>
      </div>
    );
  } else {
    return (
      <div className="app">
        <h1 className="title"> Music Trivia!</h1>
        <Question
          question={data[currentQuestionNumber].question}
          setAnswerState={setAnswerState}
        />
        <br></br>
        <img src={goNextPic()} alt="/pics/test.jpg" />

        <p>{questionAnswered()}</p>
        <NextQuestion
          goNext={goToNextQuestion}
          currentQ={currentQuestionNumber + 1}
        />
        <p> Score: {currentScore}</p>
      </div>
    );
  }
}
export default App;
