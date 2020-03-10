const sum = (a, b) => {
  return a + b
};
console.assert(7 === sum(3, 4), 'Test 1');
console.assert(9 === sum(5, 4), 'Test 2');

const obj = {
  result: 0,
  sum: function (a, b) {
    this.result = a + b
  }
}

// methods can "return" values to their objects
obj.sum(3, 4);
console.assert(7 === obj.result, 'Test 3');
obj.sum(5, 4);
console.assert(9 === obj.result, 'Test 4');
