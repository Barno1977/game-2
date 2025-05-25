const questions = [
  {
    question: "Столица Франции?",
    options: ["Париж", "Берлин", "Рим", "Мадрид"],
    answer: "Париж"
  },
  {
    question: "Столица Японии?",
    options: ["Пекин", "Токио", "Сеул", "Осака"],
    answer: "Токио"
  },
  {
    question: "Столица Италии?",
    options: ["Милан", "Неаполь", "Рим", "Турин"],
    answer: "Рим"
  },
  {
    question: "Столица Германии?",
    options: ["Берлин", "Франкфурт", "Мюнхен", "Гамбург"],
    answer: "Берлин"
  },
  {
    question: "Столица России?",
    options: ["Санкт-Петербург", "Новосибирск", "Москва", "Казань"],
    answer: "Москва"
  },
  {
    question: "Столица Бразилии?",
    options: ["Рио-де-Жанейро", "Сан-Паулу", "Бразилиа", "Сальвадор"],
    answer: "Бразилиа"
  },
  {
    question: "Столица Индии?",
    options: ["Мумбаи", "Бангалор", "Нью-Дели", "Ченнай"],
    answer: "Нью-Дели"
  },
  {
    question: "Столица США?",
    options: ["Вашингтон", "Нью-Йорк", "Лос-Анджелес", "Чикаго"],
    answer: "Вашингтон"
  },
  {
    question: "Столица Великобритании?",
    options: ["Лондон", "Манчестер", "Бирмингем", "Эдинбург"],
    answer: "Лондон"
  },
  {
    question: "Столица Китая?",
    options: ["Шанхай", "Гуанчжоу", "Пекин", "Ханчжоу"],
    answer: "Пекин"
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
  if (score === 10) message = "Ты — мастер географии!";
  else if (score >= 7) message = "Хороший результат!";
  else if (score >= 4) message = "Есть куда расти.";
  else message = "Попробуй ещё раз!";

  container.innerHTML = `
    <h2>Игра завершена!</h2>
    <p>Ты угадал ${score} из 10 столиц.</p>
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
