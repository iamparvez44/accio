// print using recursion ==> 1 2 3 4 5 0 or -5, -4, -3, -2, -1, 0;
// denpend on input ==> if + to decrease if - then increase

function print(n) {

    if(n==0){
        console.log(0);
        return;
    }
 
    if(n>0){
        console.log(n);
        print(n-1);
    }
    else if(n<0){
        console.log(n);
        print(n+1);
    }


}

print(-5);
