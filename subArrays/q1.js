// you are given an array and you need to create all possible sub arrays from that array

let arr = [10,20,30,40];

for(let i=0; i<arr.length; i++){  // i = 0

    for(let j=i; j<arr.length; j++){   // j=0, i = 0
        console.log(arr.slice(i, j+1)); //[10], [10,20]   
    }
}