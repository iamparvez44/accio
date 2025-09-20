// :=>you are given an 2d array, your task is to print all the elements of that array.

let arr = [
    [10,20,30],
    [40,50],
    [70],
    [65,66,67,100]
];

for(i=0; i<arr.length; i++){

    for(let j=0; j<arr[i].length; j++){
        console.log(arr[i][j]);
    }
}