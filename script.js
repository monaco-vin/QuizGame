var welcomeScreenEl = document.getElementById("welcomeScreen")
var questionScreenEl = document.getElementById("questionScreen")
var questionEl = document.getElementById("question")
var ansOneEl = document.getElementById("ansOne")
var ansTwoEl = document.getElementById("ansTwo")
var ansThreeEl = document.getElementById("ansThree")
var ansFourEl = document.getElementById("ansFour")
var endScreenEl = document.getElementById("endScreen")
var initialsEl = document.getElementById("initials")
var timerEl = document.getElementById("timer")
var beginBtnEl = document.getElementById("beginBtn")
var responseEl = document.getElementById("response")
var initialSubmitEl = document.getElementById("initialSubmit")
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
        question: "Who will win the Stanley Cup?",
        answerChoices: ["Avalanche", "Bruins", "Flames", "Lightning"],
        correctAnswer: "Bruins",
    },

]
var questionIndex = 0
var countDown


function startQuiz() {
    startTimer()
    welcomeScreenEl.style.display = "none"
    questionScreenEl.style.display = "block"
    displayQuestion()


}

function startTimer() {
        countDown = setInterval(function () {
        timeOnClock = timeOnClock - 1
        timerEl.textContent = "Time Left: " + timeOnClock
        if (timeOnClock <= 0) {
            endgame()
        }
    }, 1000)
}

function displayQuestion() {
// you want to check what the question index is and if there are no more questions to be asked end the game
    if (questionIndex == quizQuestions.length){
        endgame()
        return
    }
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
    questionIndex = questionIndex + 1
    if (rightAnswer) {
        responseEl.textContent = "Right"
        setTimeout(function () {
            responseEl.textContent = ""
            displayQuestion()
        }, 1500)
    } else {
        responseEl.textContent = "Wrong"

        setTimeout(function () {
            responseEl.textContent = ""
            displayQuestion()
        }, 1500)
    }
}
function endgame(){
    clearInterval(countDown)
    questionScreenEl.style.display = "none"
    endScreenEl.style.display = "block"
}
function sumbitIntials(){
    var userInput = initialsEl.value
    var storageScores = JSON.parse(localStorage.getItem("highScores")) || []
    var highScoreObj = {
        score: timeOnClock,
        name: userInput,
    }
    storageScores.push(highScoreObj)
    localStorage.setItem("highScores", JSON.stringify(storageScores))
    window.location.assign("highscores.html")
}

var quizAnswers = document.getElementsByClassName("answer")

for (var i = 0; i < quizAnswers.length; i++) {
    quizAnswers[i].addEventListener("click", checkAnswer)
}



beginBtnEl.addEventListener('click', startQuiz)
initialSubmitEl.addEventListener('click', sumbitIntials)


// function addNumbers(num1, num2){
//     var total = num1 + num2
//     timerEl.textContent = "Time Left: " + total
//     return total
// }

// var answer = addNumbers(20, 60)
// console.log(answer)
/* loop over storage items and loop them into highscores.html into a div - new js and link to the new highscores.html*/