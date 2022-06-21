import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import UserList from './components/UserList'

function Users() {
  
  const URL = 'https://users-crud1.herokuapp.com/users/' 

  const [users, setUsers] = useState()
  const [isLoading, setIsLoading] = useState(true)
  

  const getUsersAll = () => {
    axios.get(URL)
    .then(res => {
      setUsers(res.data)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsersAll()
  }, [])
  
  return (
    <div className="App">
      {
        isLoading ?
        <Loader/>
        :
        <UserList 
        users={users}
        getUsersAll={getUsersAll}
        URL={URL}
        />
      }
      

    </div>
  )
}

export default Users
