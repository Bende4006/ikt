
let countEl = document.getElementById("count-el") 

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count

if(count == 2){
    alert("Azt montad az asszonynak hogy csak 1 sörre mész le")
}

if(count == 11){
    alert("Ezért otthon kapni fogsz")
}

if(count == 16)
    alert("Inkább haza se menj")
}

