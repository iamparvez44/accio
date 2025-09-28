// print all the elements of 2d array you column wise only

let arr = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

for(let col = 0; col< arr[0].length; col++){

    for(let row = 0; row <arr.length; row++){
        console.log(arr[row][col]);
    }

}