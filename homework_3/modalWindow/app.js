let el = document.getElementById('button');
let modalWindow = document.querySelector('.modal');
let modalBut = document.getElementById('closeButton');

el.addEventListener('click', modalWin);
modalBut.addEventListener('click', modalClose);

function modalWin(){
    modalWindow.classList.toggle('modalActive');
}
function modalClose(){
    modalWindow.classList.toggle('modalActive');
}
