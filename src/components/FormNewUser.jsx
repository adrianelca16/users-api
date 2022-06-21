import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const FormNewUser = ({createNewUser,URL, getUsersAll}) => {

  const {register, handleSubmit} = useForm()

  const createNewUserAll = data => {
    if(!(data.first_name === '' || data.last_name === '' || data.email === '' || data.password === '' || data.birthday === '')){
      axios.post(URL,data)
      .then(res => {
        console.log(res)
        getUsersAll()
      })
      .catch(err => console.log(err))
    }else{
      alert('All fields are required')
    }  
  }

  const submit = data => {
    createNewUserAll(data)
    createNewUser()
  }

  return (
    <div className='form-new-container'>
        <form onSubmit={handleSubmit(submit)} className='form-new'>
            <h1>New User</h1>
            <div className='form-subtitle'>
              <label htmlFor="first_name">First Name: </label>
              <input type="text" id='first_name' {...register('first_name')}/>
            </div>
            <div className='form-subtitle'>
              <label htmlFor="last_name">Last Name: </label>
              <input type="text" id='last_name' {...register('last_name')}/>
            </div>
            <div className='form-subtitle'>
              <label htmlFor="email">Email: </label>
              <input type="email" id='email' {...register('email')}/>
            </div>
            <div className='form-subtitle'>
              <label htmlFor="password">Password : </label>
              <input type="password" id='password' {...register('password')}/>
            </div>
            <div className='form-subtitle'>
              <label htmlFor="birthday">Birthday: </label>
              <input type="date" id='birthday' {...register('birthday')}/>
            </div>
            <button className='btn-form'>create</button>
        </form>
    </div>
  )
}

export default FormNewUser