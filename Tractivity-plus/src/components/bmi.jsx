import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBMI(bmi);
  }

  const reset = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
  }

  return (<div className="container mt-5">
    <div  className="row justify-content-center">
        <div className="col-md-5">
        <div className="card justify-content-center">
            <div className="card-body justify-content-center">
      <h1>BMR Tracker</h1>
      <form>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="number" className="form-control" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input type="number" className="form-control" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <br />
        <div className="form-group">
          <button type="button" className="btn btn-primary mr-3" onClick={calculateBMI}>Calculate</button>
          <button type="button" className="btn btn-secondary" onClick={reset}>Reset</button>
        </div>
      </form>
      {bmi && (
        <div className="mt-4">
          <h4>Your BMI is {bmi.toFixed(2)}</h4>
          <p>A BMI of less than 18.5 means you are underweight, a BMI of 18.5-24.9 means you are at a healthy weight, a BMI of 25-29.9 means you are overweight, and a BMI of 30 or more means you are obese.</p>
        </div>
      )}
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default BMICalculator;
