let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// this function is to make matrix transpose

function trans(matrix) {
  let transpose = [];

  for (let col = 0; col < mat[0].length; col++) {
    let newRow = [];

    for (let row = 0; row < mat.length; row++) {
      newRow.push(mat[row][col]);
    }

    transpose.push(newRow);
  }

  return transpose;
}

// this function to make matrix swap to make 90 degree

function reverse(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    let start = 0;
    let end = matrix[0].length - 1;

    while (end > start) {
      let temp = matrix[row][start];
      matrix[row][start] = matrix[row][end];
      matrix[row][end] = temp;

      start = start + 1;
      end = end - 1;
    }
  }

  console.log(matrix);
}

let t = trans(mat);

reverse(t);
