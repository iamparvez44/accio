let arr = [10,20,30,40,50,60,70,80];

let x = 200;

let flag = false;

for(t of arr){
    if(t == x){
        flag = true;
        console.log("found");
        break;
    }
}

if(flag == false){
    console.log("Not Found");
}