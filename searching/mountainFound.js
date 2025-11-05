let arr = [1, 6, 5,4, 3, 2, 1];

let largest = arr[0];
let largetIdx = 0;

// here we are finding the largest element and their Index

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
    largetIdx = i;
  }
}

// now we will find the from 0 to largest there is stricktly increasing order

let isIncreseing = true;
let isDecreasing = true;

for (let i = 0; i < largetIdx; i++) {
  if (arr[i] >= arr[i + 1]) {
    isIncreseing = false;
    break;
  }
}

// now find strickly decreasing

for (let i = largetIdx; i < arr.length-1; i++) {
  if (arr[i] < arr[i + 1]) {
    isDecreasing = false;
    break;
  }
}

if (isDecreasing == true && isIncreseing == true) {
  console.log("The peek of the element is ", largest);
} else {
  console.log("Not mountain");
}
