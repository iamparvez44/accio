let arr = [10,20,30,40,50,60];
let index = 4; // delet the element at index 3;

let brr = [];
let crr = [];

for(let i=0; i<parseInt((arr.length)/2); i++){
   brr.push(arr[i]);
}

for(let i=index+1; i<=arr.length-1; i++){
    crr.push(arr[i]);
}

brr.pop();

console.log(arr);
console.log(brr);
console.log(crr);

