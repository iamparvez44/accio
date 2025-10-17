let arr = [1,2,3];

let maxSum = -Infinity;

for (let i = 0; i < arr.length; i++) {
  let arrSum = 0;

  for (j = i; j < arr.length; j++) {
    arrSum = arrSum + arr[j];
    if (arrSum > maxSum) {
      maxSum = arrSum;
    }
  }
}

console.log(maxSum);
