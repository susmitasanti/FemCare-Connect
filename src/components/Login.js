import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [credentials, setCredentials]=useState({username:"", role:"", password:""})
    const navigate=useNavigate()
    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const url = `http://localhost:3001/auth/login`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: credentials.username, role: credentials.role, password:credentials.password})

        });
        const json = await response.json();
        console.log(json)

        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            // props.showAlert("success", "Successfully Logged In!!")
            navigate("/home")

        }
        else {
            // props.showAlert("danger", "Please enter valid credentials.")
        }
    }

  return (
    <div>
        <div className='container' style={{margin:'100px'}}>
            <form onSubmit={handleSubmit}>
      <input className="form-control" type="text" placeholder="Username" aria-label="default input example" id="username" name="username" value={credentials.username} onChange={onChange} required/>
      <input className="form-control" type="text" placeholder="Role" aria-label="default input example" id="role" name="role" value={credentials.role} onChange={onChange} required/>
      <input className="form-control" type="password" placeholder="Password" aria-label="default input example" id="password" name="password" value={credentials.password} onChange={onChange} required/>
      <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
      </div>



    </div>
  )
}

export default Login
