let counter = prompt("Введите количество выводимых символов:");
let numCounter = parseInt(counter);
let sharpString = '#';

if(numCounter == 1)
{
    console.log(sharpString);
}
else if (numCounter > 1)
{
    for (let i = 1; i<numCounter; i++)
    {
        sharpString +='#';
    }
    console.log(sharpString);
}
else
{
    alert("Введено некоректное количество выводимых символов!")
}
