// sort the array in acsending order using insertion sort

let arr = [3,1,4,2];

for(let i=1; i<arr.length; i++){

    for(let j=i; j>0; j--){

        if(arr[j]<arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
        else{
            break;
        }

    }

}

console.log(arr);