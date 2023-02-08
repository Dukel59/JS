let number1 = prompt("Введите первое число:");
let number2 = prompt("Введите второе число:");
let num1 = parseInt(number1);
let num2 = parseInt(number2);
let symbol = prompt("Введите арифметический знак:");
if(symbol == '+')
{
    console.log(num1 + num2);
}
else if (symbol == '-')
{
    console.log(num1 - num2);
}
else if (symbol == '*')
{
    console.log(num1*num2)
}
else if (symbol == "/")
{
    if(num2 == '0')
    {
        alert("Деление на ноль запрещено!");
    }
    else
    {
        console.log(num1 / num2);
    }
}
else
{
    alert("Введен некоректный символ!");
}