//question array and variable
var startButton = document.getElementById("#start");
var questionsEl = document.getElementById("#quiz");
var secondsDisplay = document.getElementById("#question");
var timeEl = document.getElementById("#counter");
var option1 = document.getElementById("#option1");
var option2 = document.getElementById("#option2");
var option3 = document.getElementById("#option3");

var questions = [
    {
        question: "Wo created JavaScript?",
        option1: "A. Microsoft",
        option2: "B. Oracle",
        option3: "C. Netscape",
        correctAnswer: "C. Netscape"
    },
    {
        question: "Is JavaScript a front-end, back-end, or full-stack programming language?",
        option1: "A. Front-end",
        option2: "B. Back-end",
        option3: "C. Full-stack",
        correctAnswer: "C. Full-stack"
    },
    {
        question: "What is the function for creating a prompt box?",
        option1: "A. Alert()",
        option2: "B. prompt()",
        option3: "C. confirm()",
        correctAnswer: "B. prompt()"
    },
    {
        question: "Is JavaScript the same as Java?",
        option1: "Yes",
        option2: "No",
        option3: "I don't know",
        correctAnswer: "No"
    }]

var startSeconds = 60;
var secondsElapsed = 0;
var questions = -1;
var userScore = 0;



//Push questions to HTML
var firstQuestion = question.length - 1;
var askQuestion = 0;

function renderQuestion() {
    var ques = questions[askQuestions];
    question.innerHTML = "<p>"+ q.question +"</p>";
    option1.innerHTML = q.option1;
    option2.innerHTML = q.option2;
    option3.innerHTML = q.option3;
}

console.log(renderQuestion)

//starting timer and ending timer
var countDown
function startQuiz() {
    countDown = setInterval(startingTimer, 1000);
    function startingTimer() {
        document.getElementById("time").innerHTML = i--;
        if (i == 0) {
            clearInterval(countDown)
        }
    }

}

startButton.addEventListener("click", startQuiz)

//Generate user score

//view high scores