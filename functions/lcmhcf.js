let a=12;
let b=3;

let max = 0;

if(a>b){
max = a;
}
else{
    max = b;
}

let lcm = 0;
for(let i=max;i<Infinity;i++){
    if(i%a==0&&i%b==0){
        lcm = i;
        console.log(lcm);
        break;
    }
}

let hcf = a*b/lcm;
console.log(hcf); 