import React, { useState } from 'react';
import axios from 'axios';
import { BsTrash, BsPlus } from 'react-icons/bs';

import 'bootstrap/dist/css/bootstrap.min.css';

const TrackNutrients = ({ onSave }) => {
  const [query, setQuery] = useState('');
  const [savedFoods, setSavedFoods] = useState([]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSaveFood = food => {
    console.log(food)
    setSavedFoods([...savedFoods, food]);
  };

  const handleSearch = async event => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
      {
        headers: {
          'X-Api-Key': 'bWNAt14QjBySpT0RDUucyZBAZH6Ish14GNjhwtVf',
        },
      }
    );
    console.log(response.data); // For debugging purposes
    handleSaveFood(response.data.items[0]); // Add the retrieved food to the saved list
    setQuery(''); // Clear the search query
  };

  // Calculate total nutrient values
  const totalCalories = savedFoods.reduce((total, food) => total + food.calories, 0);
  const totalProtein = savedFoods.reduce((total, food) => total + food.protein_g, 0);
  const totalFat = savedFoods.reduce((total, food) => total + food.fat_total_g, 0);
  const totalCarbs = savedFoods.reduce((total, food) => total + food.carbohydrates_total_g, 0);
  console.log(totalCalories,totalProtein)

  const handleSave = () => {
    onSave({
      calories: totalCalories,
      protein: totalProtein,
      fat: totalFat,
      carbs: totalCarbs,
     
    });
    console.log(sessionStorage.getItem('userData'),totalProtein,'i')
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleSearch}>
        <div className="input-group mb-3">
          <input type="text"
            className="form-control"
            placeholder="Search for a food item"
            value={query}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Fat</th>
            <th>Carbs</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {savedFoods.map(food => (
            <tr key={food.name}>
              <td>{food.name}</td>
              <td>{food.calories}</td>
              <td>{food.protein_g}</td>
              <td>{food.fat_total_g}</td>
              <td>{food.carbohydrates_total_g}</td>
              <td>
                <button
                  className="btn btn-outline-danger m-1"
                  onClick={() => {
                    setSavedFoods(savedFoods.filter(savedFood => savedFood.name !== food.name));
                  }}
                >
                  <BsTrash />
                </button>
                </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td>Total:</td>
        <td>{totalCalories}</td>
        <td>{totalProtein}</td>
        <td>{totalFat}</td>
        <td>{totalCarbs}</td>
        <td>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </td>
      </tr>
    </tfoot>
  </table>
</div>
);
};

export default TrackNutrients;
