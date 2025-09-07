let arr = [10,20,30,40,50,60];

let index = 3;
let n = 35;

for(i=arr.length-1; i<=index; i--){
    arr[i+1] = arr[i];
}

arr[3] = n;
console.log(arr);