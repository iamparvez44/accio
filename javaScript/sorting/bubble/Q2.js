// Sort in descending order using Bubble Sort.
// 👉 Input: [3, 1, 4, 2]
// 👉 Output: [4, 3, 2, 1]


let arr = [3, 1, 4, 2];

let n = arr.length;

for(let i=0; i<n-1; i++){

    for(let j=0; j<n-1-i; j++){

        if(arr[j] < arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }

    }

}

console.log(arr);