const questions = [
  {
    question: "Какая планета самая большая в Солнечной системе?",
    options: ["Юпитер", "Сатурн", "Земля", "Нептун"],
    answer: "Юпитер"
  },
  {
    question: "Какой спутник вращается вокруг Земли?",
    options: ["Фобос", "Луна", "Титан", "Европа"],
    answer: "Луна"
  },
  {
    question: "Сколько планет в Солнечной системе?",
    options: ["8", "9", "7", "10"],
    answer: "8"
  },
  {
    question: "Какая планета ближе всего к Солнцу?",
    options: ["Меркурий", "Венера", "Марс", "Земля"],
    answer: "Меркурий"
  },
  {
    question: "Что такое Солнце?",
    options: ["Планета", "Спутник", "Комета", "Звезда"],
    answer: "Звезда"
  },
  {
    question: "Как называется галактика, в которой находится Земля?",
    options: ["Туманность Андромеды", "Млечный Путь", "Большое Магелланово Облако", "Киль"],
    answer: "Млечный Путь"
  },
  {
    question: "Кто был первым человеком в космосе?",
    options: ["Нил Армстронг", "Юрий Гагарин", "Алан Шепард", "Алексей Леонов"],
    answer: "Юрий Гагарин"
  },
  {
    question: "Какая планета известна своими кольцами?",
    options: ["Сатурн", "Юпитер", "Уран", "Нептун"],
    answer: "Сатурн"
  },
  {
    question: "Как называется самый большой вулкан в Солнечной системе?",
    options: ["Мауналуа", "Олимп", "Везувий", "Этна"],
    answer: "Олимп"
  },
  {
    question: "На какой планете самая высокая температура поверхности?",
    options: ["Венера", "Меркурий", "Марс", "Юпитер"],
    answer: "Венера"
  }
];

let currentQuestion = 0;
let score = 0;

const container = document.getElementById("game-container");

function showQuestion() {
  const q = questions[currentQuestion];
  container.innerHTML = `
    <h2>${q.question}</h2><br>
    ${q.options.map(opt => `
      <button onclick="answer('${opt}')">${opt}</button>
    `).join("<br><br>")}
  `;
}

function answer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let message = "";
  if (score === 10) message = "Ты — эксперт по космосу!";
  else if (score >= 7) message = "Отличный результат!";
  else if (score >= 4) message = "Неплохо, но можно лучше.";
  else message = "Попробуй снова — космос ждёт тебя!";

  container.innerHTML = `
    <h2>Игра завершена!</h2>
    <p>Ты ответил правильно на ${score} из 10 вопросов.</p>
    <p>${message}</p>
    <button onclick="restart()">Играть снова</button>
  `;
}

function restart() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

showQuestion();
