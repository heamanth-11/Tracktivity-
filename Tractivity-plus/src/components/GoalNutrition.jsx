import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoalNutrition = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [goalNutrition, setGoalNutrition] = useState(0);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = sessionStorage.getItem('userData');
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          const response = await axios.get(`http://localhost:3000/users/${parsedUserData}`);
          setUserDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  useEffect(() => {
    if (userDetails) {
      const { age, sex, weight, height, goal } = userDetails;
      const bmr = calculateBMR(age, sex, weight, height);
        console.log(goal)
      let calculatedGoalNutrition = 0;
      if (goal === 'maintain weight') {
        calculatedGoalNutrition = Math.round(bmr);
      } else if (goal === 'gain weight') {
        calculatedGoalNutrition = Math.round(bmr+500);
      } else if (goal === 'lose weight') {
        calculatedGoalNutrition = Math.round(bmr-500);
      }

      setGoalNutrition(calculatedGoalNutrition);
    }
  }, [userDetails]);

  const calculateBMR = (age, sex, weight, height) => {
    console.log(age, weight, height,sex);
    let bmr = 0;
    if (sex === 'Male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      console.log(bmr);
    } else if (sex === 'Female') {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return bmr;
  };

  return (
    <div className="container">
      <h2 className="mt-4">Goal Nutrition</h2>
      {userDetails ? (
        <div className="card mt-4">
          <div className="card-body">
            <p>
            <strong>Goal calories:</strong> {goalNutrition} calories
            </p>
            <p>
              <strong>Carbohydrates:</strong> {Math.round(goalNutrition/100*11.3)}g
            </p>
            <p>
              <strong>Protien:</strong> {userDetails.weight}g
            </p>
            <p>
              <strong>fat:</strong> {Math.round(goalNutrition/100*3.4)}g
            </p>
            <p>
              <strong>sugar:</strong> {Math.round(goalNutrition/100*1.9)}g
            </p>
            <p>
              
            </p>
          </div>
        </div>
      ) : (
        <p className="mt-4">Loading user details...</p>
      )}
    </div>
  );
};

export default GoalNutrition;
