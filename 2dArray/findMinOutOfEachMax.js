let matrix = [
              [5,8,6,13], // 13
              [8,3,6,16], // 16
              [25,5,1,0,], // 25
              [6,4,3,10] // 10
            ];

let min = Infinity;

for(let i=0; i<matrix.length; i++){
    let max = matrix[i][0];

    for(let j=0; j<matrix[i].length; j++){

        if(max < matrix[i][j]){
            max = matrix[i][j];
        }

    }

    if(min > max){
        min = max;
    }

}

console.log(min);