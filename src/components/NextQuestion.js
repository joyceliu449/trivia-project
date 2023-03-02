function NextQuestion(props) {
  return (
    <div>
      <button onClick={props.goNext}> Next Question </button>
      <p> Question # {props.currentQ} </p>
    </div>
  );
}
export default NextQuestion;
