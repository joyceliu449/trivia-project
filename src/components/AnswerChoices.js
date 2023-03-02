function AnswerChoices(props) {
  return (
    <button onClick={() => props.setAnswerState(props.answer)}>
      <div className="answer-choice">{props.answer}</div>
    </button>
  );
}
export default AnswerChoices;
