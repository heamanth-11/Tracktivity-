import React, { useState } from 'react';

function BMRTracker() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [bmr, setBMR] = useState(null);

  const handleCalculate = () => {
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    setBMR(bmr);
  }

  const handleReset = () => {
    setGender('male');
    setAge(30);
    setWeight(70);
    setHeight(170);
    setActivityLevel(1.2);
    setBMR(null);
  }

  return (<div className="container mt-5 ">
     <div className="row justify-content-center">
        <div className="col-md-6">
        <div className="card justify-content-center">
            <div className="card-body justify-content-center">
      <h1>BMR Tracker</h1>
      <form>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select className="form-control" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="number" className="form-control" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input type="number" className="form-control" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="activityLevel">Activity Level:</label>
          <select className="form-control" id="activityLevel" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly Active</option>
            <option value="1.55">Moderately Active</option>
            <option value="1.725">Very Active</option>
            <option value="1.9">Extra Active</option>
          </select>
        </div>
        <br />
        <div className="form-group">
          <button type="button" className="btn btn-primary mr-3" onClick={handleCalculate}>Calculate</button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
        </div>
      </form>
      </div>
      </div>
     
      {bmr && (
        <div className="mt-4">
          <h4>Your BMR is {bmr.toFixed(2)} calories per day</h4>
          <p>This is the amount of energy your body needs to function at rest.</p>
          <p>To maintain your weight, you should consume around {Math.round(bmr * activityLevel)} calories per day, depending on your daily activity level.</p>
        </div>
      )}
    </div>
    </div>
      </div>
  
  );
}

export default BMRTracker;