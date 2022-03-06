import { useState } from 'react'

const StatisticsDisplay = ({ label, value }) => <div>{label} {value}</div>

const Statistics = ({ isFeedbackProvided, neutral, bad, good }) => {
  const getTotal = () => good + neutral + bad
  const getAverage = () => {
    const total = getTotal()
    return total ? ((good - bad) / total) : 0
  }
  const getPercentPositive = () => {
    const total = getTotal()
    return total ? (good / total) * 100 : 0
  }
  
  if(isFeedbackProvided){
    return (
      <div>
        <StatisticsDisplay label="good" value={good} />
        <StatisticsDisplay label="neutral" value={neutral} />
        <StatisticsDisplay label="bad" value={bad} />
        <StatisticsDisplay label="all" value={getTotal()} />
        <StatisticsDisplay label="average" value={getAverage().toFixed(2)} />
        <StatisticsDisplay label="positive" value={getPercentPositive().toFixed(2) + "%"} />
      </div>
    )
  }
  return <p>No Feedback Provided</p>
}

const FeedbackButton = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Header = (props) => <h1>{props.text}</h1>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [isFeedbackProvided, setIsFeedbackProvided] = useState(false)

  const incrementFeedback = (feedbackType) => {
    switch(feedbackType){
      case "good":
        setGood(good + 1)
        break;
      case "neutral":
        setNeutral(neutral + 1)
        break;
      case "bad":
        setBad(bad + 1)
        break;
      default:
        // N/A
    }
  }
  
  const handleFeedback = (feedbackType) => () => {
    if(!isFeedbackProvided) setIsFeedbackProvided(true);
    incrementFeedback(feedbackType);
  }

  return (
    <div>
        <Header text="give feedback" />
        <FeedbackButton onClick={handleFeedback("good")} text="good" />
        <FeedbackButton onClick={handleFeedback("neutral")} text="neutral" />
        <FeedbackButton onClick={handleFeedback("bad")} text="bad" />
        <Header text="statistics" />
        <Statistics isFeedbackProvided={isFeedbackProvided} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App