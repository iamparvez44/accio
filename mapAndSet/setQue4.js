// Q6. Count frequency of each number using Map.
// Input: [1,1,2,3,3,3]
// Output: {1:2, 2:1, 3:3}

let Input = [1,1,2,3,3,3];

let map = new Map();

for(let key of Input){

    if(map.has(key)){
        map.set(key, map.get(key)+1);
    }
    else{
        map.set(key, 1);
    }

}


console.log(map);