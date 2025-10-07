let matrix = 
 [
    [5,8,6,13], 
    [8,3,6,65], 
    [25,5,1,47], 
    [1,2,3,4]
   
 ];

 for(let i=0; i<matrix.length; i++){

    if(i%2==0){
        for(j=0; j<matrix[i].length; j++){
        console.log(matrix[i][j]);
    }
    }
    else{

            for(j=matrix[i].length-1; j>=0; j--){
        console.log(matrix[i][j]);
    }

    }

 }