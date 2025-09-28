// print left and right diagonal of the given matrix

let arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

// using nested loop

// for (let row = 0; row < arr.length; row++) {
//   for (col = 0; col < arr.length; col++) {
//     if (row == col) {
//       console.log(arr[row][col]);
//     }
//   }
// }

// for (let row = 0; row < arr.length; row++) {
//   for (col = 0; col < arr.length; col++) {
//     if (row+col==arr.length-1) {
//       console.log(arr[row][col]);
//     }
//   }
// }


// using single loop


// for(let i=0; i<arr.length; i++){
//     console.log(arr[i][i]);
// }

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]+[arr.length-1-i]);
// }


// revison 

// printig using nested loops

for(let i=0; i<arr.length; i++){

  for(let j=0; j<arr[i].length; j++){
    if(i==j){
      console.log(arr[i][j]);
    }
  }

}

for(let i=0; i<arr.length; i++){

  for(let j=0; j<arr[i].length; j++){
    if(i+j==arr.length-1){
      console.log(arr[i][j]);
    }
  }

}