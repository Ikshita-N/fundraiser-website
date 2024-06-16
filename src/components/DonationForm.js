import React, { useState } from 'react';
import './DonationForm.css';

const DonationForm = ({ web3, accounts }) => {
  const [amount, setAmount] = useState('');

  const handleDonate = async () => {
    if (!web3) {
      alert('Web3 not initialized');
      return;
    }

    const donationAmount = web3.utils.toWei(amount, 'ether');
    const recipientAddress = '0x...'; // Replace with your fundraiser's Ethereum address

    try {
      const txHash = await web3.eth.sendTransaction({
        from: accounts[0],
        to: recipientAddress,
        value: donationAmount
      });
      console.log('Transaction Hash:', txHash);
      alert('Donation successful!');
    } catch (error) {
      console.error('Error donating:', error);
      alert('Failed to donate');
    }
  };

  return (
    <div className="donation-form">
      <h3>Make a Donation</h3>
      <input 
        type="text" 
        placeholder="Enter donation amount (ETH)" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDonate}>Donate</button>
    </div>
  );
}

export default DonationForm;
