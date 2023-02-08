let element = document.querySelector('.area');

let black = document.querySelector('#black');
black.addEventListener('click', changeBlack);

let red = document.querySelector('#red');
red.addEventListener('click', changeRed);
let green = document.querySelector('#green');
green.addEventListener('click', changeGreen);
let yellow = document.querySelector('#yellow');
yellow.addEventListener('click', changeYellow);
let white = document.querySelector('#white');
white.addEventListener('click', changeWhite);
let blue = document.querySelector('#blue');
blue.addEventListener('click', changeBlue);
let orange = document.querySelector('#orange');
orange.addEventListener('click', changeOrange);
let purple = document.querySelector('#purple');
purple.addEventListener('click', changePurple);

function changeRed(){
    if(element.classList.length>1){
        element.classList.remove(element.classList[element.classList.length-1]);
    }
    element.classList.toggle('red');
}
function changeBlack(){
    if(element.classList.length>1){
        element.classList.remove(element.classList[element.classList.length-1]);
    }
    element.classList.toggle('black');
}
function changeGreen(){
    if(element.classList.length>1){
        element.classList.remove(element.classList[element.classList.length-1]);
    }
    element.classList.toggle('green');
}
function changeYellow(){
    if(element.classList.length>1){
        element.classList.remove(element.classList[element.classList.length-1]);
    }
    element.classList.toggle('yellow');
}
function changeWhite(){
    if(element.classList.length>1){
        element.classList.remove(element.classList[element.classList.length-1]);
    }
    element.classList.toggle('white');
}
function changeBlue(){
    if(element.classList.length>1){
        element.classList.remove(element.classList[element.classList.length-1]);
    }
    element.classList.toggle('blue');
}
function changeOrange(){
    if(element.classList.length>1){
        element.classList.remove(element.classList[element.classList.length-1]);
    }
    element.classList.toggle('orange');
}
function changePurple(){
    if(element.classList.length>1){
        element.classList.remove(element.classList[element.classList.length-1]);
    }
    element.classList.toggle('purple');
}