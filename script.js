'use strict';
// document.querySelector('.number').textContent=5;
// document.querySelector('.score').textContent=10;


//set secrect number
let secretNumber = Math.floor(Math.random() * 20) + 1;
//set scroe number
let score = 20;
//set init high score
let highscore = 0;
//set game of logic if statement
document.querySelector('.check').addEventListener("click",function(){
    const guess = Number (document.querySelector('.guess').value);
    //console.log( typeof guess);
    //When there is no input
    if(!guess){
    document.querySelector('.message').textContent = '⛔️ enter a Number'
    
    //win state
    }else if(guess === secretNumber){
    //when player won, the question mark will be replace to secretNumber
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number!!';
    document.querySelector('body').style.backgroundColor =' #60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore){
         highscore = document.querySelector('.highscore').textContent= score;
    }
    //when score > 1 && guess too high
    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 the number too high';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You Lost';
            document.querySelector('.score').textContent = 0;
        }

    //when score > 1 && guess too low
    }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 the number too low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You Lost';
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener
('click',function(){
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor ='#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value ="";

  

})