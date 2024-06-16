import React from 'react';
import './StepsToRaiseFunds.css';
import { FaArrowRight } from 'react-icons/fa';

const StepsToRaiseFunds = () => {
  return (
    <section id="steps" className="steps">
      <div className="steps-content">
      <div className='heading'>
        <h2>Raise Funds In 4 Easy Steps</h2></div>
        <div className="steps-list">
          <div className="step">
            <div className="step-box">
              <div className="step-content">
                <h3 className='headingColor'>Start A Fundraiser</h3>
                <p>Sign up on WhyDonate and create your fundraiser in minutes. You can register as an individual or organisation.</p>
              </div>
            </div>
            <FaArrowRight className="arrow-icon" />
          </div>
          <div className="step">
            <div className="step-box">
              <div className="step-content">
                <h3 className='headingColor'>Share Your Fundraiser</h3>
                <p>Share your fundraiser via Email, Facebook, WhatsApp and other social media channels to reach as many donors as possible.</p>
              </div>
            </div>
            <FaArrowRight className="arrow-icon" />
          </div>
          <div className="step">
            <div className="step-box">
              <div className="step-content">
                <h3 className='headingColor'>Receive The Donations</h3>
                <p>The donations are paid out weekly, monthly or directly on demand to your bank account.</p>
              </div>
            </div>
            <FaArrowRight className="arrow-icon" />
          </div>
          <div className="step">
            <div className="step-box">
              <div className="step-content">
                <h3 className='headingColor'>Thank Your Donors</h3>
                <p>Customise the automated “Thank You” email or send a personal message to your donors via the WhyDonate dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsToRaiseFunds;
