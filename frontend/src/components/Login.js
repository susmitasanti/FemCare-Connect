import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/User/UserContext';
import { Link } from 'react-router-dom';
import '../css/Login.css'; // Import your custom CSS for styling

function Login() {
    const context = useContext(UserContext);
    const { setLogin, setUserInfo } = context;
    const [credentials, setCredentials] = useState({
        username: "",
        role: "",
        password: ""
    });
    const navigate = useNavigate();

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `http://localhost:3001/auth/login`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: credentials.username,
                role: credentials.role,
                password: credentials.password
            })
        });
        const json = await response.json();

        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            setLogin(true);
            setUserInfo(json.user);
            navigate("/Home");
        } else {
            // Handle login failure
        }
    }

    return (
        <div className="login-container">
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={onChange}
                        required
                    />
                    <select
                        name="role"
                        id="role"
                        value={credentials.role}
                        onChange={onChange}
                        required
                    >
                        <option value="">Select Role</option>
                        <option value="Customer">Customer</option>
                        <option value="Pharmacy">Pharmacy</option>
                    </select>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={onChange}
                        required
                    />
                    <button type="submit" className='button-feature btn btn-success'>
                        Submit
                    </button>
                </form>
                <br />
                <div align="center">
                    Not Registered? <Link to="/register">Register Now!</Link>
                </div>
            </div>


        </div>
    );
}

export default Login;
