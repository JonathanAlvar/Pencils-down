//question array and variable

var startBtn = document.getElementById('start-button');
var nextBtn = document.getElementById('next-button');
var score = 0;
var quizContainerEl = document.getElementById('quiz');
var _question = document.getElementById('questions');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var timer = document.getElementById('timer');
var submitBtn = document.getElementById('submit-button');
var initials = document.getElementById('initials');
//var currentQuestion = 0;



//Push questions to HTML
startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", nextQuestion)



//start quiz
function startQuiz() {
    console.log("Start")
    currentQuestion = 0
    nextQuestion()
}

function nextQuestion() {
    console.log("Next") 
    questions.textContent = questions.questions;
    btn1.textContent = questions.button1;
    btn2.textContent = questions.button2;
    btn3.textContent = questions.button3;
    
}
console.log(nextQuestion)

function viewQuestion(questions){
    console.log("question")
}

function selctionOption() {
    console.log("options")
}  



//Questions
var questions = [
    {
        question: "Who created JavaScript?",
        option1: "A. Microsoft",
        option2: "B. Oracle",
        option3: "C. Netscape",
        correctAnswer: "3"
    },
    {
        question: "Is JavaScript a front-end, back-end, or full-stack programming language?",
        option1: "A. Front-end",
        option2: "B. Back-end",
        option3: "C. Full-stack",
        correctAnswer: "3"
    },
    {
        question: "What is the function for creating a prompt box?",
        option1: "A. Alert()",
        option2: "B. prompt()",
        option3: "C. confirm()",
        correctAnswer: "2"
    },
    {
        question: "Is JavaScript the same as Java?",
        option1: "Yes",
        option2: "No",
        option3: "I don't know",
        correctAnswer: "2"
    }]
console.log(questions)

//view high scores