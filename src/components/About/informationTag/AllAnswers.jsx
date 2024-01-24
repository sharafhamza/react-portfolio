import React from "react";
import QuestionTag from "./QuestionTag";
import AnswerTag from "./AnswerTag";

const AllAnswers = ({ answer, question }) => {
  return (
    <div className="w-1/2 992:w-auto">
      <QuestionTag question={question} />
      <AnswerTag answer={answer} />
    </div>
  );
};

export default AllAnswers;
