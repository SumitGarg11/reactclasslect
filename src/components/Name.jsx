import React from 'react';
import './Name.css'
const namestyle = {
    color:'blue',
    fontSize: "24px",
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '20px',
    
};
const Name = () => {
    return (
        <div>
            <p style={namestyle}> Hello My Name is Sumit </p>
            <p className='name'>Hello react developer</p>
        </div>
    )
}
export default Name;