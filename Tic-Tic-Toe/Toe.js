let box = document.querySelectorAll('.box')
let newgame = document.querySelector("#reset")
let winner = document.querySelector('#win')
let turn = true
let count = 0;
let winpattern = [[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]

box.forEach((box)=>{
   box.addEventListener("click",()=>{
    if (turn===true){
        box.innerHTML = "X";
        turn = false;
    } else {
        box.innerHTML = "O";
        turn = true;
    }
    box.disabled = true;
    count++;
    checkwinner()
    box.disabled = true;
   
    if(count===9 && !checkwinner()){
draw();
    }
   })
})

let draw = ()=>{
     winner.innerHTML = `Match Draw both Player are geniuos`
}

newgame.addEventListener("click",()=>{
box.forEach((box)=>{box.innerHTML= ' '})
box.forEach((box)=>{ box.disabled = false});
winner.innerHTML = '';
})

const checkwinner  = ()=>{
    for(let pattern of winpattern){
        // console.log(pattern)
        // console.log(box[pattern[0]].innerText,box[pattern[1]].innerText,box[pattern[2]].innerText)

let pos1val = box[pattern[0]].innerText;
let pos2val = box[pattern[1]].innerText;
let pos3val = box[pattern[2]].innerText;
if (pos1val!=''&& pos2val!=''&& pos3val!='' ){
    if (pos1val===pos2val &&  pos1val === pos3val){
winner.innerHTML = `Yay Player "${pos1val}" is winner`
        // console.log()
       disable();
    } 

}

    }
}

let enable =()=>{
    box.forEach((box)=>{ box.disabled = false})
}

let disable =()=>{
    box.forEach((box)=>{ box.disabled = true})
}

