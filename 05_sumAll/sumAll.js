const sumAll = function(int1, int2) {
  if (typeof int1 !== 'number' || typeof int2 !== 'number') {
    return 'ERROR'
  }

  let sum = 0

  for (let i = int1; i <= int2; i++) {
    sum += i
  }

  return sum
};

// Do not edit below this line
module.exports = sumAll;
