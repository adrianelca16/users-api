import React, { useState } from 'react'
import FormNewUser from './FormNewUser';
import User from './User';

const UserList = ({users,getUsersAll,URL}) => {

    const [createUser, setCreateUser] = useState(false)

    const createNewUser = () => setCreateUser(!createUser)


  return (
    <div className='users-container'>
        {
            createUser?
            <FormNewUser
            URL={URL}
            createNewUser={createNewUser}
            getUsersAll={getUsersAll}
            />
            :
            <>
            <div className='users-title'>
                <h1 className='users-title'>Users</h1>
                <button onClick={createNewUser} className='btn-form'>+ create new user</button>
            </div>
            <div className='user-container'>
                {
                    users?.map(user => (
                        <User
                        key={user.id}
                        user={user}
                        getUsersAll={getUsersAll}
                        URL={URL}/>
                    ))
                }
            </div>
            </>
            }
    </div>
  )
}

export default UserList