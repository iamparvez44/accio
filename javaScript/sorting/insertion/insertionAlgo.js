// the given array is sorted till 8 only we need to place 5 at its right position.

let arr = [1,4,6,8,5]  //===========>[1,4,5,6,8]

for(let i=arr.length-1; i>=0; i--){

    if(arr[i]<arr[i-1]){
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
    else{
        break;
    }

}

console.log(arr);