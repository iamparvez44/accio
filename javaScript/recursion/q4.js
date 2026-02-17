// find sum of numbers

// function sum(n, add = 0) {
//   if (n == 0) {
//     return add;
//   }

//   add = add + n;
//   return sum(n - 1, add);
// }

// let ans = sum(5);
// console.log(ans);





// another method

function sum(n){

    if(n==0){
        return 0;
    }

    return n + sum(n-1);

}

let ans = sum(4);
console.log(ans);
