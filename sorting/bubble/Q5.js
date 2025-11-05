// Sort array of strings using Bubble Sort (lexicographical order).
// 👉 Input: ["banana", "apple", "cherry"]
// 👉 Output: ["apple", "banana", "cherry"]

let fruit = ["banana", "apple", "cherry"];

for(let i=0; i<fruit.length-1; i++){

        for(let j=0; j<fruit.length-1-i; j++){

            if(fruit[j].localeCompare(fruit[j+1])==1){
                let temp = fruit[j];
                fruit[j]= fruit[j+1];
                fruit[j+1] = temp;
            }
        }
}

console.log(fruit);