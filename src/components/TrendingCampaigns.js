import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './TrendingCampaigns.css';

const trendingCampaigns = [
  {
    image: 'https://whydonate.com/cdn-cgi/imagedelivery/_0vgnXOEIHPwLg2E52a7gg/production/fundraiser_header/adabb87360c34c3f/public',
    title: 'John Doe',
    description: 'John is suffering from a rare disease and needs urgent medical treatment.',
    fundsRaised: '$10,000',
    goal: '$20,000',
  },
  {
    image: 'https://kffhealthnews.org/wp-content/uploads/sites/2/2016/08/elderly-disability-11.jpg?w=770',
    title: 'Jane Smith',
    description: 'Jane requires surgery for a critical condition.',
    fundsRaised: '$15,000',
    goal: '$25,000',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBeQxPIBbBAs-fHCCz5uiWPPa2WC_7r96Qw&s',
    title: 'Tina Johnson',
    description: 'Tina needs help with long-term brain nerve dysfunctionality expenses.',
    fundsRaised: '$5,000',
    goal: '$10,000',
  },
];

const TrendingCampaigns = () => {
  return (
    <section id="trending" className="trending">
      <Container>
        <div className="trending-content">
          <h2 className="trending-heading">Trending Fundraising Campaigns</h2>
          <Carousel>
            {trendingCampaigns.map((campaign, index) => (
              <Carousel.Item key={index}>
                <div className="image-container">
                  <img
                    className="d-block w-100"
                    src={campaign.image}
                    alt={campaign.title}
                  />
                </div>
                <Carousel.Caption className="carousel-caption-below">
                  <h3>{campaign.title}</h3>
                  <p>{campaign.description}</p>
                  <p>
                    <strong>Funds Raised: </strong>{campaign.fundsRaised} / {campaign.goal}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default TrendingCampaigns;
