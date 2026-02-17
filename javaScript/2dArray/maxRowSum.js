let matrix = [[5,8,6,13],[8,4,6,3],[7,5,1,0,],[6,4,3,10]]; //22 , 21, 13, 

let maxSum = 0;
let rowNum;

for(let i=0; i<matrix.length; i++){

    let sum = 0;

    for(let j=0; j<matrix[i].length; j++){
        sum += matrix[i][j];
    }

    if(maxSum< sum){
        maxSum = sum;
        rowNum = i;
    }

}

console.log(maxSum, rowNum);