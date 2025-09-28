// q1: create an object {name , email, age} and rename the key "name" => full-name;

// let obj = {
//   name: "Parvez Alam",
//   email: "Parvez.alam44@gmail.com",
//   age: 26,
// };

// console.log(obj);

// obj["full-name"] = obj.name;
// delete obj.name;

// console.log(obj);




// q2: take two object and combine both without using spread or object assign.

// let obj1 = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// let obj2 = {
//     d: 40,
//     e: 50,
//     f: 60
// }

// let obj3 = {};

// for(let key in obj1){
//      obj3[key] = obj1[key];
// }

// for(let key in obj2){
//     obj3[key] = obj2[key];
// }

// console.log(obj3);


//q3: take two obje and combine both without using spread or object assign but if key already 
// exist and multiply value in array

// let obj1 = {
//     a: 10,
//     b:20,
//     c: 30,
//     r: 1000
// }

// let obj2 = {

//     d:500,
//     a:100,
//     b:200,
//     c:1000

// }

// for(key in obj2){

//     if(key in obj1){
//         let v1 = obj1[key];
//         let v2 = obj2[key];
//         obj1[key] = [v1,v2];
//     }
//     else{
//         obj1[key] = obj2[key];
//     }

// }

// console.log(obj1);

// q4: take an object check if a perticular key exist or not.

let obj = {
    myName: "Parvez"
}

// q5:take an object and check if a perticular value exist or not.

// q7: flat all keys of object in outer object. means a object is given and there is nested object
// is present then your task is to extract all nested keys in outer array.

//q6: catch eorro and print msg in place of eorro if key is not exist and we trying to print that



let user = {
    name: {
        first: "parvez",
        last: "alam"
    },
    address: {
        city: "Noida",
        house: 56
    },
    favourite: {
        books: {
            fiction: "harry pooter"
        }
    }
}

for(key in user){
    if(key !== key){
        console.log("plese write correct key");
    }


}

