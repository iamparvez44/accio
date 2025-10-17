
let arr = [1, 2, 6, 10, 18, 54];

for(let i=0; i<=arr.length-3; i++){

    for(let j=i+1; j<=arr.length-2; j++ ){

        for(let k=j+1; k<=arr.length-1; k++){
            if((arr[j]**2)== arr[i]*arr[k]){
                console.log(arr[i],arr[j], arr[k]);
            }
        }
    }

}
