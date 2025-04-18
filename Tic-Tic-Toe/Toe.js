let box = document.querySelectorAll('.box');
let newgame = document.querySelector("#reset");
let winner = document.querySelector('#win');
let turn = true;
let count = 0;
let winpattern =   [[0, 1, 2],
                    [6, 7, 8],
                    [3, 4, 5],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6],];

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === true) {
            box.innerHTML = "X";
            turn = false;
        } else {
            box.innerHTML = "O";
            turn = true;
        }
        box.disabled = true;
        count++;
        checkwinner();

        if (count === 9 && !checkwinner()) {
            draw();
        }
    });
});

let draw = () => { winner.innerHTML = `Match Draw`;};
   
newgame.addEventListener("click", () => {
    box.forEach((box) => {
        box.innerHTML = ' ';
        box.disabled = false;
    });
    winner.innerHTML = '';
    count = 0; // Reset count when a new game starts
});

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;
        if (pos1val !== '' && pos2val !== '' && pos3val !== '') {
            if (pos1val === pos2val && pos1val === pos3val) {
                winner.innerHTML = `Yay Player "${pos1val}" is winner`;
                disable();
                return true; // Indicate a winner was found
            }
        }
    }
    return false; // Indicate no winner yet
};

let enable = () => {
    box.forEach((box) => {
        box.disabled = false;
    });
};

let disable = () => {
    box.forEach((box) => {
        box.disabled = true;
    });
};