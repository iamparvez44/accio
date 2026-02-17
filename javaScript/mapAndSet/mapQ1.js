let arr = [10,20,10,30,10,20,10,20,30,10,20];

let map = new Map();

for(let t of arr){

    if(map.has(t)){
        let prevVal = map.get(t);
        map.set(t, prevVal+1);
    }
    else{
        map.set(t,1);
    }
}

console.log(map);