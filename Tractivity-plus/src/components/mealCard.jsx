import React, { useState } from 'react';
import TrackNutrients from './TrackNutrients';

const MealCard = ({ title }) => {
  const [showTrackNutrients, setShowTrackNutrients] = useState(false);
  const [totalNutrients, setTotalNutrients] = useState({ calories: 0, protein_g: 0, fat_g: 0, carbohydrates_total_g: 0 });

  const handleSave = () => {
    // Save the total nutrients value of the foods list
    console.log(`Saved total nutrients for ${title}:`, totalNutrients);
  };

  const handleTrackNutrientsClose = () => {
    setShowTrackNutrients(false);
  };

  const handleTrackNutrientsSave = nutrients => {
    // Update the total nutrients value of the foods list
    setTotalNutrients(nutrients);
    setShowTrackNutrients(false);
  };

  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <button
          className="btn btn-primary"
          onClick={() => setShowTrackNutrients(true)}
        >
          Track Nutrients
        </button>
        {showTrackNutrients && (
          <div className="modal show d-block">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Track Nutrients</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleTrackNutrientsClose}
                  />
                </div>
                <div className="modal-body">
                  <TrackNutrients onSave={handleTrackNutrientsSave} />
                </div>
              </div>
            </div>
          </div>
        )}
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <h6>Calories:</h6>
            <p>{totalNutrients.calories}</p>
          </div>
          <div className="col-sm-6">
            <h6>Protein:</h6>
            <p>{totalNutrients.protein}g</p>
          </div>
          <div className="col-sm-6">
            <h6>Fat:</h6>
            <p>{totalNutrients.fat}g</p>
          </div>
          <div className="col-sm-6">
            <h6>Carbs:</h6>
            <p>{totalNutrients.carbs}g</p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default MealCard;
