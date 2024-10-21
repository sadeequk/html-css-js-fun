const quizQuestions = [
  {
    question: "Which language is used to style web pages?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "Python",
    correct: "b",
  },
  {
    question: "What does HTTP stand for?",
    a: "HyperText Transfer Protocol",
    b: "HighText Transfer Protocol",
    c: "HyperTransfer Text Protocol",
    d: "HyperTransfer Protocol",
    correct: "a",
  },
  {
    question: "Which language is used for web development?",
    a: "PHP",
    b: "Python",
    c: "JavaScript",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Which HTML element do we use for the largest heading?",
    a: "<h1>",
    b: "<h3>",
    c: "<h6>",
    d: "<h2>",
    correct: "a",
  },
  {
    question: "Which company developed JavaScript?",
    a: "Mozilla",
    b: "Netscape",
    c: "Microsoft",
    d: "Google",
    correct: "b",
  },
  {
    question: "What does SQL stand for?",
    a: "Structured Query Language",
    b: "Structured Question Language",
    c: "Stylish Query Language",
    d: "Statements Query Language",
    correct: "a",
  },
  {
    question: "What is a common data structure in programming?",
    a: "Array",
    b: "Python",
    c: "HTTP",
    d: "XML",
    correct: "a",
  },
  {
    question: "Which of these is a Python framework?",
    a: "Laravel",
    b: "React",
    c: "Django",
    d: "Vue",
    correct: "c",
  },
  {
    question: "What year was HTML first introduced?",
    a: "1993",
    b: "1991",
    c: "1990",
    d: "1989",
    correct: "b",
  },
  {
    question: "What is Git used for?",
    a: "Web Development",
    b: "Version Control",
    c: "Database Management",
    d: "Graphics Design",
    correct: "b",
  },
];

const quizBox = document.getElementById("quizBox");
const optionElements = document.querySelectorAll(".quizOption");
const quizQuestionElement = document.getElementById("quizQuestion");
const optionA_text = document.getElementById("optionA_text");
const optionB_text = document.getElementById("optionB_text");
const optionC_text = document.getElementById("optionC_text");
const optionD_text = document.getElementById("optionD_text");
const submitQuizButton = document.getElementById("submitQuiz");

let currentQuizIndex = 0;
let quizScore = 0;

const deselectQuizOptions = () => {
  optionElements.forEach((option) => (option.checked = false));
};

const getSelectedOption = () => {
  let selectedOption;
  optionElements.forEach((optionElement) => {
    if (optionElement.checked) selectedOption = optionElement.id;
  });
  return selectedOption;
};

const loadQuizQuestion = () => {
  deselectQuizOptions();
  const currentQuizQuestion = quizQuestions[currentQuizIndex];
  quizQuestionElement.innerText = currentQuizQuestion.question;
  optionA_text.innerText = currentQuizQuestion.a;
  optionB_text.innerText = currentQuizQuestion.b;
  optionC_text.innerText = currentQuizQuestion.c;
  optionD_text.innerText = currentQuizQuestion.d;
};

loadQuizQuestion();

submitQuizButton.addEventListener("click", () => {
  const selectedOption = getSelectedOption();
  if (selectedOption) {
    if (selectedOption === quizQuestions[currentQuizIndex].correct) quizScore++;
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) loadQuizQuestion();
    else {
      quizBox.innerHTML = `
            <h2>You answered ${quizScore}/${quizQuestions.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
