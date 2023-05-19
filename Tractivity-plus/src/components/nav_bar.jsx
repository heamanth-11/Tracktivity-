
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const NavigationBar = () => {
 // Replace with the user's name
 const [ userName,setUserName] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = sessionStorage.getItem('userData');
        console.log(userData)
        if (userData) {
            console.log(userData)
          const parsedUserData = JSON.parse(userData);
          const response = await axios.get(`http://localhost:3000/users/${parsedUserData}`);
          setUserDetails(response.data);
         setUserName(response.data.name); 
          console.log(response.data.name)
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tracktivity+</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/bmi-tracker">BMI</Nav.Link>
            <Nav.Link href="/bmr-tracker">BMR</Nav.Link>
            <Nav.Link href="/navy-body-fat-tracker">Body Fat</Nav.Link>
            <Nav.Link href="/friendslog">Friends</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <NavDropdown title={<div> {userName}</div>} id="user-dropdown">
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
