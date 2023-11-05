// VirtualWallet.js
import React from 'react';

function VirtualWallet({ virtualCurrency }) {
  return (
    <div>
      <h2>Virtual Wallet</h2>
      <p>Virtual Currency Balance: {virtualCurrency}</p>
    </div>
  );
}

export default VirtualWallet;
