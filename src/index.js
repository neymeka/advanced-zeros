module.exports = function getZerosCount(number, base) {
  var dividers = [];
  var counter = 0;
  var baseCopy = base;
  var Zeros = Infinity;
  for (i = 2; i <= baseCopy; i++) {
      if (baseCopy % i == 0) {
        var power = 0
        while (baseCopy % i == 0) {
          power++;
          baseCopy /= i;
        }
  var result = 0;
  var iCopy = i;
  do {
    counter = Math.floor(number / iCopy);
    iCopy *= i;
    result += counter;
  } while (counter != 0) ;

  var testValue = Math.floor (result / power);
    if (testValue < Zeros) {
      Zeros = testValue;
      }
    }
  }
  return Zeros;
}
