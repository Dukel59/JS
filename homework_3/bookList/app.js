let menu = document.querySelector('.menu');

let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let fifth = document.getElementById('fifth');
let sixth = document.getElementById('sixth');
let seventh = document.getElementById('seventh');

first.addEventListener('click', highlight);
second.addEventListener('click',highlight);
third.addEventListener('click',highlight);
fourth.addEventListener('click',highlight);
fifth.addEventListener('click',highlight);
sixth.addEventListener('click', highlight);
seventh.addEventListener('click', highlight);

console.log(first.classList.length);

function highlight(){
    for (let i of menu.children){
        if(i == this){
            this.classList.add('highlight');
        }
        else{
            i.classList.remove('highlight')
        }
    }
}
