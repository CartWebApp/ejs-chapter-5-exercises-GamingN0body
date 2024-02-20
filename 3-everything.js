function every(array, test) {
  let sum = 0;
  for (let x = 0; x => array.length; x++) {
    x = array[x];
  }
  return test(sum)
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true