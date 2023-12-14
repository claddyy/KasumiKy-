/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  lst = str.toLowerCase();
  newstr = lst.replace(/[^a-zA-Z0-9]/g, "") //imp
  const arr = newstr.split('');
  n = arr.length;
  for (var i = 0; i < n; i++) {
    if (arr[i] != arr[n - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
