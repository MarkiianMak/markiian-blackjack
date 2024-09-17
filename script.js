'use strict'


let allCards = [2,3,4,5,6,7,8,9,10,10,10,11];
let dealerScore = allCards[Math.floor(Math.random() * 12)];
let playerScore = allCards[Math.floor(Math.random() * 12)];
let playerScoreTwo;
let setDealerScore = function(){document.getElementById("dealer-score").textContent = "Score: " + dealerScore;}

if(playerScore == 11){
    
    playerScoreTwo = allCards[Math.floor(Math.random() * 12)];
    if(playerScore == playerScoreTwo){
        playerScore += 1;
    }
}else{
    playerScore += allCards[Math.floor(Math.random() * 12)];
}

setDealerScore()
document.getElementById("player-score").textContent = "Score: " + playerScore;


const hit = function(){
     playerScoreTwo = allCards[Math.floor(Math.random() * 12)];
     
     if((playerScore + playerScoreTwo) > 21 && playerScoreTwo == 11){
        playerScore += 1;
     }else{
        playerScore += playerScoreTwo;

     }
     document.getElementById("player-score").textContent = "Score: " + playerScore;
 
};

const reset = function(){
      dealerScore = allCards[Math.floor(Math.random() * 12)];
      setDealerScore();
  

   playerScore = allCards[Math.floor(Math.random() * 12)];
   if(playerScore == 11){
    
    playerScoreTwo = allCards[Math.floor(Math.random() * 12)];
    if(playerScore == playerScoreTwo){
        playerScore += 1;
    }
   }else{
    playerScore += allCards[Math.floor(Math.random() * 12)];

    }
    document.getElementById("player-score").textContent = "Score: " + playerScore;
   
}


const stand = function(){
    playerScoreTwo = allCards[Math.floor(Math.random() * 12)];
     

     if((dealerScore + playerScoreTwo) > 21 && playerScoreTwo == 11){
        dealerScore += 1;
     }else{
        dealerScore += playerScoreTwo;

     }
     
     setDealerScore()
     playerScoreTwo = allCards[Math.floor(Math.random() * 12)];
    for(let i = 0; i < 10; i++){
        if(dealerScore + playerScoreTwo < 21){
        dealerScore += playerScoreTwo
           setTimeout(setDealerScore,1000);
     
              }

     }


     playerScoreTwo = allCards[Math.floor(Math.random() * 12)];
     if(dealerScore + playerScoreTwo > 21 && Math.random() > 0.8 ){
        dealerScore += playerScoreTwo;
        setTimeout(setDealerScore,1000);
     }



}


document.getElementById('hit').addEventListener('click', hit);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('stand').addEventListener('click',stand);