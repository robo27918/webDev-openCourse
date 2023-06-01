import {useState} from 'react'

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const  handleGoodClick = () => {
    console.log("value of good",good)
    const updateGood = good +1
    setGood(updateGood)
  
  }
  const handleNeutralClick = () => {
    console.log("value of neutral",neutral)
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    console.log("value of bad",bad)
    setBad(bad+1)
  }
  console.log("hey")
  return (
   
    <div>
      
      <h1> <strong>give feedback</strong> </h1>
      <br/>
      <Button handleClick={handleGoodClick} text = "Good"></Button>
      <Button handleClick= {handleNeutralClick} text="Neutral"></Button>
      <Button handleClick={handleBadClick} text="Bad"></Button>
      <br/>
      <h1><strong>statistics</strong></h1>
      <p>
        good {good}
        <br/>neutral {neutral}
        <br/> bad {bad}
      </p>
      

    </div>
  )
}

export default App;
