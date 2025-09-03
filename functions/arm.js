// function noOfDigits(n) {
//     let count = 0;
//     while (n > 0) {
//         n = parseInt(n / 10);
//         count++;
//     }
//     return count;

// }



// function digitSum(n) {
//     let sum = 0;
//     let pow = noOfDigits(n);

//     while (n > 0) {

//         let last = n % 10;
//         sum = sum + (last ** pow);
//         n = parseInt(n / 10);
//     }

//     return sum;
// }

// let num = 153;

// let checkArm = digitSum(num);

// if (num == checkArm) {
//     console.log(num, "is ArmNumber")
// }
// else {
//     console.log(num, "Not ArmNumber");
// }



