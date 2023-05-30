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
  //const course = "Half  Stack application development"
  /*const contentData = [
    {part:"Fundamentals of React", numEx: 10},
    {part:"Using props to pass data", numEx:7},
    {part:"State of a component", numEx:14}

  ]
  const totalEx = contentData[0].numEx + contentData[1].numEx + contentData[2].numEx*/


  const course = 'Half stack application development'
  const part1 ={
    name:"Fundamentals of React",
    exercises:10
  }
  const part2 = {
    name:"Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name:"State of a component",
    exercises: 14
  }
  const totalEx = part1.exercises + part2.exercises + part3.exercises
  return (
    <div>
     <Header coursename={course}/>
     <Content contentData={[part1,part2,part3]}/>
     <Total totalEx= {totalEx} />
    </div>
  )
}

export default App;
