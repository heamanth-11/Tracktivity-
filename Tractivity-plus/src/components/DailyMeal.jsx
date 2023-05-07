import React, { useState } from 'react';
import MealCard from './mealCard';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
const DailyMealTracker = () => {
  // Initialize state for meal data and goal nutrition
  const [mealData, setMealData] = useState([
    { title: 'Breakfast', nutrients: { calories: 0, carbs: 0, protein: 0, fat: 0 } },
    { title: 'Morning Snack', nutrients: { calories: 0, carbs: 0, protein: 0, fat: 0 } },
    { title: 'Lunch', nutrients: { calories: 0, carbs: 0, protein: 0, fat: 0 } },
    { title: 'Dinner', nutrients: { calories: 0, carbs: 0, protein: 0, fat: 0 } },
    { title: 'Evening Snack', nutrients: { calories: 0, carbs: 0, protein: 0, fat: 0 } },
  ]);

  const [goalNutrition, setGoalNutrition] = useState({
    calories: 2000,
    carbs: 225,
    protein: 50,
    fat: 65,
  });

  // Calculate the sum of all meal nutrients
  const sumNutrients = mealData.reduce(
    (accumulator, currentMeal) => {
      accumulator.calories += currentMeal.nutrients.calories;
      accumulator.carbs += currentMeal.nutrients.carbs;
      accumulator.protein += currentMeal.nutrients.protein;
      accumulator.fat += currentMeal.nutrients.fat;
      return accumulator;
    },
    { calories: 0, carbs: 0, protein: 0, fat: 0 }
  );

  // Calculate the percentage of goal nutrients achieved
  const percentNutrients = {
    calories: Math.floor((sumNutrients.calories / goalNutrition.calories) * 100),
    carbs: Math.floor((sumNutrients.carbs / goalNutrition.carbs) * 100),
    protein: Math.floor((sumNutrients.protein / goalNutrition.protein) * 100),
    fat: Math.floor((sumNutrients.fat / goalNutrition.fat) * 100),
  };

  // Define data and options for the Doughnut chart
  const data = {
    labels: ['Calories', 'Carbs', 'Protein', 'Fat'],
    datasets: [
      {
        data: [percentNutrients.calories, percentNutrients.carbs, percentNutrients.protein, percentNutrients.fat],
        backgroundColor: ['#0074D9', '#FF4136', '#2ECC40', '#FF851B'],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: 'Goal vs Current Nutrition',
      fontSize: 20,
    },
    legend: {
      display: true,
      position: 'bottom',
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="container my-4">
      <h1>Daily Meal Tracker</h1>
      <div className="row">
        <div className="col-md-6">
          <MealCard title="Breakfast" mealData={mealData} setMealData={setMealData} />
          <MealCard title="Morning Snack" mealData={mealData} setMealData={setMealData} />
          </div>
    <div className="col-md-6">
      <MealCard title="Lunch" mealData={mealData} setMealData={setMealData} />
      <MealCard title="Dinner" mealData={mealData} setMealData={setMealData} />
      <MealCard title="Evening Snack" mealData={mealData} setMealData={setMealData} />
    </div>
  </div>
  <div className="row mt-4">
    <div className="col-md-6">
      <h3>Goal Nutrition</h3>
      <ul>
        <li>Calories: {goalNutrition.calories} cal</li>
        <li>Carbs: {goalNutrition.carbs} g</li>
        <li>Protein: {goalNutrition.protein} g</li>
        <li>Fat: {goalNutrition.fat} g</li>
      </ul>
    </div>
    <div className="col-md-6">
      <h3>Current Nutrition</h3>
      <ul>
        <li>Calories: {sumNutrients.calories} cal</li>
        <li>Carbs: {sumNutrients.carbs} g</li>
        <li>Protein: {sumNutrients.protein} g</li>
        <li>Fat: {sumNutrients.fat} g</li>
      </ul>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  </div>
</div>
);
};

export default DailyMealTracker;