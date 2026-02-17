// you are given an array and you need to check is it palindrome or not.

let arr = [30, 20, 30];

// this function is to make subArrays of the given array

function subArray(arr){

    for(let i=0; i<arr.length; i++){

        for(let j=i; j<arr.length; j++){
            console.log(arr.slice(i, j+1));
            checkPalindrome(arr.slice(i, j+1));

        }

    }

}



// this function is responsible to check that array is palindrome or not

function checkPalindrome(arr) {
  let brr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    brr.push(arr[i]);
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == brr[i]) {
      count++;
    }
  }


  if (count == arr.length) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}



subArray(arr);