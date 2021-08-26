const goal = 70;
let entries = [];
const entriesWrapper = document.querySelector("#entries");
document.getElementById("target").innerText = goal;

function addNewEntry(newEntry) {
entriesWrapper.removeChild(entriesWrapper.firstElementChild);
const listItem = document.createElement("li");
const listValue = document.createTextNode(newEntry);
listItem.appendChild(listValue);
entriesWrapper.appendChild(listItem);

}

function reducer(total,currentValue){
    return total + currentValue;
}

function calTotal(){
  const totalValue = entries.reduce(reducer).toFixed(1);
  document.getElementById('total').innerHTML=totalValue;
  document.getElementById('progressTotal').innerHTML=totalValue;
}


function calcAverage(){
    const average =(entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerHTML = average;
}


function weeklyHigh(){
    const high = Math.max(...entries);
    document.getElementById('high').innerHTML = high;

}

function calcGoal(){
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completedpercent = totalValue / (goal / 100);
    const progessCircle = document.getElementById("progressCircle");
    if(completedpercent > 100) completedpercent === 100;
    progessCircle.style.background =`conic-gradient(#70db70 ${completedpercent}%, #2d3740 ${completepedrcent}% 100%)`;
} 



function handleSubmit(event){
    // console.log("hello");
    event.preventDefault();
    const entry = Number(document.getElementById("entry").value);
    //  console.log(document.getElementById("entry").value);
   if(!entry) return;
   document.getElementById("form").reset();
   entries.push(entry);
   addNewEntry(entry);
   calTotal();
   calcAverage();
   weeklyHigh();
//    calcGoal();
}

const form = document.querySelector("form").addEventListener("submit", handleSubmit);

