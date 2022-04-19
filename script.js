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
var timeOnClock = 2

timerEl.textContent = "Time Left: " + timeOnClock

function startQuiz() {
    startTimer()
}

function startTimer(){
    var countDown = setInterval(function(){
        timeOnClock = timeOnClock - 1
        timerEl.textContent = "Time Left: " + timeOnClock
        if(timeOnClock <= 0){
            clearInterval(countDown)
            // You will also end the quiz if they run out of time *hint call a function
        }
    }, 1000)
}

beginBtnEl.addEventListener('click', startQuiz)


// function addNumbers(num1, num2){
//     var total = num1 + num2
//     timerEl.textContent = "Time Left: " + total
//     return total
// }

// var answer = addNumbers(20, 60)
// console.log(answer)