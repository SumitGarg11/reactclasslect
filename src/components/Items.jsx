import React from 'react'
const items =[1,2,3,4,5];

const Items = () => {
  return (
    <div>
      
        {items.map((it,index)=>(
            <h3>{it*30}</h3>
        ))}

        {items.filter(it=>it>2).map((it)=>(
            <p>{it}</p>
        ))}
     
    </div>
  )
}

export default Items
