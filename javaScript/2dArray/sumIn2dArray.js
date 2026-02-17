let matrix = [[2,5,3,], [6,9,2],[1,4,7]]; //

let sum = 0;

for(let i=0; i<matrix.length; i++){

    for(let j=0; j<matrix[i].length; j++){
        sum = sum + matrix[i][j];
    }
    
}

console.log(sum);