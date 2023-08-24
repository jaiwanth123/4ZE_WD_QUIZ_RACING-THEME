const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
  const q= document.querySelector('.question');
  const a =document.querySelectorAll('.ap');
 const n=document.querySelector('.next');
  const a_text=document.querySelector('.a');
  const b_text=document.querySelector('.b');
  const c_text=document.querySelector('.c');
  const d_text=document.querySelector('.d');


let currentQuiz=0;
let score=0;

const getSelected = () => {
  document.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      var buttonClass = event.target.classList;
      return buttonClass;

    }
  });
};


const loadQuiz = () => {
  
  const currentQuizData = quizData[currentQuiz];
  q.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = ~
            <h2>Your mark  ${score}/${ quizData.length } questions correctly</h2>
            <button onclick="history.go(0)">Play Again </button>
        ~;
    }
  }
});
 
 
 