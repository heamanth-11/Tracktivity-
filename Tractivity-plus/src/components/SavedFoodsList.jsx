import React from "react";

function SavedFoodsList({ savedFoods, onClearSavedFoods, onRemoveSavedFood }) {
  return (
    <div>
      {savedFoods.length > 0 ? (
        <div>
          <h2>Saved Foods</h2>
          <ul>
            {savedFoods.map((food, index) => (
              <li key={index}>
                {food.name} ({food.servingSize}g): {food.calories.toFixed(2)} kcal{" "}
                <button onClick={() => onRemoveSavedFood(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={onClearSavedFoods}>Clear Saved Foods</button>
        </div>
      ) : (
        <p>No saved foods yet.</p>
      )}
    </div>
  );
}

export default SavedFoodsList;
