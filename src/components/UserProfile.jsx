import React from 'react'

const UserProfile = (props) => {
    const {name,email,profilePicture} = props;
  return (
    <div className='profile-contaner'>
      <img src={profilePicture} alt="" className='profile-picture' />
      <table className='profile-table'>
        <tbody>
            <tr>
                <td className='profile-label'>Name:</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td className="profile-label">Email:</td>
                <td>{email}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserProfile
