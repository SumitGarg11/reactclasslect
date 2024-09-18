import React from 'react'
import { employeeData } from '../utils/employeData'
import "./employe.css"
const Employe = () => {
  return (
    <div className='table-container'>
      <table className='data-table' >
        <thead>
            <tr>
                <th>Name</th>
                <th>Gmail</th>

            </tr>
        </thead>
        <tbody>
            {employeeData.map((it)=>(
                <tr>
                    <td>{it.nameE}</td>
                    <td>{it.gmailE}</td>
                </tr>
            ))}
        </tbody>

      </table>
    </div>
  )
}

export default Employe
