const Score = (props) => {
  const eachScore = props.eachScore
  return (
    <>
    <p>{eachScore.date}: {eachScore.score}</p>
    </>
  )
}

export default Score