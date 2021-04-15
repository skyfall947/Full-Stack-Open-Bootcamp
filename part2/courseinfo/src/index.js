import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part}: {props.exercises} exercises</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((item) => 
        (<Part key={item.id} part={item.name} exercises={item.exercises}/>))}
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((acc, { exercises }) => exercises + acc, 0);
  return (
    <h4>Number of exercises: {total}</h4>
  )
}
const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return(
    <>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));