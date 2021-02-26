/* Perfect square: A number that is the prduct of 2 identical factors.
ex: 6*6 = 36(perfect square)
*/

var isSquare = function (n) {

  if (n < 0) {
    return false;
  } else {
    let x = Math.sqrt(n);
    let y = Number.isInteger(x);
    if (y == false) {
      return false;
    } else {
      return true;
    }
  }
};
isSquare(3);
