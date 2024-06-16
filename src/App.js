import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TrendingCampaigns from './components/TrendingCampaigns';
import StepsToRaiseFunds from './components/StepsToRaiseFunds';
import StartFundraising from './components/StartFundraising';
import Features from './components/Features';
import Footer from './components/Footer';
import DonationForm from './components/DonationForm';
import Web3 from 'web3';

function App() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          const accounts = await web3Instance.eth.getAccounts();
          setWeb3(web3Instance);
          setAccounts(accounts);
        } catch (error) {
          console.error('User denied account access');
        }
      } else if (window.web3) {
        const web3Instance = new Web3(window.web3.currentProvider);
        const accounts = await web3Instance.eth.getAccounts();
        setWeb3(web3Instance);
        setAccounts(accounts);
      } else {
        console.log('No Ethereum provider detected');
      }
    };
    
    initWeb3();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <TrendingCampaigns />
      <StepsToRaiseFunds />
      <StartFundraising />
      <Features />
      <DonationForm web3={web3} accounts={accounts} />
      <Footer />
    </div>
  );
}

export default App;
