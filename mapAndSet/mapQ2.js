let arr = [10,2,4,5,3,7,9,11];
let sum = 7;

let map = new Map();

for(let t of arr){
    map.set(t, 1);
}


for(let t of arr){

    let first = t;
    let second = sum-first;

    if(map.has(second)==true){
        console.log(first, second);
        break;
    }
}