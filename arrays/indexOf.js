let arr = [2, 4, 1, 6, 7];

let evenInd = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]>0 && arr[i]%2==0){
        evenInd.push(i);
    }
}

if(evenInd.length<2){
    return -1;
}


console.log(evenInd);