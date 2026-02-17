// Count the number of swaps performed while sorting.
// 👉 Input: [4, 3, 2, 1]
// 👉 Output: 6 swaps

let arr =  [4, 3, 2, 1];

let n = arr.length;

let swap = 0;

for(let i=0; i<n-1; i++){

    for(let j=0; j<n-1-i; j++){
        if(arr[j]>arr[j+1]){
            swap++;
        }
    }

}

console.log(swap);