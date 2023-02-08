function setNum()
{
    console.log(arguments);
    let num = String(arguments[0]);
    for(let i = 1; i< arguments.length; i++)
    {
        num += arguments[i];
    }
    return parseInt(num);
}
let number = setNum(1,4,9,8);
console.log(number);