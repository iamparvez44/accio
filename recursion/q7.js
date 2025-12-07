// find the length of the string using recursion

function strLength(str, i=0){

    if(str[i] == undefined){
        return i;
    }

    return strLength(str, i+1);

}

console.log(strLength("ram"));