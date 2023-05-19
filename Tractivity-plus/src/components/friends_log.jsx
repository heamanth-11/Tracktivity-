import React from 'react';

const FriendsLog = () => {
  const styles =  {
    marginBottom:'22%'}
  return (
    <div>
      <div style={styles} className="container">
        <h2>Friends Log</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Goal Nutrition</h5>
                <p className="card-text">
                  <strong>Friend Name:</strong> Mustaq
                  <br />
                  <strong>Calories:</strong> 2000
                  <br />
                  <strong>Protein:</strong> 50g
                  <br />
                  <strong>Fat:</strong> 70g
                  <br />
                  <strong>Carbs:</strong> 300g
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Nutrition</h5>
                <p className="card-text">
                  <strong>Friend Name:</strong> Mustaq
                  <br />
                  <strong>Calories:</strong> 2500
                  <br />
                  <strong>Protein:</strong> 60g
                  <br />
                  <strong>Fat:</strong> 80g
                  <br />
                  <strong>Carbs:</strong> 350g
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsLog;
