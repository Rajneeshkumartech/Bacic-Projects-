let randomNumber = parseInt(Math.random()*100 + 1)
// console.log(randomNumber);
const userInput = document.querySelector("#guessfiels");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");