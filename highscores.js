var winnerList = document.getElementById("winnerList")
var getScores = localStorage.getItem("highScores");
var gamesLog = document.getElementById("pastPlayers");
var storageArrays = [];


function printScores() {
  var storageScores = JSON.parse(localStorage.getItem("highScores")) || []
  storageScores.map((score) =>{
    var createLi = document.createElement("li")
    createLi.innerText = `Name: ${score.name} --- Score: ${score.score}`
    winnerList.appendChild(createLi)
  })
    console.log(storageScores)
}



window.addEventListener('load', printScores)