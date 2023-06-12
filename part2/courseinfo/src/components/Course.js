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
  console.log("inside the course componenet...")
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
export default Course