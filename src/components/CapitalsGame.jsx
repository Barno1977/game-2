import React, { useState } from 'react';
import capitalsData from '../data/capitals';
import './CapitalsGame.css'; // Подключаем стили (ниже создадим)

export default function CapitalsGame({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = capitalsData[currentIndex];

  function handleAnswer(selected) {
    if (selected === question.correct) {
      setScore(score + 1);
    }
    if (currentIndex + 1 < capitalsData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  }

  function getRank(score) {
    if (score <= 3) return '📘 Новичок по столицам';
    if (score <= 6) return '📚 Знающий путешественник';
    if (score <= 8) return '🧠 Почти геоэксперт';
    return '🏆 Гуру столиц мира';
  }

  if (showResult) {
    return (
      <div className="result-container">
        <h2>Результат: {score} из {capitalsData.length}</h2>
        <p className="rank">Ваш уровень: <strong>{getRank(score)}</strong></p>
        <button className="back-button" onClick={onBack}>🔙 Назад в меню</button>
      </div>
    );
  }

  return (
    <div className="game-container">
      <h2>Вопрос {currentIndex + 1} из {capitalsData.length}</h2>
      <p>Страна: <b>{question.country}</b></p>
      <div className="options">
        {question.options.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>{option}</button>
        ))}
      </div>
      <button className="back-button" onClick={onBack}>🔙 Назад в меню</button>
    </div>
  );
}
