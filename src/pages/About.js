import React from 'react';
import { Container, Center} from '@chakra-ui/react';

function About() {
  return (
    <>
      <Container className="my-5">
        <div className="my-2">
          <div className="profile-img my-5">
          <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
          </div>
          <p>
          Java developer with a computer engineering degree and over 3 years of banking industry experience becoming one of the main SMEs for all bank projects interacting with ATM/POS transaction data. Skills in OOP, JavaScript, RESTful APIs, and GCP from University of Texas coding boot camp and Coursera certificates. Enjoys reverse engineering systems, processes, and applications leveraging the knowledge for future use. Extremely resourceful and detail orientated, with the ability to multitask and prioritize work items effectively alongside a team or individually.
          </p>
        </div>
      </Container>
    </>
  );
}

export default About;