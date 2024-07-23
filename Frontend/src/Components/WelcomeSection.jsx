import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import titleIcon from "../assets/title-icon.png";
import "../Styles/WelcomeSection.css";
import { Text } from "@chakra-ui/react";

const WelcomeSection = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCounter1((prev) => (prev < 1000 ? prev + 10 : prev));
    }, 100);

    const interval2 = setInterval(() => {
      setCounter2((prev) => (prev < 500 ? prev + 5 : prev));
    }, 100);

    const interval3 = setInterval(() => {
      setCounter3((prev) => (prev < 1000 ? prev + 10 : prev));
    }, 100);

    const interval4 = setInterval(() => {
      setCounter4((prev) => (prev < 100 ? prev + 1 : prev));
    }, 100);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []); // Added dependency array to ensure it runs only on mount

  return (
    <section className="welcome-section py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <Text as="h2" fontSize={["20px", "24px", "36px", "42px"]} mb={3}>
              Welcome to Event Maestro{" "}
              <span className="highlight-text">
                - Best Wedding & Event Management Company
              </span>
            </Text>
            <h4 className="animated-text">
              Event Delight - Award Winning Wedding Planners & Event Management
              Company
            </h4>

            <img
              className="title-icon my-3"
              src={titleIcon}
              alt="Best Event Management Company"
            />
          </Col>
        </Row>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{counter1}+ </div>
            <h3>Specialists Hired</h3>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counter2}+ </div>
            <h3>Clients Served</h3>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counter3}+ </div>
            <h3>Positions Filled</h3>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counter4}+ </div>
            <h3>Industry Experience</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WelcomeSection;
