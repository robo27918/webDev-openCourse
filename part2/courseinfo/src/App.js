
import Course from './components/Course'
const App = ({courses}) => {
  //courses is an array now!


  return (
    <div>
     { courses.map(course=><Course key={course.id} course={course}/>)}
    </div>
  )
}

export default App;
