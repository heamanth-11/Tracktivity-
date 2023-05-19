import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GoalNutrition from './GoalNutrition';
import TotalNutrients from './TotalNutrients';
import DailyMealTracker from './DailyMeal';

const Home = () => {
  return (
    <Container className="mt-4">
 

      <Row className="mt-4">
        <Col>
          <div className="d-flex justify-content-between">
            <div style={{ width: '50%' }}>
              <GoalNutrition />
            </div>
            <div style={{ width: '50%' }}>
              <TotalNutrients />
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <DailyMealTracker />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
