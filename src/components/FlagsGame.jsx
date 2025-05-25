import React, { useState } from 'react';
import flagsData from '../data/flags';
import './FlagsGame.css'; // Подключаем стили (создадим ниже)

export default function FlagsGame({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = flagsData[currentIndex];

  function handleAnswer(selected) {
    if (selected === question.correct) {
      setScore(score + 1);
    }
    if (currentIndex + 1 < flagsData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  }

  function getRank(score) {
    if (score <= 3) return '🌱 Новичок в географии';
    if (score <= 6) return '🧭 Знаток мира';
    if (score <= 8) return '🎓 Почти эксперт';
    return '🌍 Гуру флагов';
  }

  if (showResult) {
    return (
      <div className="result-container">
        <h2>Результат: {score} из {flagsData.length}</h2>
        <p className="rank">Ваш уровень: <strong>{getRank(score)}</strong></p>
        <button className="back-button" onClick={onBack}>🔙 Назад в меню</button>
      </div>
    );
  }

  return (
    <div className="game-container">
      <h2>Вопрос {currentIndex + 1} из {flagsData.length}</h2>
      <img src={question.flag} alt="Флаг" className="flag-image" />
      <div className="options">
        {question.options.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>{option}</button>
        ))}
      </div>
      <button className="back-button" onClick={onBack}>🔙 Назад в меню</button>
    </div>
  );
}
