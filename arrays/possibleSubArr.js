// print all possible sub arrays of 3 digits

let arr = [10,20,30,40,50,60,70];

for(let i=0; i<=arr.length; i++){

    let subArr = [];

    for(let j=i; j<=3; j++){
        subArr.push(arr[i]);
    }
    console.log(subArr);


}