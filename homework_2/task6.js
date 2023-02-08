function choiceDigits(arr){
    let stringArray = arr;
    for(let i = 0; i<stringArray.length;i++)
    {
        let digit = stringArray[i];
        while(digit>10){
            digit/=10;
        }
        if(Math.trunc(digit) == 1 || Math.trunc(digit) == 2 || Math.trunc(digit) == 5)
        {
            console.log(stringArray[i]);
        }
    }
}
let arr = [25,33,51,11,678,54,89,786,45,667,23,114];
choiceDigits(arr);
