import React from 'react';
import './Features.css';

const features = [
  {
    title: '0% Platform Fee',
    description: 'WhyDonate charges 0% commission. You only pay the payment processing costs for iDEAL, PayPal, Bancontact, Credit Card etc.',
  },
  {
    title: 'Customer Support',
    description: 'Need help? WhyDonate customer service is accessible through chat, email, or scheduled telephone appointments. The service operates seven days a week, from 9 AM – 5 PM Central European Time (CET).',
  },
  {
    title: 'Collecting Money Worldwide',
    description: 'Collect donations from all over the world. WhyDonate has multiple currencies, languages and payment methods.',
  },
  {
    title: 'Donor Management',
    description: 'The comprehensive dashboard provides a one-stop view of all your fundraisers, donor and payout data.',
  },
  {
    title: 'Donor Network',
    description: 'In addition to your own network, reach 500,000+ donors and 100,000+ visitors a month on WhyDonate.',
  },
  {
    title: 'Live within minutes',
    description: 'Create an account and start online fundraising within minutes.',
  },
  {
    title: 'Direct Payouts',
    description: 'Request an immediate payout of the donations, or wait for the automated monthly payout. WhyDonate pays out donations to all European SEPA countries.',
  },
  {
    title: 'Custom Branding',
    description: 'Add your own custom branding and content to fundraisers, donation forms and emails.',
  },
  {
    title: 'Security And Privacy',
    description: 'WhyDonate makes sure your donations and data are secure. The data is stored encrypted, and all payments are secured by licensed payment institutions.',
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-content">
        <h2>Fundraising Platform Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
