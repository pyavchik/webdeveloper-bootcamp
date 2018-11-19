const p1Button = document.querySelector("#player1");
let p1Score = 0;
let p2Score = 0;
let p1Display = document.querySelector("#p1Display")
let p2Display = document.querySelector("#p2Display")
const p2Button = document.getElementById("player2");
const resetButton = document.getElementById("reset");

let gameOver = false;
let winningScore = 5;

//let h1 = document.querySelector("h1");

p1Button.addEventListener("click", function () {
    if(!gameOver){
        p1Score++;
        if(p1Score===winningScore){
            console.log("Game over!!!")
            gameOver=true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if(!gameOver){
        p2Score++;
        if(p2Score===winningScore){
            console.log("Game over!!!")
            gameOver=true;
        }
        p2Display.textContent = p2Score;
    }
});
