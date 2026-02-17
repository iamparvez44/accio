// Compare "apple" and "Banana" alphabetically (lexicographically).
// (Use: localeCompare())

// let str1 = "banana";
// let str2 = "apple";

// let result = str1.localeCompare(str2);

// if (result < 0) {
//   console.log(`${str1} comes before ${str2}`);
// } else if (result > 0) {
//   console.log(`${str1} comes after ${str2}`);
// } else {
//   console.log(`${str1} and ${str2} are equal`);
// }

let str = "ParVEz";

let toggle = "";

for(let i=0; i<str.length; i++){
    let char = str[i];

    if(char === char.toUpperCase()){
        toggle += char.toLowerCase();
    }
    else{
        toggle += char.toUpperCase();
    }
}

console.log(toggle);