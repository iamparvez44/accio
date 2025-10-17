// let n = 97;

// console.log(String.fromCharCode(n));


// let s1 = "Ramesh";
// let s2 = "Rakesh";

// console.log(s1 < s2);

// let str = "R";

// let asciCode = str.charCodeAt();


let str = "D";

n = str.charCodeAt();

if(str >='A' && str <='Z'){
    n = n +32;
}
else if(str>='a' && str<='z'){
    n = n-32;
}

console.log(String.fromCharCode(n));

