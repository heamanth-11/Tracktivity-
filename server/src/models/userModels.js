
const mongoose = require('mongoose');

// define a user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  username: String,
  age: Number,
  sex: String,
  weight:Number,
  height:Number,
  bmi:Number,
  bmr:Number,
  goal:String,
    // other fields...
    friends: {
      type: [mongoose.Schema.Types.ObjectId], // Array of ObjectIds
      // Reference to the User collection
      default: [], // Default empty array
    }


});

// create a mongoose model for the user schema
const User =  new mongoose.model('User', userSchema);

module.exports = User;