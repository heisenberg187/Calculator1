// 1. Count vowels in a string
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  // 2. Sort an array of numbers in ascending order
  function sortNumbers(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  // 3. Reverse a string
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  // 4. Get the last element of an array
  function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  
  // 5. Merge two arrays
  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  // 6. Check if a string contains a space
  function hasSpace(str) {
    return str.includes(" ");
  }
  
  // 7. Check if a string is empty
  function isEmptyString(str) {
    return str === "";
  }
  
  // 8. Remove negative numbers from an array
  function removeNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
  }
  