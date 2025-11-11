import React, { useEffect } from 'react';
import './About.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: true,     // animate only once
    });
  }, []);

  return (
    <div className="about-page py-5">
      <Container>
        {/* <h2 className="text-center fw-bold mb-5 text-primary" data-aos="fade-up">
          About Mahatma Vidya Mandir
        </h2> */}

        <Row className="g-4 mb-4">
          <Col xs={12}>
            <Card className="about-card shadow-lg school-card" data-aos="fade-right">
              <Card.Body>
                <Card.Title className="fw-bold fs-3 mb-3 text-primary">Our School</Card.Title>
                <Card.Text className="text-muted fs-5">
                  <strong>MAHATMA VIDYA MANDIR SOLAPUR</strong> was established in 1955 and is managed by the Pvt. Aided.
                  Located in an urban area of Solapur, Maharashtra, it offers education from Grades 1 to 7, including pre-primary.
                  Marathi is the medium of instruction. The school features a well-maintained building, electric facilities,
                  hygienic water, separate toilets for boys and girls, a playground, a library with 300 books, and 12 functional computers.
                  Mid-day meals are prepared on the premises to ensure students' well-being.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <Card className="about-card shadow vision-card" data-aos="fade-up">
              <Card.Body>
                <Card.Title className="fw-bold fs-3 text-success">Our Vision</Card.Title>
                <Card.Text className="text-muted fs-5">
                  To empower young minds through holistic education, fostering intellectual, emotional, and social growth, and
                  nurturing responsible citizens who contribute meaningfully to society.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="about-card shadow mission-card" data-aos="fade-up" data-aos-delay="200">
              <Card.Body>
                <Card.Title className="fw-bold fs-3 text-danger">Our Mission</Card.Title>
                <Card.Text className="text-muted fs-5">
                  To provide a nurturing learning environment, promote curiosity and creativity, and deliver quality education
                  leveraging modern technology while embracing our cultural heritage.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
