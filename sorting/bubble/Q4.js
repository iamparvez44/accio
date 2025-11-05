// Stop early if the array becomes sorted before all passes complete (optimized bubble sort).
// 👉 Input: [1, 2, 3, 4, 5]
// 👉 Output: No swaps — array already sorted

let arr = [2, 1, 3, 4, 5];



for(let i=0; i<arr.length-1; i++){

    let passes = false;

    for(let j=0; j<arr.length-1-i; j++){

        if(arr[j]>arr[j+1]){

            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;


            passes = true;
        }

    }

    if(passes==false){
        console.log("No Swap");
        break;
    }

    

}

console.log(arr);
