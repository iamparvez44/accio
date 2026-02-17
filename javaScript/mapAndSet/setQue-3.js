// Q4. Given two arrays, find their intersection using Set.
// arr1 = [1,2,3,4]
// arr2 = [3,4,5,6]

// Output: [3,4]


let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];

let set = new Set();
let res = [];

for(let i of arr1){
    set.add(i);
}

for(let i of arr2){
    if(set.has(i)){
        res.push(i);
    }
}

console.log(res);


