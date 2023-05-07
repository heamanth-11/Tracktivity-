import React, { useState } from 'react';

const NavyBodyFatCalculator = () => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [neck, setNeck] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [bodyFat, setBodyFat] = useState('');

  const calculateBodyFat = () => {
    let factor1, factor2, factor3, factor4, factor5;
    if (gender === 'male') {
      factor1 = 86.010;
      factor2 = 70.041;
      factor3 = 36.76;
      factor4 = 27.81;
      factor5 = 6.25;
    } else {
      factor1 = 163.205;
      factor2 = 97.684;
      factor3 = 78.387;
      factor4 = 74.155;
      factor5 = 4.5;
    }
    const weight = (factor1 - (factor2 * Math.log10(waist - neck)) + (factor3 * Math.log10(height)) - factor4).toFixed(2);
    const fatBodyMass = ((weight * bodyFat) / 100).toFixed(2);
    setBodyFat(((fatBodyMass / weight) * 100).toFixed(2));
  }
  

  const handleSubmit = e => {
    e.preventDefault();
    calculateBodyFat();
  }

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
      <h1 className="my-4 text-center">Navy Body Fat Calculator</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select className="form-control" name="gender" id="gender" onChange={e => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="height">Height (inches):</label>
              <input type="number" className="form-control" name="height" id="height" value={height} onChange={e => setHeight(e.target.value)} placeholder="Enter height in inches" />
            </div>
            <div className="form-group">
              <label htmlFor="neck">Neck circumference (inches):</label>
              <input type="number" className="form-control" name="neck" id="neck" value={neck} onChange={e => setNeck(e.target.value)} placeholder="Enter neck circumference in inches" />
            </div>
            <div className="form-group">
              <label htmlFor="waist">Waist circumference (inches):</label>
              <input type="number" className="form-control" name="waist" id="waist" value={waist} onChange={e => setWaist(e.target.value)} placeholder="Enter waist circumference in inches" />
            </div>
            <div className="form-group">
              <label htmlFor="hip">Hip circumference (inches):</label>
              <input type="number" className="form-control" name="hip" id="hip" value={hip} onChange={e => setHip(e.target.value)} placeholder="Enter hip circumference in inches" />
            </div>
            <button type="submit" className="btn btn-primary">Calculate</button>
            </form>
        </div>
        <div className="col-md-6">
          {bodyFat && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Results</h5>
                <p className="card-text">Your body fat percentage is {bodyFat}%.</p>
              </div>
            </div>
          )}
        </div>
      </div>






</div>
</div>
</div>
</div>
    </div>
  );
}

export default NavyBodyFatCalculator;


