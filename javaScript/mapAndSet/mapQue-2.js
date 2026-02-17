// Q7. Count frequency of each word in a string using Map.
// Input: "hello hello world"
// Output: {hello: 2, world: 1}

let input = "hello hello world";

let arr = [];
let word = "";

for(let i=0; i<input.length; i++){

    

    if(input[i]!==" "){
        word += input[i];
    }
    else{
        arr.push(word);
        word = "";
    }

    if(i==input.length-1){
        arr.push(word);
    }

  

}

//   console.log(arr);


let map = new Map();

for(let val of arr){
    if(map.has(val)){

        map.set(val, map.get(val)+1);

    }
    else{
        map.set(val, 1);
    }
}

// console.log(map);

let obj = Object.fromEntries(map);

console.log(obj);

