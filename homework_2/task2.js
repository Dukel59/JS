function countIdentic(arr){
    let uniqArray = [];
    for(let num of arr){
        if(!uniqArray.includes(num)){
            uniqArray.push(num);
        }
    }
    let counter = arr.length - uniqArray.length;          
    return counter;
}
let arr = [1,2,3,4,5,6,5,4,3,2,1];
let counterValue = countIdentic(arr);
console.log(counterValue);