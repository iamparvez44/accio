// class Car {
//   constructor() {
//     this.numberOfWheels = 4;
//   }

//   ruls() {
//     console.log("car should have wheels => " + this.numberOfWheels);
//     console.log("car should have engine");
//     console.log("car should have seats");
//     console.log("car should have doors");
//     console.log("car should have windows");
//     console.log("car should have lights");
//   }
// }

// class Tesla extends Car {
//   constructor() {
//     super();
//     this.numberOfWheels = 9;
//   }

//   ruls() {
//     super.ruls();
//     console.log("HEY THIS IS EXTRA RULE");
//   }
// }

// let car = new Car();
// let tesla = new Tesla();
// car.ruls();

// console.log("#########################################################");

// tesla.ruls();

class Parant {

    constructor(){
        console.log("Parant");
    }

  hello() {
    console.log("Helloooooo");
  }
}

class Child extends Parant {
  constructor() {
    super();
    console.log("Child");
    console.log("child2");
  }
}

let obj = new Child();

obj.hello();
