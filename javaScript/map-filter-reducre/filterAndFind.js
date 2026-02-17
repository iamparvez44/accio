// let arr = [10,21,30,43,50];

// let x = arr.filter((val,idx)=> {return val%2==0});

// console.log(x);


// find

// arr = [10,21,30,40,50];

// let x = arr.find((val)=> {return val%2!==0});

// console.log(x);



// let arr = [

//     {name: "ramesh", 
//      age: 18   
//     },
//     {name: "mohan", 
//      age: 16   
//     },
//     {name: "sohan", 
//      age: 46   
//     },
//     {name: "vinod", 
//      age: 20   
//     },

// ];


//  let x = arr.filter(
    
//     (obj)=>{
//        if( obj.age>=18){
//         return obj.name;
//        }
//     }


// );

// let y = x.map(val =>{return val.name});

// console.log(x);
// console.log(y);


// const top20Countries = [
//   "India",
//   "China",
//   "United States",
//   "Indonesia",
//   "Pakistan",
//   "Nigeria",
//   "Brazil",
//   "Bangladesh",
//   "Russia",
//   "Mexico",
//   "Ethiopia",
//   "Japan",
//   "Philippines",
//   "Egypt",
//   "Vietnam",
//   "DR Congo",
//   "Iran",
//   "Turkey",
//   "Germany",
//   "Thailand"
// ];


// q1:- give me only those countries which has both i and a in their name


// let a = top20Countries.filter(country => country.toLowerCase().includes("i") && country.toLowerCase().includes("a"));

// console.log(a);








// q2 return all contries by inversing its all character

// let ans = top20Countries.map(
//     (country)=>{

//         let arr = country.split("");

//         let crr = arr.map(
//             (ch)=>{

//                 if(ch>="a" && ch<="z"){
//                     return ch.toUpperCase();
//                 }
//                 else if(ch>="A" && ch<="Z"){
//                     return ch.toLowerCase();
//                 }
//                 else{
//                     return ch;
//                 }
//             }

//         )

//         return crr.join("");

//     }

// );

// console.log(ans);


//q3 return omly true values

let arr1 = [0,101,undefined, 399 ,NaN, 20, "", 10, true, false];

let ans = arr1.filter(val=> val);
console.log(ans);