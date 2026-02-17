// take a string and check if it has any duplicate character or not.

let str = "parvez";
let beforeL = str.length;

let s = new Set(str);

let newStr = [...s].join("");

let afterL = newStr.length;

if(beforeL==afterL){
    console.log("Not dublicate");
}
else{
    console.log("yes");
}
