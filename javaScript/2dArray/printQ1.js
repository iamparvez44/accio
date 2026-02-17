// Print the elements of a specific row index r.

let mat = [
  [2, 0, 5,10],
  [1, 2, 0, 8],
  [0, 2, 1, 0]
];

let r = 1;

for(let i=0; i<mat.length; i++){

    for(let j=0; j<mat[i].length; j++){
        if(i==r){
            console.log(mat[i][j]);
        }
    }

}
