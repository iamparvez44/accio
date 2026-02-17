// Print only the boundary elements of a matrix.


let mat = [
  [21, 72, 83, 94, 25, 16, 57, 38],
  [19, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48],
  [49, 50, 51, 52, 53, 54, 55, 56],
  [57, 58, 59, 60, 61, 62, 63, 64]
];

let row = mat.length;
let col = mat[0].length;

// for(let i=0; i<row; i++){

//     for(let j=0; j<col; j++){

//         if(i==0 || j==0 || i==row-1 || j==col-1){
//             console.log(mat[i][j]);
//         }

//     }

// }


for (let i = 0; i < row; i++) {
  let line = "";
  for (let j = 0; j < col; j++) {
    if (i === 0 || j === 0 || i === row - 1 || j === col - 1) {
      line += mat[i][j] + " ";
    } else {
      line += "  ";
    }
  }
  console.log(line);
}
