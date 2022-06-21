import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const FormUpdateUser = ({hidenFormUser, URL, id, getUsersAll}) => {

    const {handleSubmit, register} = useForm()

    const updateUserAll = (data,id) => {
            axios.patch(`${URL}${id}/`, data)
            .then(res => {
              console.log(res)
              getUsersAll()
            })
            .catch(err => console.log('error',err))
        }

    const submitUser = data => {
      for(let properties in data){
        if(data[properties] === ''){
          delete data[properties]
        }
      }
        updateUserAll(data,id)
        hidenFormUser()
    }
  return (
    <div className='form-update '>
      <form onSubmit={handleSubmit(submitUser)} className='form-new' >
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
            <button className='btn-form'><i className="fa-solid fa-pencil"></i></button>
      </form>

    </div>
   
    
  )
}

export default FormUpdateUser