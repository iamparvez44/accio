// it always return a single value

// let arr = [10,20,30,40,50];

// let ans = arr.reduce((acc, val, idx) => val+acc);

// console.log(ans);



// let charArr = ["p", "a", "r","v","e","z"];

// let ans = charArr.reduce((s,val,i)=> s+val, "");

// console.log(ans);



// let charArr = ["Pamesh", "amesh", "rahesh", "vshwar", "euresh", "zitesh"];

// let ans = charArr.reduce((a, val) => a+val[0], "" );
// console.log(ans);


// let arr = [10,20,10,20,10,20,30,30,10,30,10];

// let x = arr.reduce(duplicate, []);

// function duplicate( brr, value, index){

//     if(!brr.includes(value)){

//         brr.push(value);

//     }

//     return brr;

// }

// console.log(x);



let arr = [
    {id:1, name:"Rahul", city:"Delhi"},
    {id:2, name:"Amit", city:"Mumbai"},
    {id:3, name:"Suresh", city:"Chennai"},
    {id:4, name:"Ramesh", city:"Delhi"},
    {id:5, name:"Vikram", city:"Mumbai"},
    {id:6, name:"Rajesh", city:"Kolkata"},
    {id:7, name:"Mahesh", city:"Chennai"},
    {id:8, name:"Sanjay", city:"Delhi"},
    {id:9, name:"Vijay", city:"Kolkata"},
    {id:10, name:"Ajay", city:"Mumbai"},
];

let x = arr.reduce(
    (obj, val, idx)=>{

        if(val.city in obj){

            obj[val.city].push(val.name);

        }
        else{
            obj[val.city] = [val.name];
        }

       
       return obj;
}


, {}
)

console.log(x);