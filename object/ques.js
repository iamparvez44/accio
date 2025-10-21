// Q1 Create an object person with properties name, age, and city.
//➤ Print each property using both dot notation and bracket notation.

// let user = {
//     name: "Parvez",
//     age: 27,
//     city: "Delhi"
// }

// dot notation

// console.log("This is using dot notation",user.name, user.age, user.city);

//bracket notation.

// console.log("This is using bracket notation",user["name"], user["age"], user["city"]);

// Q2 Add a new property gender to the existing person object.
//➤ Then delete the city property.

// user.gender = "male";

// delete user.city;

// console.log(Object.entries(user));

// Q3 Check if a property called "age" exists inside person using the in operator.

// let user = {
//     name: "Parvez",
//     age: 27,
//     city: "Delhi"
// }

// console.log("age" in user);

// Q4 Loop through all properties of person using a for...in loop and print key-value pairs.

// let user = {
//     name: "Parvez",
//     age: 27,
//     city: "Delhi"
// }

// for(let keys in user){
//     console.log(keys + " "+ user[keys]);
// }

//Q5 Create an object with a multi-word key like "home address".

// let user = {
//     "home address": "Bilari",
//     "my gender": "male"
// }

// for(let val in user){
//     console.log(val, user[val]);
// }

// console.log(user["home address"], user["my gender"]);

// Q6 Create a nested object user:

// let user = {
//   name: "Parvez",
//   address: {
//     city: "Moradabad",
//     pincode: 244001
//   }
// };

// console.log(user.address["pincode"]);

// Q7 Add a method inside user called greet() that prints "Hello, <name>".

// let user = {
//   name: "Parvez",

//   greet: function hello() {
//     console.log(`Good morning ${this.name}`);
//     return 10;
//   },

//   address: {
//     city: "Moradabad",
//     pincode: 244001,
//   },
// };

// let a = user.greet();

// console.log(a);

// console.log(user.greet());





// Q8 Create an array of 3 objects named students, each with id, name, and marks.
//➤ Print names of all students who scored more than 75.

let student = [

    {
        name: "parvez",
        id:123,
        marks: 84
    },
    {
         name: "qasid",
        id:456,
        marks: 78
    },
    {
         name: "arshad",
        id:265,
        marks: 55
    }
   
];

for(let i=0; i<student.length; i++){
    if(student[i].marks>75){
        console.log(student[i].marks);
    }
}
