'use strict'

function checkSpam(str) {
  str = str.toLowerCase();
    return str.indexOf('viagra') >= 0 || str.indexOf('XXX') >= 0;
}
console.log( checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

