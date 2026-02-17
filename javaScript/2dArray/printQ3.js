// Print all rows in reverse order (last row to first row).

let mat = [
  [2, 0, 5,10],
  [1, 2, 0, 8],
  [0, 2, 1, 0]
];

for(let col=0; col<mat[0].length; col++){

    for(let row=mat.length-1; row>=0; row--){

        console.log(mat[row][col]);

    }

}


