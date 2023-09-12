const removeFromArray = function(arr, ...elems) {
  let array = arr

  for (const elem of elems) {
    let index = array.indexOf(elem)

    if (index !== -1) {
      array.splice(index, 1)
    }
  }

  return array
};

// Do not edit below this line
module.exports = removeFromArray;
