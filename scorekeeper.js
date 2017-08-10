var playerOne = document.querySelector(".p1");
var playerTwo = document.querySelector(".p2");
var playAgain = document.querySelector(".playagain");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

var p1Span = document.querySelector(".p1Span");
playerOne.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      p1Span.classList.add("winner")
      gameOver = true;
    }
    p1Span.textContent = p1Score
  }
});
var p2Span = document.querySelector(".p2Span");
playerTwo.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      p2Span.classList.add("winner")
      gameOver = true;
    }
    p2Span.textContent = p2Score
  }
});

playAgain.addEventListener("click", function() {
  playAggain();
});

function playAggain(){
  p1Score = 0;
  p2Score = 0;
  p1Span.textContent = 0;
  p2Span.textContent = 0;
  p1Span.classList.remove("winner");
  p2Span.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value)
  playAggain();
});
