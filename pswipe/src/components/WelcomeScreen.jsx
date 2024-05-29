import React from 'react';
const WelcomeScreen = ({ onStart }) => {
    return (
      <div className="welcome-screen">
        <div className="card border">
          <h2>How to Play PokeSwipe</h2>
          <p>Pokemon Appears One at a Time</p>
          <p>Choose "Like" or "Dislike"</p>
          <p>Build Your Favourite Team</p>
          <button className="start-button" onClick={onStart}>Let's Go!</button>
        </div>
      </div>
    );
  };
  
  export default WelcomeScreen;