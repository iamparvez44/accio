let n = 2256582;
let num = 2;
let freq = 0;

while(n>0){
    let lastDigit = n%10;
    n = parseInt(n/10);

    if(lastDigit == num){
        freq = freq + 1;
    }
}

console.log(freq);