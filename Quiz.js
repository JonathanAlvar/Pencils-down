// variables
//Buttons in HTM
var container = document.getElementById('container');
var startBtn = document.getElementById('start-button');
var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var initials = document.getElementById('initials');
var submitBtn = document.getElementById('submit-button');
//Timer and Questions

var question = document.getElementById('question');
var questionIndex = 0;
var score = 0;
var timer = document.getElementById('seconds')
var i = 60;
var timeStart;
var timeEnds;


//start quiz and timer Functions

container.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Start")
    container.style.display = "none";
    startTimer();
    firstQuestion();
    quiz.style.display = "block";
}

function startTimer() {
    timeStart = setInterval(function () {
        //console.log(timer)
        i--;
        timer.textContent = "Time Remaining: " + i;

        if (i === 0) {
            clearInterval(timeStart)
        }
        timeEnds = 0 - i
    }, 1000);
}

//Question functions

// quiz.addEventListener("click", firstQuestion);

function firstQuestion(questionIndex) {
    console.log("first")
    question = questions[questionIndex]
    btn1.textContent = questions.button1;
    btn2.textContent = questions.button2;
    btn3.textContent = questions.button3;
};


function nextQuestion(event) {
    if (event.value === questions[questionIndex].correct) {
        userScore++;
        message.innerHTML = "Correct"
    }
    else {
        message.innerHTML = "Incorrect"
        i -= 5;
        timer.innerHTML = "Time : " + i;
    }
    if (questionIndex < questions.length - 1) {
        questionIndex++;
    }
    else {
        clearInterval(timeStart);
    }
};

//Questions array
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


//Initials functions
