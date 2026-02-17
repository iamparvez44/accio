let arr = [3, -4, 5, 4, -1, 7, -8];

let maxSum = -Infinity;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];

  if (maxSum < sum) {
    maxSum = sum;
  }

  if (sum < 0) {
    sum = 0;
  }
}

console.log(maxSum);
