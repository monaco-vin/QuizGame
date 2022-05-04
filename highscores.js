
  function printScores() {
    var getScores = localStorage.getItem("highScores");
    var gamesLog = document.getElementById("pastPlayers")
    gamesLog.textContent = 'Past Players' + getScores;
  }

  window.addEventListener('load', printScores)