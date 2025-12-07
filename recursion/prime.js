function checkPrime(n, k=2){

    if(k==n){
        console.log("Prime Number");
        return;
    }

    if(n%k!==0){
       checkPrime(n, k+1);
    }
    else{
        console.log("Not Prime");
        return;
    }

}

