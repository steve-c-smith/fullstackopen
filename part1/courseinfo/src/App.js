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

const Part = (props) => {
  const part = props.part
  const exercises = props.exercises
  return (
    <p>{part} {exercises}</p>
  )
}

const Content = (props) => {
  const parts = props.parts;
  return (
    <div>
        {parts.map((el, i) => <Part part={el.part} exercises={el.exercises}/>)}
    </div>
  )
}

const Header = (props) => {
  const course = props.course
  return (
    <h1>{course}</h1>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
                  {
                    "part": 'Fundamentals of React',
                    "exercises": 10
                  },
                  {
                    "part": 'Using props to pass data',
                    "exercises": 7
                  },
                  {
                    "part": 'State of a component',
                    "exercises": 14
                  }
                ]
        
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App