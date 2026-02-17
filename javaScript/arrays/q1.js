// cpoying arr

let arr = [10,20,30,40,50,60,70,80,90];
let brr = [];

for(let i=0; i<arr.length; i++){
    brr[i] = arr[i];
}

brr[0] = 45;
console.log(brr);
console.log(arr);