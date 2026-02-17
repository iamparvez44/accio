// find a rais to the power b using recursion

function power(a, b){

    if(b==1){
        return a;
    }

    return a* power(a, b-1)
}

console.log(power(2,5));