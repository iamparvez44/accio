// Print the elements of a specific column index c.

let mat = [
  [2, 0, 5,10],
  [1, 2, 0, 8],
  [0, 2, 1, 0]
];


let c = 2;

for(let col=0; col<mat[0].length; col++){

    for(let row=0; row<mat.length; row++){

        if(col==c){
            console.log(mat[row][col]);
        }

    }

}
