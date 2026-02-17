let mat = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
];


// loop for traverse every row

for (let i = 0; i < mat.length; i++) {
  let rowNum = -1;

  // loop to check element 1 is present or not

  for (let j = 0; j < mat[i].length; j++) {
    if (mat[i][j] == 1) {
      rowNum = i;
    }
  }

  // loop to modifiy that row

  if (rowNum >= 0) {
    for (let j = 0; j < mat[i].length; j++) {
      mat[i][j] = 1;
    }
  }
}

console.log(mat);
