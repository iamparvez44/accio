// let arr = [10,20,30,40,50,60];

// let index = 3;
// let n = 35;

// for(i=arr.length-1; i<=index; i--){
//     arr[i+1] = arr[i];
// }

// arr[3] = n;
// console.log(arr);

// let arr = [10,20,30,40,50,60];

// let i = 0;

// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

let arr = [10,21,30,43,50,65];
let oddArr = [];
let evenArr = [];

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]%2==0){
        evenArr.push(arr[i]);
       }
    else{
        oddArr.push(arr[i]);
    }   
}

console.log(oddArr);
console.log(evenArr);