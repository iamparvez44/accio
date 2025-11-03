// Q1:-Given a string "javascript", print the first, middle, and last character using different methods.
// (Use: charAt(), [index], at())

// let str = "javascript";
// let l = str.length;

// console.log(str.charAt(0));
// console.log(str[parseInt((l)/2)]);
// console.log(str.at(l-1));


// console.log(`${str.charAt(0)} ${str[4]} ${str.at(9)}`);





//Q2:- Write a program to count how many times the letter 'a' appears in "banana".
// (Use: charAt() or [i] inside a loop)

// let fruit = "banana";

// let count = 0;

// for(let i=0; i<fruit.length; i++){
//     if(fruit.charAt(i)=="a"){
//         count++;
//     }
// }

// console.log(count);




//Q3 Convert the string "HELLO WORLD" to lowercase, and "good morning" to uppercase.
//(Use: toLowerCase(), toUpperCase())

// let str1 = "HELLO WORLD";
// let str2 = "good morning";

// console.log(str1.toLowerCase());
// console.log(str2.toUpperCase());




// Q4 Check if the string "parvezalam" contains "vez".
//(Use: includes())

// let name = "parvezalam";

// console.log(name.includes("am"));



// Q5 Check if "HelloWorld" starts with "Hello" and ends with "ld".
//(Use: startsWith(), endsWith())

// let str = "HelloWorld";

// console.log(str.startsWith("Hello"));
// console.log(str.endsWith("ld"));


//Q6 Find the first and last index of "is" in "This is a string, this is cool".
// (Use: indexOf(), lastIndexOf())

// let str = "This is a string, this is cool";

// let firstIdx = str.indexOf("is");
// let lastIdx = str.lastIndexOf("is");

// console.log("first", firstIdx);
// console.log("last", lastIdx);


// Q7 Find the position of the first vowel (a, e, i, o, u) in "rhythm".
// (Use: search() with RegExp)




//Q8Extract "World" from "HelloWorld" in 3 different ways.
//(Use: slice(), substring(), substr())

// let str = "HelloWorld";
// let l = str.length;

// console.log(str.slice(5, l));
// console.log(str.substring(5, l));
// console.log(str.substr(5, l));



// Q9 From the string "parvez", extract the last three letters using negative indexes.
// (Use: slice(-3))

// let name = "parvez";

// console.log(name.slice(-3));


//Extract the first name and last name from "John_Doe".
//(Use: split("_"))

// let name = "John_Doe";

// let newName = name.split("_");

// for(let t of newName){
//     console.log(t);
// }

// OR

// let name = "John_Doe";

// let [firstName, lastName] = name.split("_");
// console.log(firstName, lastName);













