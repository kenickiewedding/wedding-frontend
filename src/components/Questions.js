export const Questions = ({ questions }) => {
  console.log("questions", questions);
  const question = ({ question, answerParagraphs }) => {
    console.log("question", question, "answerParagraphs", answerParagraphs);
    const answers = answerParagraphs.map((p) => {
      if (p.linkText) {
        const { string, linkText, href } = p;
        const [beforeLink, afterLink] = string.split(linkText);
        return (
          <p>
            {beforeLink}
            <a href={href}>{linkText}</a>
            {afterLink}
          </p>
        );
      } else {
        return <p>{p}</p>;
      }
    });
    return (
      <div className="questionContainer">
        <h3 className="question">{question}</h3>
        <div className="answers">{answers}</div>
      </div>
    );
  };
  return <div className="q&a">{questions.map((q) => question(q))}</div>;
};
