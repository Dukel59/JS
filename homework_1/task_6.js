let number = prompt("Введите число:");
if((number % 5) == 0)
{
    alert("Число кратно 5");
}
else if (!(number % 5) == 0)
{
    alert("Число не кратно 5");
}
else 
{
    alert("Число введено некоректно!");
}