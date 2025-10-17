// you are given an array and you need to create all possible sub arrays from that array

// let arr = [10,20,30];

// for(let i=0; i<arr.length; i++){  // i = 0

//     for(let j=i; j<arr.length; j++){   // j=0, i = 0
//         console.log(arr.slice(i, j+1)); //[10], [10,20]   
//     }
// }


let arr = [8, 6, 3, 4, 5, 9, 12, 7, 20, 22, 31, 38];

let subArr = [];

for(let i=0; i < arr.length-3; i++){

    if(arr[i]< arr[i+1]&&
        arr[i+1]< arr[i+2]&&
        arr[i+2]< arr[i+3]
    ){
        subArr.push(arr.slice(i, i+4));
    }

    console.log(subArr);

}