const sumAll = function(int1, int2) {
  if (typeof int1 !== 'number' || typeof int2 !== 'number') {
    return 'ERROR'
  }

  if (int1 < 0 || int2 < 0) {
    return 'ERROR'
  }

  let rangeStart
  let rangeEnd

  if (int1 > int2) {
    rangeStart = int2
    rangeEnd = int1
  } else {
    rangeStart = int1
    rangeEnd = int2
  }

  let sum = 0

  for (let i = rangeStart; i <= rangeEnd; i++) {
    sum += i
  }

  return sum
};

// Do not edit below this line
module.exports = sumAll;
