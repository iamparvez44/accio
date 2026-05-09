function fetchAPI1() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("api1 resolved: 10  (after 5s)");
      resolve({ data: 10 });
    }, 5000);
  });
}
function fetchAPI2() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("api2 resolved: 20  (after 2s)");
      resolve({ data: 20 });
    }, 2000);
  });
}
function fetchAPI3() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("api3 resolved: 30  (after 4s)");
      resolve({ data: 30 });
    }, 4000);
  });
}
function fetchAPI4() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("api4 resolved: 40  (after 1s)");
      resolve({ data: 40 });
    }, 1000);
  });
}
function fetchAPI5() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("api5 resolved: 50  (after 3s)");
      resolve({ data: 50 });
    }, 3000);
  });
}

let newArr = [];

let p1 = fetchAPI1();
let p2 = fetchAPI2();
let p3 = fetchAPI3();
let p4 = fetchAPI4();
let p5 = fetchAPI5();

let arr = [p1, p2, p3, p4, p5];

function logic(arr){

    let resArr = []
    let count = 0;

    for(let i=0; i<arr.length; i++){

        count++;
        arr[i].then((data)=>{
            resArr.push(data);
        })
        .catch((err)=>{
            resArr.push(err);
        })
        .finaly(()=>{

            if(count==5){
                console.log(resArr);
            }

        })


    }

}

console.log(newArr);









