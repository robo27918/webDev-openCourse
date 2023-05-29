const Header = (props) => {
/*
  This component is in charge of rendering the name of the course
*/
return (
<h1>
  {props.coursename}
</h1>)
}

const Content = (props) => {
  /*
  This component is in charge of rendering the parts andd their number
  of exercises
  */
 return (<p>
  {props.part} {props.numEx}
 </p>)

}
const Total = (props) => {
/*
renders the number of exercises
*/
return(
  <p>Number of exercises: {props.totalEx}</p>
)
}

const App = () => {
  const course = "Half  Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 ="Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <div>
     <Header coursename={course}/>
     <Content part={part1} numEx= {exercises1}/>
     <Content part={part2} numEx={exercises2}/>
     <Content part={part3} numEx={exercises3}/>
     <Total totalEx={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App;
