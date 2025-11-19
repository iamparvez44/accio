//Write a program to sort an array of integers in ascending order using Selection Sort.

let arr = [6,5,4,1,2,3];

for(let i=0; i<arr.length-1; i++){

    let minIdx = i;

    for(let j=i+1; j<arr.length; j++){
        if(arr[j]<arr[minIdx]){
            minIdx = j;
        }
    }

    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;

}

console.log(arr);