//set secrect number
let secretNumber = Math.floor(Math.random() * 20) + 1;
//set init scroe number
let score = 20;
//set init high score
let highscore = 0;
//set refactoring code
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
//set game of logic if statement
document.querySelector('.check').addEventListener("click",function(){
    const guess = Number (document.querySelector('.guess').value);
    //When there is no input
    if(!guess){
        displayMessage( '⛔️ enter a Number');
    
    //when guess right state
    }else if(guess === secretNumber){
    //when player won, the question mark will be replace to secretNumber
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!!');
    document.querySelector('body').style.backgroundColor =' #60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore){
         highscore = document.querySelector('.highscore').textContent= score;
       }
    //when guess wrong
    }else if(guess!==secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 the number too high':'📈 the number too low');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('💥 You Lost') ;
            document.querySelector('.score').textContent = 0;
        }
    }
})
   

//set restart but keep highscore
document.querySelector('.again').addEventListener
('click',function(){
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  
  document.querySelector('.score').textContent = score;
  displayMessage( 'Start guessing...');
  document.querySelector('body').style.backgroundColor ='#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value ="";

  

})