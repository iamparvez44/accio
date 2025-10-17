// print the min sub array.

// let arr = [-9,-2,3];

// minArr = Infinity;

// for (let i = 0; i < arr.length; i++) {
//   cSum = 0;

//   for (let j = i; j < arr.length; j++) {
//     cSum = cSum + arr[j];

//     if (cSum < minArr) {
//       minArr = cSum;
//     }
//   }
// }

// console.log(minArr);


// using kedans alo

let arr = [-9,-2,3];

let minArr = Infinity;
let cs = 0;

for(let i=0; i<arr.length; i++){

    cs = cs + arr[i];

    if(minArr> cs){
        minArr = cs;
    }

    if(cs>0){
        cs = 0;
    }

}

console.log(minArr);
