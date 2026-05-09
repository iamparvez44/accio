// // class

// class Calculation{

//     constructor(num1, num2){

//         this.num1 = num1;
//         this.num2 = num2;

//     }

//     sum(){
        
//         return this.num1+this.num2;
//     }

//     product(){
//         return this.num1*this.num2;
//     }

//     divison(){
//         return this.num1/this.num2;
//     }

//     subtraction(){
//         return this.num1-this.num2;
//     }

// }


// let obj1  = new Calculation(10,20);
// let obj2  = new Calculation(20,20);
// let obj3  = new Calculation(20,5);

// let ans1 = obj1.sum();
// console.log(ans1);

// let ans2 = obj1.product();
// console.log(ans2);



class Calculation{

    constructor(a,b){
        this.x = a;
        this.y = b;
    }

    sum(){
        console.log(this.x + this.y);
    }

    diff(){
        console.log(this.x - this.y);
    }

    mul(){
        console.log(this.x * this.y);
    }

}


let obj1 = new Calculation(10, 20);

obj1.sum();