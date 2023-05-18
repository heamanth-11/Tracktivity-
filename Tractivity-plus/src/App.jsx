import { useState } from 'react'
import { Routes ,Route, BrowserRouter as Router } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/LoginPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginPage from './components/LoginPage.jsx'
import SignIn from './components/signinpage'
import DailyMealTracker from './components/DailyMeal';
import TrackNutrients from './components/TrackNutrients';
import NavyBodyFatCalculator from './components/NavyBodyFatTracker';
import BMRTracker from './components/BMR'
import BMICalculator from './components/bmi'
import Complete_SignUpComponent from './components/complete_sign_up';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignIn />} />
        <Route exact path="/track-nutrients" element={<TrackNutrients />} />
        <Route exact path="/navy-body-fat-tracker" element ={<NavyBodyFatCalculator />} />
        <Route exact path="/bmr-tracker" element ={<BMRTracker />} />
        <Route exact path='/bmi-tracker' element ={<BMICalculator />} />
        <Route exact path="/dailymeal" element ={<DailyMealTracker />} />
        <Route exact path="/complete-sign-up" element ={<Complete_SignUpComponent />} />

        </Routes>
    </Router>
    </>
  )
}

export default App
