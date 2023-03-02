import AnswerChoices from "./AnswerChoices.js";

function Question(props) {
  return (
    <div>
      {props.question.text}

      {props.question.choices.map((choice) => (
        <AnswerChoices setAnswerState={props.setAnswerState} answer={choice} />
      ))}

      {/* <AnswerChoices
        setAnswerState={props.setAnswerState}
        answer={props.question.choices[0]}
      /> }
      {/* <AnswerChoices
        setAnswerState={props.setAnswerState}
        answer={props.question.choices[1]}
      />
      <AnswerChoices
        setAnswerState={props.setAnswerState}
        answer={props.question.choices[2]}
      />
      <AnswerChoices
        setAnswerState={props.setAnswerState}
        answer={props.question.choices[3]}
      /> */}
    </div>
  );
}

export default Question;
