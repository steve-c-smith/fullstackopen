import { useState } from 'react'

const StatisticsLine = ({ label, value }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if(total === 0){
    return <p>No feedback given</p>
  }
  const getAverage = () => (good - bad) / total
  const getPercentPositive = () => (good / total) * 100
  
  return (
    <table>
      <tbody>
        <StatisticsLine label="good" value={good} />
        <StatisticsLine label="neutral" value={neutral} />
        <StatisticsLine label="bad" value={bad} />
        <StatisticsLine label="all" value={total} />
        <StatisticsLine label="average" value={getAverage().toFixed(2)} />
        <StatisticsLine label="positive" value={getPercentPositive().toFixed(2) + "%"} />
      </tbody>
    </table>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Header = (props) => <h1>{props.text}</h1>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
        <Header text="give feedback" />
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
        <Header text="statistics" />
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App