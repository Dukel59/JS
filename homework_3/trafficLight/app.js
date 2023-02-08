let but = document.getElementById('but');
let red = document.getElementById('red');
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');

but.addEventListener('click', activateLights);

function activateLights(){
    if(red.classList.length<2 && yellow.classList.length<2 && green.classList.length<2){
        red.classList.add('redActive');
    }
    else if(red.classList.length>1){
        red.classList.remove('redActive');
        yellow.classList.add('yellowActive');
    }
    else if(yellow.classList.length>1){
        yellow.classList.remove('yellowActive');
        green.classList.add('greenActive');
    }
    else{
        green.classList.remove('greenActive');
    }
}