// Q2. Check if an array has duplicate elements using Set.
// Input: [3,1,4,3]
// Output: true   // (because duplicate exists)

let arr = [3,1,4,3];

let set = new Set([...arr]);

// console.log(set.size);
// console.log(arr.length);

if(arr.length!==set.size){
    console.log("true");
}
else{
    console.log("false");
}