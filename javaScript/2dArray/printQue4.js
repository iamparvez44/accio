// Print the primary diagonal of a square matrix.

let mat = [
  [2, 0, 5],
  [1, 2, 0],
  [0, 2, 1],
  
];

let k = mat.length-1;

for(let i=0; i<mat.length; i++){

    for(let j=0; j<mat[i].length; j++){

        if(i==j){
            console.log(mat[i][j]);
        }

    }

}


for(let i=0; i<mat.length; i++){

    for(let j=0; j<mat[i].length; j++){

        if(i+j==k){
            console.log(mat[i][j]);
        }

    }

}