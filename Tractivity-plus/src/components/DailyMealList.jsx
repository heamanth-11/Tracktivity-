import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import TrackNutrients from "./TrackNutrients";

const DailyMealList = () => {
  const [showBreakfastModal, setShowBreakfastModal] = useState(false);
  const [showLunchModal, setShowLunchModal] = useState(false);
  const [showMorningSnackModal, setShowMorningSnackModal] = useState(false);
  const [showEveningSnackModal, setShowEveningSnackModal] = useState(false);
  const [showDinnerModal, setShowDinnerModal] = useState(false);

  const [breakfastFoods, setBreakfastFoods] = useState([]);
  const [lunchFoods, setLunchFoods] = useState([]);
  const [morningSnackFoods, setMorningSnackFoods] = useState([]);
  const [eveningSnackFoods, setEveningSnackFoods] = useState([]);
  const [dinnerFoods, setDinnerFoods] = useState([]);

  const handleBreakfastModalClose = () => setShowBreakfastModal(false);
  const handleLunchModalClose = () => setShowLunchModal(false);
  const handleMorningSnackModalClose = () => setShowMorningSnackModal(false);
  const handleEveningSnackModalClose = () => setShowEveningSnackModal(false);
  const handleDinnerModalClose = () => setShowDinnerModal(false);

  const handleBreakfastClick = () => setShowBreakfastModal(true);
  const handleLunchClick = () => setShowLunchModal(true);
  const handleMorningSnackClick = () => setShowMorningSnackModal(true);
  const handleEveningSnackClick = () => setShowEveningSnackModal(true);
  const handleDinnerClick = () => setShowDinnerModal(true);

  const handleBreakfastTrack = (foods) => setBreakfastFoods(foods);
  const handleLunchTrack = (foods) => setLunchFoods(foods);
  const handleMorningSnackTrack = (foods) => setMorningSnackFoods(foods);
  const handleEveningSnackTrack = (foods) => setEveningSnackFoods(foods);
  const handleDinnerTrack = (foods) => setDinnerFoods(foods);

  const calculateMealNutrition = (foods) => {
    // calculate sum of nutrients for the meal
    let sum = {
      calories: 0,
      protein: 0,
      fat: 0,
      carbs: 0
    };
    foods.forEach((food) => {
      sum.calories += food.calories;
      sum.protein += food.protein;
      sum.fat += food.fat;
      sum.carbs += food.carbs;
    });
    return sum;
  };

   return <div>
  <Card style={{ width: "18rem" }}>
<Card.Body>
 <Card.Title>Morning Snack</Card.Title>
 <Card.Subtitle className="mb-2 text-muted">
   {morningSnackFoods.length > 0 &&
     `${calculateMealNutrition(morningSnackFoods).calories} Calories`}
 </Card.Subtitle>
 <Card.Text>
   <Button variant="primary" onClick={handleMorningSnackClick}>
     Track Morning Snack
   </Button>
 </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: "18rem" }}>
<Card.Body>
 <Card.Title>Evening Snack</Card.Title>
 <Card.Subtitle className="mb-2 text-muted">
   {eveningSnackFoods.length > 0 &&
     `${calculateMealNutrition(eveningSnackFoods).calories} Calories`}
 </Card.Subtitle>
 <Card.Text>
   <Button variant="primary" onClick={handleEveningSnackClick}>
     Track Evening Snack
   </Button>
 </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: "18rem" }}>
<Card.Body>
 <Card.Title>Dinner</Card.Title>
 <Card.Subtitle className="mb-2 text-muted">
   {dinnerFoods.length > 0 &&
     `${calculateMealNutrition(dinnerFoods).calories} Calories`}
 </Card.Subtitle>
 <Card.Text>
   <Button variant="primary" onClick={handleDinnerClick}>
     Track Dinner
   </Button>
 </Card.Text>
</Card.Body>
</Card>

<Modal show={showBreakfastModal} onHide={handleBreakfastModalClose}>
<Modal.Header closeButton>
 <Modal.Title>Track Breakfast</Modal.Title>
</Modal.Header>
<Modal.Body>
 <TrackNutrients onTrack={handleBreakfastTrack} />
</Modal.Body>
<Modal.Footer>
 <Button variant="secondary" onClick={handleBreakfastModalClose}>
   Close
 </Button>
</Modal.Footer>
</Modal>

<Modal show={showLunchModal} onHide={handleLunchModalClose}>
<Modal.Header closeButton>
 <Modal.Title>Track Lunch</Modal.Title>
</Modal.Header>
<Modal.Body>
 <TrackNutrients onTrack={handleLunchTrack} />
</Modal.Body>
<Modal.Footer>
 <Button variant="secondary" onClick={handleLunchModalClose}>
   Close
 </Button>
</Modal.Footer>
</Modal>

<Modal show={showMorningSnackModal} onHide={handleMorningSnackModalClose}>
<Modal.Header closeButton>
 <Modal.Title>Track Morning Snack</Modal.Title>
</Modal.Header>
<Modal.Body>
 <TrackNutrients onTrack={handleMorningSnackTrack} />
</Modal.Body>
<Modal.Footer>
 <Button variant="secondary" onClick={handleMorningSnackModalClose}>
   Close
 </Button>
</Modal.Footer>
</Modal>

<Modal show={showEveningSnackModal} onHide={handleEveningSnackModalClose}>
<Modal.Header closeButton>
<Modal.Title>Track Evening Snack</Modal.Title>
</Modal.Header>
<Modal.Body>
<TrackNutrients onTrack={handleEveningSnackTrack} />
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleEveningSnackModalClose}>
Close
</Button>
</Modal.Footer>
</Modal>

<Modal show={showDinnerModal} onHide={handleDinnerModalClose}>
<Modal.Header closeButton>
 <Modal.Title>Track Dinner</Modal.Title>
</Modal.Header>
<Modal.Body>
 <TrackNutrients onTrack={handleDinnerTrack} />
</Modal.Body>
<Modal.Footer>
 <Button variant="secondary" onClick={handleDinnerModalClose}>
   Close
 </Button>
</Modal.Footer>
</Modal>
</div>}
export default DailyMealList;