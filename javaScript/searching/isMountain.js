// check this array fillow the mountain rule or not



let arr = [10,20,30,50,11,7,3,1];

function checkPeak(arr){
    let max = Math.max(...arr);
    let lastIndex = arr.indexOf(max);

    if(index!=lastIndex){
        return "not a mountain Array"
    }

    let arr1 = arr.slice(0, index+1);
    let arr2 = arr.slice(index);
}


if(checkInc(arr1)&& checkDec(arr2)){
    console.log("Mountain");
}
else{
    console.log("Not");
}