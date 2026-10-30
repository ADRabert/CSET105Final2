const questions = [
  { q: "What is the capital of Pennsylvania?", options: ["Albany", "Harrisburg", "Tallahassee", "Annapolis"], answer: 1 },
  { q: "Which planet is closest to the sun?", options: ["Mars", "Mercury", "Venus", "Jupiter"], answer: 1 },
  { q: "Which month has 28 days?", options: ["January", "April", "February", "All of them"], answer: 3 },
  { q: "What do you get when you mix red and yellow?", options: ["Green", "Orange", "Purple", "Brown"], answer: 1 },
  { q: "Which ocean is the largest?", options: ["Arctic", "Atlantic", "Pacific", "Indian"], answer: 2 },
  { q: "What is 2 + 2 * 2?", options: ["6", "8", "4", "10"], answer: 0 },
  { q: "What is the largest bone in the body?", options: ["Femur", "Tibia", "Metatarsals", "Scapula"], answer: 0 },
  { q: "How many months are in a year?", options: ["10", "12 ", "14", "6"], answer: 1 },
  { q: "What is the biggest animal on Earth?", options: ["Giant Squid", "Megalodon", "Blue Whale", "Whale Shark"], answer: 2 },
  { q: "What do bees make?", options: ["Butter", "Milk", "Cheese", "Honey"], answer: 3 }
];

let current = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").textContent = questions[current].q;
  const optionsLabel = document.getElementsByClassName("options");
  optionsLabel.innerHTML = "";
  let labelText = options.join(", ")
 optionsLabel.textContent = labelText
  questions[current].options.forEach((option, i) => {
    optionsLabel.textContent = option;
    optionsLabel.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) 
    score++;
  current++;
  if (current < questions.length) {
    loadQuestion();
  } 
  else{
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").textContent = `You scored ${score} out of ${questions.length}`;
  }
}

loadQuestion();