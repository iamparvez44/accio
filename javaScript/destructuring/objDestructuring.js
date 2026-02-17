// let obj = {
//     a:10,
//     b:20,
//     c:30
// }

// let {a:x, b:y, c:z} = obj;

// if we make same name 

// let {a,b,c} = obj;

// console.log(a);

function hello({name, city}){

    console.log(name, city);
}

hello({name: "Abhi", city: "Noida"});