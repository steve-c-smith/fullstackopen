const Total = (props) => {
  const parts = props.parts
  const numberOfExercises = () => {
    let exercises = 0;
    parts.forEach((part) => {
      exercises += part.exercises
    })
    return exercises;
  }

  return (
    <p>Number of exercises {numberOfExercises()}</p>
  )
}

const Part = ({ name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((el, i) =>
        <Part key={i} name={el.name} exercises={el.exercises}/>
      )}
    </div>
  )
}

const Header = ({ course }) => {
  return ( 
    <h1>{course.name}</h1>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App