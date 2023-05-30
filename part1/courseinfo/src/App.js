const Header = (props) => {
/*
  This component is in charge of rendering the name of the course
*/
console.log(props)
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
console.log("from Total Component")
console.log(props.totalEx[0].exercises)
let total = props.totalEx[0].exercises + props.totalEx[1].exercises + props.totalEx[2].exercises
return(
  <p>Number of exercises: {total}</p>
)
}

const Part = (props) => {
  console.log(props)
  return(
    <p>
      {props.data.name} {props.data.exercises}
    </p>
  )
}

const App = () => {
  const course ={ 
    name: "Half  Stack application development",
    
    parts: [
    {name:"Fundamentals of React", exercises: 10},
    {name:"Using props to pass data", exercises:7},
    {name:"State of a component", exercises:14}
    ]
  }
  
  //const totalEx = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <div>
     <Header coursename={course.name}/>
     <Content contentData={course.parts}/>
     <Total totalEx= {course.parts} />
    </div>
  )
}

export default App;
