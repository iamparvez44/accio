
// Write a function to search for a target element in an array using linear search and return its index, or -1 if not found.
// Example: arr = [2, 5, 8, 1, 9], target = 8 → output: 2

// function linearSearch(arr, target){

//     for(let i=0; i<arr.length; i++){

//         if(arr[i]== target){
//             return i;
//         }

//     }

//     return -1;

// }

// console.log(linearSearch([2, 5, 8, 1, 9], 23) );








//Modify the above function to return all indices where the target element occurs.
// Example: arr = [1, 2, 3, 2, 4, 2], target = 2 → output: [1, 3, 5]

// function myFnc(arr, target){

//     let idxArr = [];

//     for(let i=0; i<arr.length; i++){

//         if(arr[i]==target){
//             idxArr.push(i);
//         }

//     }

//     if(idxArr.length==0){
//         return -1;
//     }

//     return idxArr;

// }

// console.log(myFnc([1, 2, 3, 2, 4, 2], 2));








// //Write a function that returns the first and last occurrence index of a target in the array.
// // Example: arr = [5, 3, 7, 3, 9], target = 3 → output: [1, 3]

// function myFnc(arr, target){

//     let idxArr = [];

//     // for first occurance

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==target){
//             idxArr.push(i)
//             break;
//         }
//     }

//     // for last occurance

//      for(let i=arr.length-1; i>=0; i--){
//         if(arr[i]==target){
//             idxArr.push(i)
//             break;
//         }
//     }

//     if(idxArr.length==0){
//         return -1;
//     }

//     return idxArr;



// }

// console.log(myFnc([5, 3, 7, 3, 9], 3));








//Given an array of objects like
//Write a linear search function to return all users with the name "Amit".

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Ravi" },
  { id: 3, name: "Amit" },
];

let a = 97;
console.log();