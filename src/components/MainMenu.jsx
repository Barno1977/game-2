import React from 'react';
import './MainMenu.css';

export default function MainMenu({ onSelectGame }) {
  return (
    <div className="main-menu">
      <h1>Choose a Game</h1>
      <div className="game-buttons">
        <div className="game-button">
          <img src="https://cdn-icons-png.flaticon.com/512/197/197484.png" alt="Flags" />
          <button onClick={() => onSelectGame('flags')}>FLAGS</button>
        </div>
        <div className="game-button">
          <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" alt="Capitals" />
          <button onClick={() => onSelectGame('capitals')}>CAPITALS</button>
        </div>
        <div className="game-button">
          <img src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png" alt="Space" />
          <button onClick={() => onSelectGame('space')}>SPACE</button>
        </div>
      </div>
    </div>
  );
}
