let number = prompt("Введите число:");
let degree = prompt("Введите степень числа:");
let num = parseInt(number);
let degreeOf = parseInt(degree);
let result;

if(Number.isInteger(num) && Number.isInteger(degreeOf))
{
    if(degreeOf == 0)
    {
        result = 1;
        console.log(result);
    }
    else
    {
        for(let i = 0; i <degreeOf; i++)
        {
            result = result ?? 1;
            result *=num; 
        }
        console.log(result);
    }    
}
else
{
    alert("Число или степень числа введены некоректно!");
}