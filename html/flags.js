const questions = [
  {
    flag: "https://flagcdn.com/w320/fr.png", // Франция
    options: ["Франция", "Германия", "Италия", "Испания"],
    answer: "Франция"
  },
  {
    flag: "https://flagcdn.com/w320/jp.png", // Япония
    options: ["Китай", "Япония", "Корея", "Тайланд"],
    answer: "Япония"
  },
  {
    flag: "https://flagcdn.com/w320/it.png", // Италия
    options: ["Италия", "Мексика", "Венгрия", "Болгария"],
    answer: "Италия"
  },
  {
    flag: "https://flagcdn.com/w320/de.png", // Германия
    options: ["Бельгия", "Германия", "Нидерланды", "Австрия"],
    answer: "Германия"
  },
  {
    flag: "https://flagcdn.com/w320/ru.png", // Россия
    options: ["Словакия", "Сербия", "Россия", "Чехия"],
    answer: "Россия"
  },
  {
    flag: "https://flagcdn.com/w320/gb.png", // Великобритания
    options: ["Австралия", "Новая Зеландия", "Великобритания", "Канада"],
    answer: "Великобритания"
  },
  {
    flag: "https://flagcdn.com/w320/br.png", // Бразилия
    options: ["Боливия", "Бразилия", "Перу", "Аргентина"],
    answer: "Бразилия"
  },
  {
    flag: "https://flagcdn.com/w320/in.png", // Индия
    options: ["Индонезия", "Индия", "Пакистан", "Бангладеш"],
    answer: "Индия"
  },
  {
    flag: "https://flagcdn.com/w320/us.png", // США
    options: ["Канада", "Австралия", "США", "Англия"],
    answer: "США"
  },
  {
    flag: "https://flagcdn.com/w320/kr.png", // Южная Корея
    options: ["Китай", "Япония", "Сингапур", "Южная Корея"],
    answer: "Южная Корея"
  }
];

let currentQuestion = 0;
let score = 0;

const container = document.getElementById("game-container");

function showQuestion() {
  const q = questions[currentQuestion];
  container.innerHTML = `
    <img src="${q.flag}" alt="Флаг" width="200"><br><br>
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
  if (score === 10) message = "Ты — знаток флагов!";
  else if (score >= 7) message = "Отлично!";
  else if (score >= 4) message = "Неплохо, но можно лучше.";
  else message = "Попробуй ещё раз!";

  container.innerHTML = `
    <h2>Игра окончена!</h2>
    <p>Ты набрал ${score} из 10.</p>
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
