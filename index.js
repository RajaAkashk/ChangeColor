
const body = document.getElementsByTagName("body")[0] 

// [0]bec saro ko select nhi krna bss body ko hi select krna hai 

function setColor(name){
    body.style.backgroundColor= name;
}


document.querySelector("#red").addEventListener("click",()=>{ setColor('red')}  );
document.querySelector("#blue").addEventListener("click",()=>{ setColor('blue')}  );
document.querySelector("#green").addEventListener("click",()=>{ setColor('green')}  );
document.querySelector("#random").addEventListener("click",()=>{randomColor()} );


function randomColor() {

const red = Math.round(Math.random()*255)
const blue = Math.round(Math.random()*255)
const green = Math.round(Math.random()*255)

const color = `rgb(${red},${blue},${green})`
body.style.backgroundColor= color;
}

randomColor();