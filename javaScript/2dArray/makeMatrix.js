// you have given an 1d array and now you need to return matrix in form of 2d array

let arr = [10,20,30,40,50,60,70,80,90];

let count = 0;
let brr = [];

for(let i=0; i<=2; i++){

    let innerArr = [];

    for(let j=0; j<=2; j++){
        innerArr.push(arr[count]);
        count = count+1;
    }

    brr.push(innerArr);

}

console.log(brr);