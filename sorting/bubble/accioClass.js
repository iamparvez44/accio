// insertion sort

// let arr = [10, 2, 9, 0, 11, -5];

// for (let i = 1; i < arr.length; i++) {
//   let curr = arr[i];

//   let j = i - 1;

//   while (j >= 0 && arr[j] > curr) {
//     arr[j + 1] = arr[j];
//     j--;
//   }

//   arr[j + 1] = curr;
// }


// console.log(arr);






// bubble sort

let arr = [10, 2, 9, 0, 11, -5];

for(let i=0; i<arr.length; i++){

    for(let j=0; j<arr.length-1-i; j++){

        if(arr[j] > arr[j+1]) {

            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }

    }

}

console.log(arr);