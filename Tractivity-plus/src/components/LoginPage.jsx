import React, { useState } from 'react';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookLogin from 'react-facebook-login';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check username and password
    // If valid, set loggedIn to true
    axios.post('http://localhost:3000/login',{email:username,password:password}).then((response)=>{
      console.log(response.data.user_id);
      setUserData(response.data); // assuming response.data is an object that contains the user data
      setLoggedIn(true);
      sessionStorage.setItem('userData', JSON.stringify(response.data.user_id)); // storing user data in sessionStorage
      history('/dailymeal'); // redirect the user to the dashboard page
    }).catch(error => {
      setError('Failed to login. Please check your username and password.');
      alert(error)
    });
  };

  const handleFacebookLogin = (response) => {
    console.log(response);
    // TODO: handle Facebook login response
  };

  if (loggedIn) {
    // return <Redirect to="/" />;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
              <div className="text-center mt-3">
                <span>Don't have an account? </span>
                <Link to="/signup">Sign up</Link>
              </div>
              <div className="mt-3 text-center">
                <button type="button" className="btn btn-primary">
                  <i className="fab fa-facebook-f mr-2"></i>
                  Login with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
