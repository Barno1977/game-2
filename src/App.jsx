import React, { useState } from 'react';
import FlagsGame from './components/FlagsGame';
import CapitalsGame from './components/CapitalsGame';
import SpaceGame from './components/SpaceGame';
import './App.css';


export default function App() {
  const [currentGame, setCurrentGame] = useState(null);

  
  function handleBack() {
    setCurrentGame(null);
  }

  return (
    <div className={`App ${currentGame || 'menu'}`}>
      {!currentGame && (
        <div className="main-menu">
          <h1 className="title">CHOOSE A GAME</h1>
          <div className="game-buttons">
            <div className="game-option">
              <img
                src="https://img.freepik.com/free-photo/global-globalization-world-map-environmental-concservation-concept_53876-124164.jpg?w=740"
                alt="Flags"
              />
              <button onClick={() => setCurrentGame('flags')} className="flags">
                FLAGS
              </button>
            </div>
            <div className="game-option">
              <img
                src="https://img.lovepik.com/png/20231111/world-globe-vector-cartoon-sticker_561875_wh860.png"
                alt="Capitals"
              />
              <button onClick={() => setCurrentGame('capitals')} className="capitals">
                CAPITALS
              </button>
            </div>
            <div className="game-option">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/1033914530/thumb/1.jpg"
                alt="Space"
              />
              <button onClick={() => setCurrentGame('space')} className="space">
                SPACE
              </button>
            </div>
          </div>
        </div>
      )}

      {currentGame === 'flags' && <FlagsGame onBack={handleBack} />}
      {currentGame === 'capitals' && <CapitalsGame onBack={handleBack} />}
      {currentGame === 'space' && <SpaceGame onBack={handleBack} />}
    </div>
  );
}