import React from 'react'
import Student from './Student'
const Teacher = () => {
    const mark = [97,78];
  return (
    <div>
      <Student  marks={mark} />
    </div>
  )
}

export default Teacher
