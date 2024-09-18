import React from "react"
import Child from "./Child";
const Parent = () => {
    const jaabhai = "This is some data passed from ParentComponent";
    return (
        <div>
            <h1>Parent Component</h1>
            <Child sumit = {jaabhai} />
        </div>
    )
}
export default Parent ;