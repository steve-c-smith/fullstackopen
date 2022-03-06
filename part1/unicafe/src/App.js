import { useState } from 'react'

const StatisticsDisplay = ({ label, value }) => <div>{label} {value}</div>

const Statistics = ({neutral, bad, good}) => {
  const getTotal = () => good + neutral + bad
  const getAverage = () => {
    const total = getTotal()
    return total ? ((good - bad) / total) : 0
  }
  const getPercentPositive = () => {
    const total = getTotal()
    return total ? (good / total) * 100 : 0
  }

  return (
    <div>
      <StatisticsDisplay label="good" value={good} />
      <StatisticsDisplay label="neutral" value={neutral} />
      <StatisticsDisplay label="bad" value={bad} />
      <StatisticsDisplay label="all" value={getTotal()} />
      <StatisticsDisplay label="average" value={getAverage()} />
      <StatisticsDisplay label="positive" value={getPercentPositive() + "%"} />
    </div>
  )
}

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
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App