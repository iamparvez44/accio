// let arr = [10,20,30,40,50,60,70,80];

// let x = 200;

// let flag = false;

// for(t of arr){
//     if(t == x){
//         flag = true;
//         console.log("found");
//         break;
//     }
// }

// if(flag == false){
//     console.log("Not Found");
// }

// let arr = [10,20,30,40,50,60,70,80];

// let x = 500;
// let flag = false;

// for(let t of arr){
//     if(t==x){
//         console.log("found");
//         flag = true;
//         break;
//     }
// }

// if(flag==false){
//     console.log("Requred Number not found");
// }

// print index of all the search element in the given array

// let arr = [40,10,20,30,40,50,60,40,70,80, 40];

// let x = 400;
// let flag = false;

// for(let i=0; i<arr.length; i++){

//     if(x==arr[i]){
//         console.log(i);
//         flag = true
//     }

// }

// if(flag==false){
//     console.log(-1);
// }

// in a sorted array find the last occurance of targeted number

// let arr = [1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,5,5,5,];

// let x = 4;

// for(let i = arr.length-1; i>=0; i--){
//     if(x==arr[i]){
//         console.log(i, arr[i]);
//         break;
//     }
// }

// find the point where mountain formed;
let arr = [1, 3, 5, 8, 4, 10, 2];

let largest = arr[0];
let largestIdx = -1;


let isMountain = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
    largestIdx = i;
  }
}

for(let i = largestIdx; i<arr.length; i++){
    if(arr[i]>largest){
        isMountain = true;
    }
}

if(isMountain==false){
    console.log("the peek of the mountain is ",largest);
}
else{
    console.log("this array is not a mountain array");
}
