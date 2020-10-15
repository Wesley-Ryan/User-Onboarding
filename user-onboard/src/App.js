import React, {useState, useEffect}from 'react';
import OnboardForm from './OnboardForm'
import UserList from './UserList';



import schema from './formSchema'
import * as yup from 'yup'
import axios from 'axios'

import './App.css';




const initialFormData = { 
  username: "", 
  password: "", 
  url: "",
  termsOfService: false
}



function App() {
  const [users, setUsers] = useState([])
  const [formData,setFormData] = useState(initialFormData)


  
  const clearForms = (initialFormData) => { 
    setFormData(initialFormData)
  }

  const getUsers = () => { 
    axios.get('https://reqres.in/api/users')
    .then((response) => { 
      setUsers(response.data.data)
      
    })
    .catch((error) => { 
      console.log("There was an error communicating from the server", error)
    })
  }

  const postUsers =(newUser) => { 
    axios.post('https://reqres.in/api/users',newUser )
    .then((response) => { 
      setUsers([response.data, ...users])
      setFormData(initialFormData)
        
    })
    .catch((error) => { 
      console.log("There was an error posting to the server", error)
    })
  }

  useEffect(() => { 
    getUsers()
    
  }, [])

  const onSubmit=(event) => { 
    event.preventDefault()
    const newUser = { 
      first_name: formData.username.trim(), 
      email: formData.password.trim(), 
      avatar: formData.url.trim(),
    }
    postUsers(newUser)
    
    
  }

  
  
  return (
    <div className="App">
      <h1>User On Boarding</h1> 
      <button id='refresh' onClick={() => { 
        window.location.reload()
      }}>Refresh</button>
      <div className='container'>
     <OnboardForm setValues={setFormData} values={formData} submit={onSubmit}  />
     <UserList users={users}/>
     </div>
    </div>
  );
}

export default App;
