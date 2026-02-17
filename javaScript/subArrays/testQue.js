// Given an array of n integers where n > 1, return an array output such that output[i] is equal to the sum of all the elements of nums except nums[i]. All integers in array are greater than 0.

// Input Format
// First line consists of an integer n which is the number of elements in array

// Next n lines correspond to n elements of array

// Output Format
// Return the resultant array as asked in question.

// Example 1
// Input

// 4
// 4 3 2 10

// Output

// 15 16 17 9


let arr = [4, 3, 2, 10];

console.log(myFunc(arr))



function myFunc(arr){

    let brr = [];

    for(let i=0; i< arr.length; i++){

        let sum = 0;

        for(let j=0; j< arr.length; j++){
            if(i==j){
                continue;
            }
            else{
                sum += arr[j];
            }
        }

        brr.push(sum);

    }

    return brr;

}