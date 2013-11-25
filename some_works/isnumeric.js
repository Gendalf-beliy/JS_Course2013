'use strict'

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
//isFinite(n) преобразует аргумент к числу и возвращает true, если это не Infinity/-Infinity/NaN.
// parseFloat(true/false/null/'') вернёт NaN для этих значений.
console.log(isNumeric(0.23));