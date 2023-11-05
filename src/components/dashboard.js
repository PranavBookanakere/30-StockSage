import React, { useState } from "react";
import axios from 'axios';
import "./dashboard.css"

const Dashboard = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(5).fill('')); // Initialize an array to store user answers

    const questions = [
        {
            question: "Scenario: You see a share's price increasing rapidly. Question: What's the term for a rapid price increase?",
            answer: "Rally",
        },
        {
            question: "Scenario: You're considering buying multiple shares. Question: What's the total value of all your shares?",
            answer: "Portfolio",
        },
        {
            question: "Scenario: You're observing overall market performance. Question: What's an indicator for market performance?",
            answer: "Index",
        },
        {
            question: "Scenario: You receive a portion of a company's profits. Question: What's this distribution called?",
            answer: "Dividend",
        },
        {
            question: "Scenario: You're considering a highly volatile investment. Question: What's the term for this type of investment?",
            answer: "Risky",
        },
    ];

    const handleAnswerSubmit = (answer) => {
        if (answer === questions[currentQuestion].answer) {
            setUserAnswers((prevAnswers) => {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[currentQuestion] = answer;
                return updatedAnswers;
            });
            if (currentQuestion < 4) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                alert("Congratulations! You have completed the quiz.");
            }
        } else {
            alert("Incorrect answer. Try again.");
        }
    };
    


    return (

<section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
<div className="signin">
            <div className="content">  
                    
            <div className="gamification headers">
                {currentQuestion < 5 && (
                    <div className="question">
                        <p>{questions[currentQuestion].question}</p>
                        <input id="q"
                            type="text"
                            value={userAnswers[currentQuestion]}
                            onChange={(e) =>
                                setUserAnswers((prevAnswers) => {
                                    const updatedAnswers = [...prevAnswers];
                                    updatedAnswers[currentQuestion] = e.target.value;
                                    return updatedAnswers;
                                })
                            }
                        />
                        <button  className="dashbutton" onClick={() => handleAnswerSubmit(userAnswers[currentQuestion])}>
                            {currentQuestion < 4 ? 'Next' : 'Finish'}
                        </button>
                    </div>
                )}
            </div>
             
            </div>
        </div>
        
        </section>
    );
}

export default Dashboard;