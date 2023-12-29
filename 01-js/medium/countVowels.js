/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  clean = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const n = clean.length;
  var count = 0
  for (let i = 0; i < n; i++) {
    if (clean[i] == 'a' || clean[i] == 'e' || clean[i] == 'i' || clean[i] == 'o' || clean[i] == 'u') {
      count = count + 1;
    }
  }
  return count;
}
console.log(countVowels("mohit"))
module.exports = countVowels;