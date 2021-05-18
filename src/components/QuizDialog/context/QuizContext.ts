import React from "react";
import { QuizCity } from "../data";

export interface QuizContextProps {
  questions: QuizCity;
  count: number;
  answers: {
    [key: number]: string;
  };
  setAnswers: (answers: { [key: number]: string }) => void;
  score: number;
  setScore: (score: number) => void;
  current: number;
  setCurrent: (next: number) => void;
  resetQuiz: () => void;
}

export const QuizContext = React.createContext<QuizContextProps>({
  questions: {},
  count: 0,
  answers: {},
  setAnswers: (answers: { [key: number]: string }) => answers,
  score: 0,
  setScore: (score: number) => score,
  current: 1,
  setCurrent: (next: number) => next,
  resetQuiz: () => ({}),
});
