const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><strong>total of {sum} exercises</strong></p>

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
  const total = course.parts.reduce((acc, prev)=> {return acc+prev.exercises},0)
  console.log(total)
  return (<>
    <Header course= {course.name}/>
    <Content parts={course.parts}/>
    <Total sum={total}/>
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
        name:"Redux",
        exercises: 11,
        id:4
      }
    ]
  }

  return <Course course={course}/>
}

export default App;
