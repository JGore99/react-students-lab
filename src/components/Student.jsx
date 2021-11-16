import Score from "../components/Score"

const Student = (props) => {
  const student = props.student
  return (
    <>
    <h2>{student.name}</h2>
    <p>{student.bio}</p>
    {student.scores.map((eachScore, idx) =>
    <Score
    key={idx}
    eachScore={eachScore}
    />
    )}
   </>
  );
}


export default Student;