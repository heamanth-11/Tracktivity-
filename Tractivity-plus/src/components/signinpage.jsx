import { useState } from 'react';

import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { email, password, name, username, age, sex };
    console.log(formData)

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert('Sign in successful!,');
        sessionStorage.setItem('userData', JSON.stringify(data.user_id));
        history('/complete-sign-up');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Sign In</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </Form.Group>

                <Form.Group controlId="name">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} required />
                </Form.Group>

                <Form.Group controlId="username">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control type="text" value={username} onChange={(event) => setUsername(event.target.value)} required />
                </Form.Group>

                <Form.Group controlId="age">
                  <Form.Label>Age:</Form.Label>
                  <Form.Control type="number" value={age} onChange={(event) => setAge(event.target.value)} required />
                </Form.Group>

                <Form.Group controlId="sex">
                  <Form.Label>Sex:</Form.Label>
                  <Form.Control as="select" value={sex} onChange={(event) => setSex(event.target.value)} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">Sign In</Button>
              </Form>
              <div className="text-center mt-3">
                <span>Already have an account? </span>
                <Link to="/login">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
