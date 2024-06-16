import React from 'react';
import './StartFundraising.css'; // Ensure this is imported after Bootstrap's CSS
import { Container, Row, Col } from 'react-bootstrap';

const StartFundraising = () => {
  return (
    <section id="start" className="start">
      <Container>
        <div className="start-content">
          <h2 className="text-center mb-5 headingColor">Start Fundraising For</h2>
          <Row className="justify-content-center">
            <Col sm={4} className="text-center mb-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/030/531/273/original/eps10-inclusion-social-equity-line-art-icon-help-or-support-employee-gender-equality-community-care-sign-age-and-culture-diversity-people-group-save-illustration-orange-thin-line-symbol-vector.jpg"
                alt="For Yourself"
                className="img-fluid img-custom"
                style={{ height: '150px' }}
              />
              <h3 className="mb-3">For Yourself</h3>
              <p>
                Donations are paid directly to you so you can use them for your designated purpose.
              </p>
              <button className="cta-button">
                Start Fundraiser
              </button>
            </Col>
            <Col sm={4} className="text-center mb-4">
              <img
                src="https://thumbs.dreamstime.com/b/print-137772811.jpg"
                alt="For Someone Else"
                className="img-fluid img-custom"
                style={{ height: '150px' }}
              />
              <h3 className="mb-3">For Someone Else</h3>
              <p>
                Start a fundraiser for someone else and have the donations disbursed directly to them, or distribute them yourself.
              </p>
              <button className="cta-button">
                Start Fundraiser
              </button>
            </Col>
            <Col sm={4} className="text-center mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJz0IeeYEvBBk7dIsJCsYQsgLI3eTwCNoVA&s"
                alt="For Charity"
                className="img-fluid img-custom"
                style={{ height: '150px' }}
              />
              <h3 className="mb-3">For Charity</h3>
              <p>
                Start a fundraiser for a charity or individual and raise money to achieve your goals.
              </p>
              <button className="cta-button">
                Start Fundraiser
              </button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default StartFundraising;
