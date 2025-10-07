// you are a five square matrix you need to tanspose this..

let matrix = 
 [
    [5,8,6,], 
    [8,3,6,], 
    [7,5,1,], 
    
];

for(let col = 0; col < matrix[0].length; col++){

    for(row =0; row < matrix.length; row++){
        console.log(matrix[row][col]);
    }

}