const mongoose = require('mongoose');

// Define the UserNutrition schema
const UserNutritionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,},
    // Reference the User model (replace with the actual name of your User model if different)
    calories:Number,
    protein : Number,
    fat: Number, 
    carbs:Number,
  },
  
);

// Create the UserNutrition model using the schema
const UserNutrition = mongoose.model('UserNutrition', UserNutritionSchema);

module.exports = UserNutrition;
