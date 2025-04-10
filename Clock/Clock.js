
const clocktime = document.getElementById("clock")

setInterval(() => {
    let date =new Date();
    clocktime.innerText = date.toLocaleTimeString(); 

// console.log(date.toLocaleTimeString());

}, 1000);
