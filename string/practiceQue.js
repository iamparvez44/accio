let str = "Ramesh";

// find 4th last letter of a string

let l = str.length;

console.log(str[l-4]);

// print all vowels in string

for(let i=0; i<str.length; i++){

     if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" ){
        console.log(str[i]);
    }

}
// reverse the string

let reversed = "";

for(let i=0; i<str.length; i++){
    reversed = str[i] + reversed;
}
console.log(reversed);

