// you are given an unsorted array and your task is to sort the array using selection technique

let arr = [10,8,2,3,1,4];

let n = arr.length;

// outer loop for traverse every element prensent in the array

for(let i=0; i<n-1; i++){     // 0======>5    now = 0,

    let minIdx = i;

    for(let j=i+1; j<n; j++){      // 0

        if(arr[j] < arr[minIdx]){
            minIdx = j;
        }

    }

    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;

}

console.log(arr);
