const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json"

const dropdown = document.querySelectorAll(".select select")
const btn = document.querySelector("button");
const fromcurr = document.querySelector(".from select")
const tocurr = document.querySelector(".To select")
const message = document.querySelector(".msg")

for(let select of dropdown){
for (currcode in countryList){
    // console.log(countryList[currcode] )
    let newoption = document.createElement("option")
    newoption.innerText = currcode;
    newoption.value = currcode;
    select.append(newoption);

}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target)
})
}

const updateFlag=(element)=>{
let currcode   = element.value;
// console.log(currcode);
let countrycode = countryList[currcode];
// console.log(countrycode);
let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
let img = element.parentElement.parentElement.querySelector('img');
img.src = newsrc;
}

btn.addEventListener("click",async (e)=>{
    e.preventDefault();
    // console.log("button was clicked")
    let amount = document.querySelector("#amount input");
    let amtval = parseFloat(amount.value); // Convert to a number
    // console.log(amtval)

if (isNaN(amtval) || amtval <= 0) { // Check for Not-a-Number or non-positive
    amtval = 1; // Set a default value for calculation
    amount.value = 1; // Update the input field as well
}

//  console.log(fromcurr.value.toLowerCase());
//  console.log(tocurr.value.toLowerCase());

    const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}.min.json`;
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data)
    const rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
    // console.log(response);
    // console.log(rate);
const finalamount = (amtval*rate) 

    message.innerText = `${amtval}${fromcurr.value} = ${finalamount}${tocurr.value}`
})