/*
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./sentiment.css"
const Sentiment = () => {
    


    return (

<section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
<div className="signin">
        <div className="content">  
                    
            <div className="gamification headers">
            <div className="sentiment-input">
        <input
          type="text"
          placeholder="Enter a stock symbol or name"
          value={stockInput}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Analyze Sentiment</button>
      </div>

      {sentimentResult && (
        <div className="sentiment-result">
          <h2>Sentiment Analysis Result</h2>
          <p>{sentimentResult}</p>
        </div>
      )}
            </div>
             
            </div>
        </div>
        
        </section>
    );
}

export default Sentiment;
*/

/*
import React, { useState } from 'react';
import axios from 'axios';

function Sentiment() {
  const [stockInput, setStockInput] = useState(''); // Define stockInput state
  const [sentimentResult, setSentimentResult] = useState('');

  const handleInputChange = (event) => {
    // Handle input field changes and update the stockInput state
    setStockInput(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Send a request to analyze sentiment using the stockInput
      const response = await axios.post('/sentiment', {
        stockInput,
      });

      // Extract sentiment result from the response
      const { sentimentResult } = response.data;

      // Update the sentimentResult state
      setSentimentResult(sentimentResult);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section>
      <div className="signin">
        <div className="content">
          <div className="gamification headers">
            <div className="sentiment-input">
              <input
                type="text"
                placeholder="Enter a stock symbol or name"
                value={stockInput}
                onChange={handleInputChange}
              />
              <button onClick={handleSubmit}>Analyze Sentiment</button>
            </div>

            {sentimentResult && (
              <div className="sentiment-result">
                <h2>Sentiment Analysis Result</h2>
                <p>{sentimentResult}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sentiment;
*/

/*
import React, { useState } from 'react';
import axios from 'axios';

function Sentiment() {
  const [sentimentResult, setSentimentResult] = useState('');
  const [showImage, setShowImage] = useState(false); // Initialize image visibility state
  const imageUrl = 'images/google.png'; // Set the relative path to the image

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/sentiment', {
        // You can send any necessary data to the server if needed
      });

      const { sentimentResult } = response.data;

      setSentimentResult(sentimentResult);

      // Show the image after receiving the response
      setShowImage(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section>
      <div className="signin">
        <div className="content">
          <div className="gamification headers">
            <div className="sentiment-input">
              <button onClick={handleSubmit}>Analyze Sentiment</button>
              {showImage && ( // Conditionally render the image only if showImage is true
                <img src={imageUrl} alt="Google Image" />
              )}
            </div>

            {sentimentResult && (
              <div className="sentiment-result">
                <h2>Sentiment Analysis Result</h2>
                <p>{sentimentResult}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sentiment;

*/

/*
import React, { useState } from 'react';
import axios from 'axios';

function Sentiment() {
  const [imageVisible, setImageVisible] = useState(true); // State to control image visibility
  const [sentimentResult, setSentimentResult] = useState('');

  const handleSubmit = async () => {
    try {
      // Send a request to analyze sentiment using the stockInput
      const response = await axios.post('/sentiment', {
        // You can send any necessary data to the server if needed
      });

      // Extract sentiment result from the response
      const { sentimentResult } = response.data;

      // Update the sentimentResult state
      setSentimentResult(sentimentResult);

      // Show the image when the button is clicked
      setImageVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section>
      <div className="signin">
        <div className="content">
          <div className="gamification headers">
            <div className="sentiment-input">
              <button onClick={handleSubmit}>Analyze Sentiment</button>
            </div>

            {imageVisible && (
              <div className="sentiment-image">
                <img src="/images/tesla.png" alt="Your Image" />
              </div>
            )}

            {sentimentResult && (
              <div className="sentiment-result">
                <h2>Sentiment Analysis Result</h2>
                <p>{sentimentResult}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sentiment;
*/

import React, { useState } from 'react';
import axios from 'axios';

function Sentiment() {
  const [imageVisible, setImageVisible] = useState(false); // Initially, image is not visible
  const [sentimentResult, setSentimentResult] = useState('');

  const handleSubmit = async () => {
    setImageVisible(true);
    try {
      // Send a request to analyze sentiment using the stockInput
      const response = await axios.post('/sentiment', {
        // You can send any necessary data to the server if needed
      });

      // Extract sentiment result from the response
      const { sentimentResult } = response.data;

      // Update the sentimentResult state
      setSentimentResult(sentimentResult);

      // Show the image when the button is clicked
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section>
      <div className="signin">
        <div className="content">
          <div className="gamification headers">
            <div className="sentiment-input">
              <button onClick={handleSubmit}>Analyze Sentiment</button>
            </div>

            {imageVisible && (
              <div className="sentiment-image">
                <img src="/images/tesla.png" alt="Your Image" />
                <p>The above graph represents sentiment analysis done on Tesla stock. Since the exponential moving average is currently above the threshold (0.2), we can say that the stock is performing well in the market and it is the right time to invest in this stock.</p>
              </div>
            )}

            {sentimentResult && (
              <div className="sentiment-result">
                <h2>Sentiment Analysis Result</h2>
                <p>{sentimentResult}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sentiment;
