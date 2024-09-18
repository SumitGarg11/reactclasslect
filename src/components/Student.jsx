import React from 'react'

const Student = (props) => {
  return (
    <div>
      <h1>Marks of the Exam {props.marks.join(" ")}</h1>
    </div>
  )
}

export default Student
