const Total = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <p>
        <strong>
          Number of exercises {total}
        </strong>
      </p>
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
        <Total course={course} />
      </div>
    )
  }
  
  const Header = ({ course }) => {
    return ( 
      <h2>{course.name}</h2>
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

  export default Course