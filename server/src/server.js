const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://heamnath:oEVo2eSZzxThERPJ@cluster0.vuifujj.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const TestModel = require("./models/testmodel")
const UserNutrition = require('./models/userNutritionModel');

const User = require('./models/userModels')
const bcrypt = require('bcrypt');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('hello world')

})

app.post('/login', async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;

  try {
    // find the user with the specified email in the 'users' collection
    const user = await User.findOne({ email: email });
    console.log(user)
    // if user is not found, send an error response
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // compare the provided password with the stored hashed password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // if the password is not valid, send an error response
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // send a success response
    res.status(200).json({ user_id: user.id });
  } catch (error) {
    console.error(error);

    // send an error response
    res.status(500).json({ message: 'An error occurred while logging in.' });
  }
});



app.post('/signup', async (req, res) => {
  console.log(req.body)
  if (req.body.email) {
    const { email, password, name, username, age, sex } = req.body;
    console.log(req.body)

    try {
      // hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      // create a new user instance using the User model with the hashed password
      const newUser = new User({ email, password: hashedPassword, name, username, age, sex });

      // save the new user instance to the 'users' collection in MongoDB
      await newUser.save();

      // send a success response
      res.status(200).json({ user_id: newUser.id });
    } catch (error) {
      console.error(error);

      // send an error response
      res.status(500).json({ message: 'An error occurred while signing in.' });
    }
  }
  else {
    const { weight, height, goal, id } = req.body;
    const originalString = req.body.id;
    const formattedString = originalString.replace(/^"(.*)"$/, '$1');
    console.log(formattedString)
    const user = await User.findById(formattedString);
    console.log('yes',user)
    if (user) {
      console.log('yes')
      user.weight = weight;
      user.height = height;
      user.goal = goal;
      await user.save();
      res.status(200).json({ user_id: formattedString});
      
      // res.status(404).json({ message: 'User not found.YES' });

    }
    else {
      console.log('yes1')
      res.status(404).json({ message: 'User not found.' });
    }


  }
});


app.get('/users/:id', async (req, res) => {
  console.log(req.params.id)
  try {
    const user = await User.findById(req.params.id );
    if (user) {
      console.log('yes')
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/users/nutrition/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const  data  = req.body;
    console.log(data,userId)

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a new user nutrition record
    const userNutrition = new UserNutrition({
      
    });
    userNutrition.user= userId,
    userNutrition.calories = req.body.calories
    userNutrition.fat = req.body.fat
    userNutrition.carbs = req.body.carbs
    userNutrition.protein = req.body.protein

    // Save the user nutrition record to the database
    await userNutrition.save();

    res.status(200).json({ message: 'User nutrition data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while saving user nutrition data' });
  }
});

app.get('/nutrition/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId)

    // Find the user nutrition record by user ID
    const userNutrition = await UserNutrition.findOne({ user: userId });

    if (!userNutrition) {
      return res.status(404).json({ message: 'User nutrition data not found' });
    }

    res.status(200).json(userNutrition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching user nutrition data' });
  }
});



