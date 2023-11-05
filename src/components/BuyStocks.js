// BuyStocks.js
import React, { useState } from 'react';

function BuyStocks({ virtualCurrency, setVirtualCurrency }) {
  const [stocksToBuy, setStocksToBuy] = useState(0);

  const handleBuyStocks = () => {
    // Calculate the cost of the stocks and deduct it from the virtual currency balance
    const cost = stocksToBuy * 176; // Calculate the cost based on the stock price
    if (virtualCurrency >= cost) {
      setVirtualCurrency(virtualCurrency - cost);
      // Update the user's virtual stock portfolio
    } else {
      // Handle insufficient funds
    }
  }

  return (
    <div>
      <h3>Buy Stocks</h3>
      <input
        type="number"
        value={stocksToBuy}
        onChange={(e) => setStocksToBuy(parseInt(e.target.value))}
      />
      <button onClick={handleBuyStocks}>Buy</button>
    </div>
  );
}

export default BuyStocks;
