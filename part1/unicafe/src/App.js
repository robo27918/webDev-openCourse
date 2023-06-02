import {useState} from 'react'

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine = ({text, data}) => {
  console.log("printing from StatisticLine component")
  return(
    <div>
      {text} {data}
      <br/>
    </div>
  )
}

const Statistics = ({good,neutral,bad}) => {
  //this component is used to display the statistics 
  console.log("printing from statistics component")
  const total = good + neutral + bad
  const avg = (good * 1 + neutral * 0 + bad * -1) / total
  const pos = (good) / total * 100
  if (total > 0){
  return(
    <div>
    <h1><strong>statistics</strong></h1>
   
     <StatisticLine text="good: " data={good}/>
     <StatisticLine text="neutral: " data={neutral}/>
     <StatisticLine text="bad: " data={bad}/>
     <StatisticLine text="all: " data={total} />
     <StatisticLine text="avg: " data={avg}/> 
     <StatisticLine text="pos: " data={pos + "%"}/> 
    </div>
    
  )}
  else{
    return(
      <div>
        <h1><strong>statistics</strong></h1>
        <br/>
        No feedback given
      </div>
    )
  }
}
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
  //
  const total = good + neutral + bad
  const avg = (good*1 + neutral*0 + bad * -1) / total
  const positive = good /total
  console.log("hey")
  return (
  
    <div>
      
      <h1> <strong>give feedback</strong> </h1>
      <br/>
      <Button handleClick={handleGoodClick} text = "Good"></Button>
      <Button handleClick= {handleNeutralClick} text="Neutral"></Button>
      <Button handleClick={handleBadClick} text="Bad"></Button>
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad} ></Statistics>
     
   
      

    </div>
  )
}

export default App;
