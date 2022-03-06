import { useState } from 'react'
const FeedbackDisplay = ({ label, value }) => <div>{label} {value}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Header = (props) => <h1>{props.text}</h1>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <Header text="give feedback" />
        <Button onClick={() => {setGood(good + 1)}} text="good" />
        <Button onClick={() => {setNeutral(neutral + 1)}} text="neutral" />
        <Button onClick={() => {setBad(bad + 1)}} text="bad" />
        <Header text="statistics" />
        <FeedbackDisplay label="good" value={good} />
        <FeedbackDisplay label="neutral" value={neutral} />
        <FeedbackDisplay label="bad" value={bad} />
    </div>
  )
}

export default App