const reverseString = function(string) {
  strArray = string.split('')
  strArray = strArray.reverse()
  reversedStr = strArray.join('')

  return reversedStr
};

reverseString('hello')
// Do not edit below this line
module.exports = reverseString;
