import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/Login.css'; // Import your custom CSS for styling


function Register() {
    const [credentials, setCredentials] = useState({ name: "", phone: "", role: "", username: "", password: "" })
    const navigate = useNavigate()
    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        const url = `http://localhost:3001/auth/createUser`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, phone: credentials.phone, role: credentials.role, username: credentials.username, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)

        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            // props.showAlert("success", "Successfully Logged In!!")
            navigate("/login")

        }
        else {
            // props.showAlert("danger", "Please enter valid credentials.")
        }
    }

    return (
        <div>
            <div className="login-container">
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <input className="form-control" type="text" placeholder="Name" aria-label="default input example" id="name" name="name" value={credentials.name} onChange={onChange} required />
                        <input className="form-control" type="number" placeholder="Phone No." aria-label="default input example" id="phone" name="phone" value={credentials.phone} onChange={onChange} maxLength={10} required />
                        <select name="role" id="role"
                            value={credentials.role}
                            onChange={onChange}
                        >
                            <option value="">Select Role</option>
                            <option value="Customer">Customer</option>
                            <option value="Pharmacy">Pharmacy</option>
                        </select>
                        <input className="form-control" type="text" placeholder="Username" aria-label="default input example" id="username" name="username" value={credentials.username} onChange={onChange} required />
                        <input className="form-control" type="password" placeholder="Password" aria-label="default input example" id="password" name="password" value={credentials.password} onChange={onChange} required />
                        <button  type="submit" className='button-feature btn btn-success'>
                        Submit
                    </button>
                        <br /><br />
                        <div align="center">
                            <Link to="/login">Login</Link>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}
export default Register