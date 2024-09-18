import React from 'react'
const people = [
    {name: "sumit", age: 19},
    {name: "tarun", age : 22},
    {name: "kanu", age : 14}
];
const getAdultAge = (people) => {
    return (
        people.filter(({age})=> age >18).map(({name})=> name)
    )
}
const Age = () => {
    const displayAdultName = getAdultAge(people);

    return(
        <div>
            {displayAdultName.map((it)=>(
                <h1>{it}</h1>
            ))}
        </div>
    )
};
export  default Age