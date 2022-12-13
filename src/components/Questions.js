export const Questions = ({ questions }) => {
  console.log("questions", questions);
  const question = ({ question, answerParagraphs }) => {
    console.log("question", question, "answerParagraphs", answerParagraphs);
    const answers = answerParagraphs.map((p) => <p>{p}</p>);
    return (
      <div className="questionContainer">
        <h3 className="question">{question}</h3>
        <div className="answers">{answers}</div>
      </div>
    );
  };
  return <div className="q&a">{questions.map((q) => question(q))}</div>;
};
