// Write a function that takes an array and returns a new array with the elements reversed.
// Example:
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]
function reverseArray(arr) {
  let n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i -1] = temp;
  }
}

const arr = [1, 2, 3, 4];

reverseArray(arr);
console.log(arr);

// Write a function that removes duplicate numbers from an array and returns a new array with only unique values.
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
let arr1 = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr1) {
  return arr1.filter((item, index) => arr1.indexOf(item) === index);
}

console.log(removeDuplicates(arr1));

// Write a function that sorts an array of numbers in ascending order (smallest to largest).
// Example:
// Input: [5, 2, 9, 1, 5, 6]
// Output: [1, 2, 5, 5, 6, 9]
const arr2 = [5, 2, 9, 1, 5, 6]

function sortArray(arr2) {
  return arr2.sort(function(a,b){return a-b});
}

console.log(sortArray(arr2));

// You have a synchronous function that returns a greeting message with your name.
// Your task is to convert it into an asynchronous function that returns a Promise,
function syncGreet(name) {
  return `Hello, ${name}!`;
}

function asyncGreet(name) {
    return new Promise((resolve, reject) => {
      resolve(`Hello, ${name}!`);
  });
}

asyncGreet("Le").then(msg => console.log(msg)); 

module.exports = {
  reverseArray,
  removeDuplicates,
  sortArray,
  asyncGreet,
};
