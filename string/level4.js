// Replace "dog" with "cat" in "I love my dog".
// (Use: replace())

// let animal = "dog";



// console.log(animal.replace("dog", "cat"));
// console.log(animal);








//Replace all "is" with "was" in "This is a string, this is nice".
// (Use: replaceAll())

// let str = "This is a string, this is nice";

// let arr = str.split(" ");

// for(let i=0; i<arr.length; i++){
//     if(arr[i]=="is"){
//         arr[i] = "was";
//     }
// }

// console.log(arr.join(" "));







//Remove extra spaces from " Hello World ".
// (Use: trim(), trimStart(), trimEnd())

// let str = " Hello World ";

// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());






//Q Convert "app_dsd_sdda" to camelCase → "appDsdSdda".
// (Use: split(), toUpperCase(), slice())

// let str = "app_dsd_sdda";

// let part = str.split("_");

// console.log(part);

// for(let i=1; i<part.length;i++){
//     part[i] = part[i].charAt(0).toUpperCase() + part[i].slice(1);
// }


// let camelCaseStr = part.join("");
// console.log(camelCaseStr);





//Pad "123" with "0" on the left until its length becomes 5 → "00123".
// (Use: padStart())

// let num = "123";

// console.log(num.padStart(5,"0"));





// Q=Pad "ID" with "*" at the end to make it length 6 → "ID****".
// (Use: padEnd())

// let cardNum = "25668547895521";

// let last4Dig = cardNum.slice(-4);

// let hiddenNum = last4Dig.padStart(cardNum.length, "*")

// console.log(hiddenNum);



//Create "ha ha ha ha" using a single line of code.
// (Use: repeat())

// console.log("ha ".repeat(4));






//Q Replace all spaces in "Hello World JS" with "-".
// (Use: split(), join(), or replaceAll())


// let str = "Hello World JS";

// console.log(str.replaceAll(" ", "-"));