let arr = [10,20,30,40,50];

let x = arr.map(display);

function display(val, idx){
    return val* val;
}

console.log(x);