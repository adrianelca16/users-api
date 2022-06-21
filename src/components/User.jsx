import axios from 'axios';
import React, { useState } from 'react'
import FormUpdateUser from './FormUpdateUser';

const User = ({user,URL,getUsersAll}) => {

    const deleteUserId = id => {
        axios.delete(`${URL}${id}/`)
        .then(res => {
            console.log(res)
            getUsersAll()
        })
        .catch(err => console.log(err))
    }

    const [isActiveForm, setIsActiveForm] = useState(false)

    const hidenFormUser = () => setIsActiveForm(!isActiveForm)

  return (
    <article>
        {
            isActiveForm?
            <FormUpdateUser
            hidenFormUser={hidenFormUser}
            URL={URL}
            id={user?.id}
            getUsersAll={getUsersAll}
            />
            :
            <div className='user-card'>
                <h1> <i className="fa-solid fa-user"></i>   {`${user?.first_name} ${user?.last_name}`}</h1>
                <div className='user-information'>
                    <p className='user-subtitle'><i className="fa-solid fa-envelope"></i> Email:</p>
                    <p>{user?.email}</p>
                </div>
                <div className='user-information'>
                    <p className='user-subtitle'><i className="fa-solid fa-cake-candles"></i> Birthday:</p>
                    <p>{user?.birthday}</p>
                </div>
                <div className='user-btn-container'>
                    <button onClick={() => deleteUserId(user?.id)} className='user-btn btn-trash'><i className="fa-solid fa-trash-can"></i></button>
                    <button onClick={hidenFormUser} className='user-btn'><i className="fa-solid fa-pencil"></i></button>
                </div>
                
            </div>
        }
        
        
    </article>
  )
}

export default User