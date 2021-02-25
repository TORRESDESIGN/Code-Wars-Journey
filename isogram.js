//console.log func
function c(str) {
  console.log(str);
}

function isIsogram(str) {
  var splitStr;

  if (str.length < 1) {
    c(true);
    return;
  } else {
    splitStr = str.toLowerCase().split("");
    for (i = 0; i < splitStr.length; i++) {
      for (j = i + 1; j < splitStr.length; j++) {
        if (splitStr[i] == splitStr[j]) {
          c(false);
          c(`i = ${splitStr[i]} | j = ${splitStr[j]}`);
          return;
        }
      }
    }
    c(true);
    return;
  }
}

isIsogram("dodg");

/*
 Isogram checker
1. convert string to an array -*
2. Grab/remove first index of array 
3. Compare/loop with the rest of letters to make sure letter does not repeat
4. If it repeats, return with 'false'
5. If not, repeat steps with the next letter
*/