import React from "react";

function NutritionResult({ nutrition, servingSize, onSaveFood }) {
  return (
    <div>
      {nutrition ? (
        <div>
          <h2>{nutrition.name}</h2>
          <p>Calories: {nutrition.calories * servingSize / 100}</p>
          <p>Total Fat: {nutrition.totalFat * servingSize / 100}g</p>
          <p>Saturated Fat: {nutrition.sFat * servingSize / 100}g</p>
          <p>Cholesterol: {nutrition.cholesterol * servingSize / 100}mg</p>
          <p>Sodium: {nutrition.sodium * servingSize / 100}mg</p>
          <p>Total Carbohydrates: {nutrition.carbohydrates * servingSize / 100}g</p>
          <p>Dietary Fiber: {nutrition.fiber * servingSize / 100}g</p>
          <p>Sugars: {nutrition.sugars * servingSize / 100}g</p>
          <p>Protein: {nutrition.protein * servingSize / 100}g</p>
          <button onClick={onSaveFood}>Save Food</button>
        </div>
      ) : (
        <p>No nutrition information found.</p>
      )}
    </div>
  );
}

export default NutritionResult;
