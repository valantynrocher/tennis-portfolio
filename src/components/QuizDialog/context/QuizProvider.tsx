import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import data from "../data";
import { QuizContext } from "./QuizContext";

const answerReducer = (acc: { [key: number]: string }, value: any) => {
  acc[value] = "";
  return acc;
};

const QuizProvider = (props: { children: React.ReactNode }) => {
  const { themeName } = useContext(AppContext);
  const questions = data[themeName];
  const count = Object.keys(questions).length;
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(1);

  const resetQuiz = () => {
    setAnswers({});
    setScore(0);
    setCurrent(1);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        count,
        answers,
        setAnswers,
        score,
        setScore,
        current,
        setCurrent,
        resetQuiz,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
