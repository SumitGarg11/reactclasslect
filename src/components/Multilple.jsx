import React from 'react'
import { salary } from '../utils/constant'
import UpdatedSal from './UpdatedSal';

const Multilple = () => {
    const Bonus = UpdatedSal(salary);
  return (
    <div>
      {Bonus.map((it)=> (
        <h1>{it}</h1>
      ))}
    </div>
  )
}

export default Multilple
