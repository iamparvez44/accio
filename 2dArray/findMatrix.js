// identify the given 2d array is matrix or not

let arr =[
    50,
    [10,20,30],
    [40,50,70],
    300,
    [70],
    100,
    [65,66,67,100],
    [7000,800,900],
];
for(let i=0; i<arr.length; i++){
    if(typeof arr[i] != "object"){
        console.log("Not a matrix 0");
    }
    
}


