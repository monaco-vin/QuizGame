var welcomeScreenEl = document.getElementById("welcomeScreen")
var questionScreenEl = document.getElementById("questionScreen")
var questionEl = document.getElementById("question")
var ansOneEl = document.getElementById("ansOne")
var ansTwoEl = document.getElementById("ansTwo")
var ansThreeEl = document.getElementById("ansThree")
var ansFourEl = document.getElementById("ansFour")
var endScreenEl = document.getElementById("endScreen")
var intialsEl = document.getElementById("intials")
var timerEl = document.getElementById("timer")
var beginBtnEl = document.getElementById("beginBtn")
var timeOnClock = 30

timerEl.textContent = "Time Left: " + timeOnClock

var quizQuestions = [
    {
        question: "2 + 2 = ?",
        answerChoices: ["7", "4", "1", "3"],
        correctAnswer: "4",
    },
    {
        question: "When will the Dallas Cowboys win the Super Bowl again?",
        answerChoices: ["2023", "2024", "2025", "Never"],
        correctAnswer: "Never",
    },
    {
        question: "What is your favorite sport?",
        answerChoices: ["Hockey", "Football", "Baseball", "Basketball"],
        correctAnswer: "Hockey",
    },
    {
        question: "Is Vinny Monaco good at coding?",
        answerChoices: ["Who is Vinny Monaco?", "yes", "YES", "No"],
        correctAnswer: "Hockey",
    },
]
var questionIndex = 0


function startQuiz() {
    startTimer()
    welcomeScreenEl.style.display = "none"
    questionScreenEl.style.display = "block"
    displayQuestion()


}

function startTimer() {
    var countDown = setInterval(function () {
        timeOnClock = timeOnClock - 1
        timerEl.textContent = "Time Left: " + timeOnClock
        if (timeOnClock <= 0) {
            clearInterval(countDown)
            // You will also end the quiz if they run out of time *hint call a function
        }
    }, 1000)
}

function displayQuestion() {
// you want to check what the question index is and if there are no more questions to be asked end the game

    questionEl.textContent = quizQuestions[questionIndex].question
    ansOneEl.textContent = quizQuestions[questionIndex].answerChoices[0]
    ansTwoEl.textContent = quizQuestions[questionIndex].answerChoices[1]
    ansThreeEl.textContent = quizQuestions[questionIndex].answerChoices[2]
    ansFourEl.textContent = quizQuestions[questionIndex].answerChoices[3]

}

function checkAnswer(event) {
    console.log(event)
    var rightAnswer;
    if (event.target.innerText === quizQuestions[questionIndex].correctAnswer) {
        timeOnClock += 10
        rightAnswer = true
    } else {
        timeOnClock -= 10
        rightAnswer = false
    }
    questionIndex++
    if (rightAnswer) {
        // set some indication that they got a right answer here

        setTimeout(function () {
            // remove the indication
            displayQuestion()
        }, 1500)
    } else {
        // set some indication that they got a wrong answer here

        setTimeout(function () {
            // remove the indication
            displayQuestion()
        }, 1500)
    }
}

var quizAnswers = document.getElementsByClassName("answer")

for (var i = 0; i < quizAnswers.length; i++) {
    quizAnswers[i].addEventListener("click", checkAnswer)
}

beginBtnEl.addEventListener('click', startQuiz)


// function addNumbers(num1, num2){
//     var total = num1 + num2
//     timerEl.textContent = "Time Left: " + total
//     return total
// }

// var answer = addNumbers(20, 60)
// console.log(answer)