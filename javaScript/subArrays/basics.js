// print all the possible subArrays of the given array

let arr = [1,2,3];

for(st = 0; st < arr.length; st++){

    for(let ed=st; ed<arr.length; ed++ ){
        console.log(arr.slice(st, ed+1));
    }

}