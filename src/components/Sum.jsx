import React from "react"
import SumNumber from "./SumNumber";


const Sum = () => {
    const example = SumNumber(1,2,3,4,5);
    return (
        <div>
            <h1> The sum of the 1,2,3,4,5 =  {example} </h1>
            
        </div>
    )
}
export  default Sum;