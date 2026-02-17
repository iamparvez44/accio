// Q1. Remove duplicates from an array using Set.
// Input: [1,2,2,3,4,4,5]
// Output: [1,2,3,4,5]


let arr =  [1,2,2,3,4,4,5];

let output = new Set([...arr]);

console.log(output);

let res = [];

for(let i of output){
    res.push(i);
}

console.log(res.join(" "));