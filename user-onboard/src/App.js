import React, {useState, useEffect}from 'react';
import OnboardForm from './OnboardForm'
import UserList from './UserList';



import schema from './formSchema'
import * as yup from 'yup'
import axios from 'axios'

import './App.css';




const initialFormValues = { 
  username: "", 
  password: "", 
  termsOfService: false
}

const submitDisabled = true



function App() {
  const [users, setUsers] = useState([])

  useEffect(() => { 
    axios.get('https://reqres.in/api/users')
    .then((response) => { 
      setUsers(response.data.data)
    })
    .catch((error) => { 
      console.log("There was an error communicating from the server", error)
    })
  }, [])
  
  return (
    <div className="App">
      <h1>User On Boarding</h1> 
      <div className='container'>
     <OnboardForm />
     <UserList users={users}/>
     </div>
    </div>
  );
}

export default App;
