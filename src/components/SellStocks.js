// SellStocks.js
import React, { useState } from 'react';

function SellStocks({ virtualCurrency, setVirtualCurrency }) {
  const [stocksToSell, setStocksToSell] = useState(0);

  const handleSellStocks = () => {
    // Calculate the revenue from selling stocks and add it to the virtual currency balance
    const revenue = stocksToSell * 176; // Calculate the revenue based on the stock price
    // Update the user's virtual stock portfolio
    setVirtualCurrency(virtualCurrency + revenue);
  }

  return (
    <div>
      <h3>Sell Stocks</h3>
      <input
        type="number"
        value={stocksToSell}
        onChange={(e) => setStocksToSell(parseInt(e.target.value))}
      />
      <button onClick={handleSellStocks}>Sell</button>
    </div>
  );
}

export default SellStocks;
