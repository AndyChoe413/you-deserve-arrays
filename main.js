/******************
 * YOUR CODE HERE *
 ******************/
const getFirstItemFrom = array => array[0]
const getLastItemFrom = array => array[array.length - 1]
const getIndex3 = arr => {
  if (arr.length >= 4) return arr[3]
  else return arr[arr.length - 1]
}
const isLongList = arr => arr.length >= 10 ? true:false
const firstItemIsNumber = arr => typeof arr[0] === 'number' ? true : false
const secondCharOfThirdString = arr => {
  if (typeof arr[2][1] === 'string') return arr[2][1];
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
