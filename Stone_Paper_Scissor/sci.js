let userscore = 0;
let compscore = 0;
const resdisp = document.querySelector('#h2')
const userresult = document.querySelector("#user-score");
const compresult = document.querySelector("#comp-score");
const refresh = document.querySelector("#h3")
const choices = document.querySelectorAll(".choice")
const  gencompchoice = ()=>{
  const option = ['rock','paper','scissor']
const ranIndex = Math.floor(Math.random()*3)
return option[ranIndex];

}



const showwinner = (userwin)=>{
  if (userwin === true){
    console.log("you win");
    resdisp.innerText = "you win";
    userscore ++ ;
    userresult.innerHTML = userscore;
  } else {
    console.log('you lose');
    resdisp.innerText = "you lose"
    compscore ++ ;
    compresult.innerHTML = compscore;
  }
}

const Draw = ()=>{
  console.log('Game was Draw');
  resdisp.innerText = "Game was Draw"
}

// const rock = document.querySelector('#rock');
// const paper = document.querySelector("#paper");
// const scissor = document.querySelector("#scissor");
// const pcturn =parseInt(Math.random()*3);

// rock.addEventListener('click',()=>{
//   // const pcturn =parseInt(Math.random()*3);
//   const pcturn = Math.floor(Math.random() * 3) + 1;
//     console.log(pcturn);

//     // console.log('rock');
// })
// paper.addEventListener('click',()=>{
//   // const pcturn =parseInt(Math.random()*3);
//   const pcturn = Math.floor(Math.random() * 3) + 1;
//       console.log(pcturn);
//     console.log('paper');
// })
// scissor.addEventListener('click',()=>{
//   // const pcturn =parseInt(Math.random()*3+1);
//   const pcturn = Math.floor(Math.random() * 3) + 1;
//       console.log(pcturn);
//     console.log('scissor');
// })
const playgame = (userchoice)=>{
  console.log(`User Choice = ${userchoice}`);
  const compchoice = gencompchoice()
   console.log(`Comp Choice = ${compchoice}`);
   if (userchoice===compchoice){
     Draw();
   } else {
let userwin = true ;
if (userchoice === 'rock'){
userwin = compchoice === 'paper'?false:true;
} else if (userchoice === 'paper'){
userwin = compchoice === 'scissor'?false:true;
} else {
userwin = compchoice ===  'rock'?false:true;
}
showwinner(userwin)
   } 
}
choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
    const userchoice = choice.getAttribute("id")
   playgame(userchoice)
  })
})
const refreshb = ()=>{
  resdisp.innerText = "Play Your Move";
  userresult.innerHTML = "0";
  compresult.innerHTML = "0";

}

function refreshPage(forceGet = true) {
  window.location.reload(forceGet);
}

refresh.addEventListener("click",()=>{
refreshb();
refreshPage();
})

