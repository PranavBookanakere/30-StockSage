import React, { useState} from 'react';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Import your home page component
import Home from "./components/home"; // Import the destination page component
import TradingViewWidget from './components/chart';
import Dashboard from './components/dashboard';
import VirtualWallet from './components/VirtualWallet';
import BuyStocks from './components/BuyStocks';
import SellStocks from './components/SellStocks';
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import Sentiment from "./components/sentiment";

function App() {
  const [virtualCurrency, setVirtualCurrency] = useState(100000); // Initialize with an initial balance
  const [user] = useAuthState(auth);

  return (
    <div>
     <NavBar/>

    <Router>
      <Routes>
       
        {!user ? (
           <Route path="/" element={<Login />} />
           
      ) : (
        <>
        
        <Route path="/chart" element={<TradingViewWidget/> } />
        <Route path="/dashboard" element={<Dashboard/> } />
        <Route path="/chatbox" element={<ChatBox/> } />
        <Route path="/sentiment" element={<Sentiment/> } />

        </>
      )}

      <Route path="/home" element={<Home/> } />
        
      </Routes>
    </Router>

    </div>
  );
}

export default App;
