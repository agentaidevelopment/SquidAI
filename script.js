const dilemmas = [
  {
    question: "Would you betray a friend to survive?",
    options: ["Yes", "No"]
    },
  {
    question: "Would you take someone else's turn if it meant you lived?",
    options: ["Yes", "No"]
    },
  {
    question: "Would you risk everything for a loved one?",
    options: ["Yes", "No"]
    },
  {
    question: "Would you let a stranger die to save yourself?",
    options: ["Yes", "No"]
    },
  {
    question: "How would you spend a billion dollars?",
    options: ["Invest it", "Give it away", "Spend it all"]
    },
  {
    question: "Who would you save in a life-or-death situation?",
    options: ["Yourself", "A stranger", "No one"]
    }
];

let currentDilemmaIndex = 0;

function startGame() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  showDilemma();
}

function showDilemma() {
  if (currentDilemmaIndex >= dilemmas.length) {
    alert("Congratulations! You've won SquidAI's game.");
    return;
  }

  const dilemma = dilemmas[currentDilemmaIndex];
  document.getElementById("dilemma").textContent = dilemma.question;

  const buttonContainer = document.querySelector(".button-container");
  buttonContainer.innerHTML = ""; // Clear previous buttons

  dilemma.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => answer(option);
    buttonContainer.appendChild(button);
  });
}

function answer(option) {
  const randomOutcome = Math.random() < 0.5; // Randomly determine correct/incorrect
  if (randomOutcome) {
    currentDilemmaIndex++;
    showDilemma();
  } else {
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("death-screen").classList.remove("hidden");
  }
}

function resurrect() {
  window.location.href = "https://yoursite.com"; // Replace with your actual URL
}