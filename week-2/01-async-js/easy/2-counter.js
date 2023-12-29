// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;
const updateCounter = () => setTimeout(() => (console.log(`${++count}`), updateCounter()), 1000);
updateCounter()

// (Hint: setTimeout)
// Fundamentally setInterval and setTimeout are very different.