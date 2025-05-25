import React, { useState } from 'react';
import spaceData from '../data/space';
import './SpaceGame.css'; // Подключаем стили

export default function SpaceGame({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = spaceData[currentIndex];

  function handleAnswer(selected) {
    if (selected === question.correct) {
      setScore(score + 1);
    }
    if (currentIndex + 1 < spaceData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  }

  function getRank(score) {
    if (score <= 3) return '🛰️ Космический новичок';
    if (score <= 6) return '🚀 Исследователь орбиты';
    if (score <= 8) return '🪐 Звёздный знаток';
    return '👨‍🚀 Космос-гуру';
  }

  if (showResult) {
    return (
      <div className="result-container">
        <h2>Результат: {score} из {spaceData.length}</h2>
        <p className="rank">Ваш уровень: <strong>{getRank(score)}</strong></p>
        <button className="back-button" onClick={onBack}>🔙 Назад в меню</button>
      </div>
    );
  }

  return (
    <div className="game-container">
      <h2>Вопрос {currentIndex + 1} из {spaceData.length}</h2>
      <p>{question.question}</p>
      <div className="options">
        {question.options.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>{option}</button>
        ))}
      </div>
      <button className="back-button" onClick={onBack}>🔙 Назад в меню</button>
    </div>
  );
}
