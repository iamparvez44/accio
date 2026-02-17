// let obj = {
//     "a" : 10,
//     "b" : 20,
//     "c" : 30

// const { use } = require("react");

// }

// // for in loop

// for(let k in obj){
//     console.log(k, obj[k]);
// }


// CRUD
// this indicates that in object we can 
// Create
// Read
// Update 
// Delete

// let user = {
//     name: "parvez",
//     age: 26,
//     male: true,
//     "home address": "Moradabad"

// }

// console.log(user);

// delete user.age;

// console.log(user);



// let user = {
//     name: "parvez",
//     age: 26,
//     male: true,
//     "home address": "Moradabad"

// }

// to print all the keys, values and entries

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));



// printing all the values of objest using for in loop

// let user = {
//     name: "parvez",
//     age: 26,
//     male: true,
//     "home address": "Moradabad"

// }

// printing only keys

// for(let keys in user){
//     console.log(keys);
// }

// printing key values together

// console.log("next loop");

// for(let keys in user){
//     console.log(keys, user[keys]);
// }




// destructuring in object


// let user = {
//     name: "parvez",
//     age: 26,
//     male: true,
//     "home address": "Moradabad"

// }

// let name = user.name;
// let age = user.age;

// let {name, male, } = user;

// console.log(name, male);

// let {name:myName, age:myAge, ["home address"]:homeAddress } = user;

// console.log(myName, myAge);



// this is how we can use for of loop in object 

// let user = {
//     name: "parvez",
//     age: 26,
//     male: true,
//     "home address": "Moradabad"

// }

// for(let keys of Object.entries(user)){
//     console.log(keys);
// }




