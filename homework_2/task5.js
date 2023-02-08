function removeDuplicates(arr){
    let secondArray = [];
    for(let str of arr){
        if(!secondArray.includes(str)){
            secondArray.push(str);
        }
    }
    return secondArray;
}
let arr = ['task', 'task', 'JS', 'js', 'JS', 'CSS', 'CSS', 'HTML', 'HTML'];
let secondArr = removeDuplicates(arr);
console.log(arr);
console.log(secondArr);