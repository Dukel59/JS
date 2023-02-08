function generateNumbers(start, len){
    let firstArray = [];
    for (let i = 0; i<len; i++){
        firstArray[i] = start+i;
    }
    return firstArray;
}
let secondArray = generateNumbers(3, 5);
console.log(secondArray);