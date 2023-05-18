import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const Complete_SignUpComponent = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const history = useNavigate();

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Height:', height);
    console.log('Weight:', weight);
    console.log('Goal:', goal);
    axios.post('http://localhost:3000/signup',{weight:weight,height:height,goal:goal,id: sessionStorage.getItem('userData')}).then((response)=>{
      console.log(response.data);
    //   setUserData(response.data); // assuming response.data is an object that contains the user data
    //   setLoggedIn(true);
       // storing user data in sessionStorage
      history('/dailymeal'); // redirect the user to the dashboard page
    }).catch(error => {
    
      alert(error)
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Set Your Goal</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="height">Height in CM:</label>
        <input
          type="number"
          className="form-control"
          id="height"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="weight">Weight in CM:</label>
        <input
          type="number"
          className="form-control"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="goal">Goal:</label>
        <select className="form-control" id="goal" value={goal} onChange={handleGoalChange}>
          <option value="">Select your goal</option>
          <option value="lose weight">Lose weight</option>
          <option value="gain weight">Gain weight</option>
          <option value="maintain weight">Maintain weight</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Complete Sign Up</button>
    </form>
    </div>
    </div>
    </div>
    </div></div>
  );
};

export default Complete_SignUpComponent;
