let randomNumber = parseInt(Math.random()*100 + 1)
console.log(randomNumber);
//first of all we store all the selectable elements inti a variable
const userInput = document.querySelector("#guessfiels");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");


let prevGuess = [];
//it store/display the previous Guesses into an array

let numGuess = 1;
// it tells the number of guess starts from 1 

let playGame = true;
//if it is true then game will start

if (playGame){
submit.addEventListener('click',function (e){
   e.preventDefault();
   const guess = parseInt(userInput.value)
//    console.log(guess) 
   validateGuess(guess)
  
})
}

function validateGuess(guess) {
    if (isNaN(guess)) {
      alert('PLease enter a valid number');
      userInput.value = '';
    } else if (guess < 1) {
      alert('PLease enter a number more than 1');
       userInput.value = '';
    } else if (guess > 100) {
      alert('PLease enter a  number less than 100');
       userInput.value = '';
    }  else if (prevGuess.includes(guess)) {
        alert('You have already guessed this number. Please try a different one.');
        userInput.value ='';
    }  else {
   prevGuess.push(guess);
   if (numGuess===10){
displayGuess(guess);
displaymessage(`GameOver Ramdom Number Was ${randomNumber}`);
endGame();
 }else {
    displayGuess(guess);
      checkGuess(guess);
 }
}
}
// it validates the guess number 



function checkGuess(guess){
    if (guess === randomNumber){
        displaymessage("you Guessed it right ");
        endGame();
} else if (guess <randomNumber){
    displaymessage("Number is Low")
}  else if (guess >randomNumber){
    displaymessage("Number is High")
}
}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML += ` ${guess} ` ;
    numGuess ++;
    remaining.innerHTML = `${11-numGuess}`

}

function displaymessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
// userInput.value='';
userInput.setAttribute('disabled','')
p.classList.add('button');
p.innerHTML = `<h2 id = 'newGame' >start New Game </h2>`
startOver.appendChild(p);
playGame=false;
newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener ('click',function (e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess =1;
        guessSlot.innerHTML = ' ';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
    
        playGame = true;
    })
    
};
