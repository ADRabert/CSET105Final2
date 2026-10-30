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
let current = 0, score = 0;
const loadQuestion = () => {
	document.getElementById("questionCounter").textContent = "Question " + Number(current + 1) + " of " + questions.length;
  document.getElementById("question").textContent = questions[current].q;
  const optionsLabel = document.getElementsByClassName("option");
  questions[current].options.forEach((option, i) => {
		const optionsText = document.createElement("label");
    optionsText.for = "radio", optionsText.textContent = option;
    optionsLabel[i].appendChild(optionsText);
  });
}, checkAnswer = (selected) => {
	document.getElementById("submit").remove();
	document.getElementsByName("radio")[selected].checked = false;
	const optionsLabel = document.getElementsByClassName("option");
	for (let optionLabel of optionsLabel) optionLabel.getElementsByTagName("label")[0].remove();
  if (selected == questions[current].answer) score++;
  if (++current < questions.length) loadQuestion();
  else {
		const resultField = document.createElement("div");
		resultField.id = "result";
		const resultText = document.createElement("h1");
		resultText.textContent = "You scored " + score + " out of " + questions.length + ".";
		resultField.appendChild(resultText);
		const resultRedo = document.createElement("button");
		resultRedo.id = "restart", resultRedo.textContent = "Restart";
		resultRedo.setAttribute("onclick", "location.reload()");
		resultField.appendChild(resultRedo);
		document.getElementById("container").remove();
		document.body.appendChild(resultField);
  }
}, activateSubmit = (selected) => {
	const submit = document.getElementById("submit");
	if (!submit) {
		const submitBtn = document.createElement("button");
		submitBtn.id = "submit", submitBtn.textContent = "Submit", submitBtn.value = selected;
		submitBtn.setAttribute("onclick", "checkAnswer(this.value)");
		document.getElementById("container").append(submitBtn);
	} else submit.value = selected;
}
loadQuestion();