let number = prompt("Введите число от 0 до 9:");
if(number > 9 || number < 0)
{
    alert("Число введено некоректно!");
}
else
{
    switch(number)
    {
        case '1':
            alert("Единица");
            break;
            
        case '2':
            alert("Двойка");
            break;
    
        case '3':
            alert("Тройка");
            break;
    
        case '4':
            alert("Четверка");
            break;
            
        case '5':
            alert("Пятерка");
            break;
    
        case '6':
            alert("Шестерка");
            break;
        
        case '7':
            alert("Семерка");
            break;
            
        case '8':
            alert("Восьмерка");
            break;
    
        case '9':
            alert("Девятка");
            break;
            
        case '0':
            alert("Ноль");
            break;
    
        default:
            alert("Введенный символ не число!");
    }
}
