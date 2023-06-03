import { useState } from 'react'

const Button =({handleClick,text}) =>(
  <button onClick={handleClick}>
    {text}
  </button>
)
const getRandomIndex=(max) => {
  return Math.floor(Math.random() * max);
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
  const handleNextClick = () =>{
    console.log("value of ...")
    //
    const numAnecdotes = anecdotes.length
    console.log("there are there this many anecdotes ",numAnecdotes)
    const randoIdx = getRandomIndex(numAnecdotes)
    console.log("randomIdx generated", randoIdx)
    setSelected(randoIdx)
  }
  const handleVoteClick=() => {
    console.log("handling the vote clicks")
    console.log("the current idx of the anecdote is:",selected)
    const cpyvotes = {...votes}
    cpyvotes[selected] +=1
    setVotes(cpyvotes)

    
  }
  const [selected,setSelected] = useState(0)
  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0,7:0})
  console.log("printing object init state", votes)


  

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      has {votes[selected]} votes
      <br/>
      <Button handleClick={handleVoteClick} text="vote"></Button>
      <Button handleClick={handleNextClick} text="next anecdote"></Button>
    </div>
  )
}
export default App;
