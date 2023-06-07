const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

//this should be able to handle more than the parts outlined in this component
const Content = ({ parts }) => {
  return (parts.map(part=> <Part key={part.id} part={part} />) )
}

const Course = ({course})=>{
  console.log("lets print the props")
  console.log(course)
  return (<>
    <Header course= {course.name}/>
    <Content parts={course.parts}/>
    
  </>
  )
}
const App = () => {
  const course= {
    id:1,
    name:'Half Stack Application development',
    parts:[
      {
        name:"Fundamentals of React",
        exercises:10,
        id:1
      },
      {
        name:"Using props to pass data",
        exercises:7,
        id:2
      },
      {
        name:"State of a component",
        exercises:14,
        id:3
      },
      {
        name:"This is a new section",
        exercises: 23,
        id:4
      }
    ]
  }

  return <Course course={course}/>
}

export default App;
