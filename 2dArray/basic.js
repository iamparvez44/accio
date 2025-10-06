// 1d array initilization

// let arr = []; // this is emtpy array initilization 

// using array constructor

// let arr = new Array(5); // this is using array constructor

// console.log(arr);

// let matrix = [];
// matrix.push([10]);
// matrix.push([20]);

// console.log(matrix);

let row = 3;
let col = 3;

let matrix = Array.from({length: row}, ()=> Array(col).fill(10));

for(let i=0; i<row; i++){

    for(let j=0; j<col; j++){
        console.log(matrix[i][j]);
    }

}