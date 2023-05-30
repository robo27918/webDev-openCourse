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
 console.log(props)
 return (
  <div>
    <Part data={props.contentData[0]} />
    <Part data={props.contentData[1]}/>
    <Part data={props.contentData[2]}/>

  </div>
 )

}
const Total = (props) => {
/*
renders the number of exercises
*/
console.log(props)
return(
  <p>Number of exercises: {props.totalEx}</p>
)
}

const Part = (props) => {
  return(
    <p>
      {props.data.name} {props.data.exercises}
    </p>
  )
}

const App = () => {
  const course = "Half  Stack application development"
  const parts = [
    {name:"Fundamentals of React", exercises: 10},
    {name:"Using props to pass data", exercises:7},
    {name:"State of a component", exercises:14}

  ]
  const totalEx = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <div>
     <Header coursename={course}/>
     <Content contentData={parts}/>
     <Total totalEx= {totalEx} />
    </div>
  )
}

export default App;
