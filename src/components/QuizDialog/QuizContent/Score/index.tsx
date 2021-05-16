import React from "react";
import { useContext } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import { QuizContext } from "../../context/QuizContext";
import List from "@material-ui/core/List";
import ScoreItem from "./ScoreItem";

const Score = () => {
  const { count, score, questions, answers } = useContext(QuizContext);

  return (
    <DialogContent>
      <div>
        You scored {score} out of {count}
      </div>
      <div></div>
      <List dense>
        {Object.keys(questions).map((k: any) => (
          <ScoreItem
            key={`score-question-${k}`}
            isCorrect={questions[k].answer === answers[k]}
            question={questions[k].text}
            answer={questions[k].answer}
            userAnswer={answers[k]}
          />
        ))}
      </List>
    </DialogContent>
  );
};

export default Score;
