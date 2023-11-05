import React from "react";
import TradingViewWidget from "./TradingViewWidget"; // Import the TradingViewWidget component
import "./chart.css";


const Home = () => {
  return (<div>
    <div className="tradingview-container">
        <TradingViewWidget />
      </div>
      <div className="">
        <div className="content">
          <div className="gamification headers">Scenarios</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
