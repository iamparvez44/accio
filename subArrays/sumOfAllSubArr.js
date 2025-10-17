let arr = [1, 2, 3];

let res = 0;

for (let i = 0; i < arr.length; i++) {  // i=0
  let sum = 0; 
  for (let j = i; j < arr.length; j++) { 
    
    console.log(arr[j]);

    sum = sum + arr[j];
     res = res + sum;

  }

 
}

console.log(res);
