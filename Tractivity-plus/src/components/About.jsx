import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>About Tracktivity+</h2>
          <p>
            Tracktivity+ is a comprehensive nutrition tracking and diet planning application designed to help individuals maintain a healthy lifestyle and achieve their fitness goals. With busy schedules and diverse dietary needs, it's crucial to have a tool that simplifies tracking nutritional intake, provides personalized recommendations, and supports long-term progress.
          </p>
          <p>
            At Tracktivity+, we understand the importance of nutrition in overall well-being. Our app aims to empower users to make informed choices about their diet by providing accurate information, insightful analytics, and intuitive features.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Why Nutrition Tracking?</h3>
          <p>
            Nutrition tracking is key to understanding the quality and quantity of the food we consume. By monitoring our nutritional intake, we can identify areas for improvement, make healthier choices, and achieve our desired fitness outcomes. Whether you're aiming for weight loss, muscle gain, or simply maintaining a balanced diet, tracking nutrition is essential for success.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Features and Logic</h3>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <h4>BMI Tracker</h4>
          <p>
            The BMI (Body Mass Index) Tracker calculates and monitors your BMI, which is a measure of body weight relative to height. By inputting your weight and height, the app uses the formula to provide you with your BMI score. This helps you assess whether you fall within a healthy weight range based on standard classifications.
          </p>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <h4>BMR Tracker</h4>
          <p>
            The BMR (Basal Metabolic Rate) Tracker estimates the number of calories your body requires at rest to maintain basic functions. By considering factors such as age, sex, weight, and height, the app calculates your BMR. Understanding your BMR helps you set calorie goals for weight management, ensuring you consume an appropriate amount of calories to meet your individual needs.
          </p>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <h4>Body Fat Tracker</h4>
          <p>
            The Body Fat Tracker measures and tracks your body fat percentage, a crucial indicator of overall fitness. By inputting specific body measurements and following established formulas, the app estimates your body fat percentage. Tracking changes in body fat helps you adjust your diet and exercise routine to achieve a healthier body composition.
          </p>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <h4>Daily Nutrition Tracker</h4>
          <p>
            The Daily Nutrition Tracker allows you to log and track your daily food intake. By entering your meals, snacks, and beverages along with their nutritional information, the app provides a comprehensive overview of your nutrient consumption. This feature enables you to identify nutrient imbalances, make adjustments, and ensure you're meeting your dietary goals.
          </p>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <h4>Diet Goals</h4>
          <p>
            Tracktivity+ enables you to set and manage your diet goals based on your unique needs. Whether your goal is weight loss, weight maintenance, or muscle gain, the app provides personalized recommendations and tracks your progress. By aligning your daily nutrition intake with your desired outcomes, you can stay on track and achieve long-term success.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
