import { useState } from 'react'

const Anecdote = ({ text, votes }) => {
  return (
    <div>
      <div>{text}</div>
      <div>has {votes} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotesList = [
    {
      text:'If it hurts, do it more often',
      votes: 0
    },
    {
      text:'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      text:'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      text:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      text:'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      text:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    },
    {
      text:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
      votes: 0
    }
  ]

  const incrementVote = () => {
    const temp_anecdotes = [...anecdotes]
    const temp_selected  = { ...temp_anecdotes[selected] } 
    temp_selected.votes += 1
    temp_anecdotes[selected] = temp_selected
    setAnecdotes(temp_anecdotes)
  }
  
  const getRandomAnecdote = () => setSelected(generateRandomAnecdoteIndex())
  
  const generateRandomAnecdoteIndex = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const [anecdotes, setAnecdotes] = useState(anecdotesList)
  const [selected, setSelected] = useState(generateRandomAnecdoteIndex())
  const mostVotes = [...anecdotes].sort((a,b) => {
    return b.votes-a.votes
  })[0]
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote text={anecdotes[selected].text} votes={anecdotes[selected].votes} />
      <button onClick={incrementVote}>vote</button>
      <button onClick={getRandomAnecdote}>next anecdote</button>
      <h2>Anecdote with the most votes</h2>
      <Anecdote text={mostVotes.text} votes={mostVotes.votes} />
    </div>
  )
}

export default App