function sort(arrayOfStrings) {

  if (!Array.isArray(arrayOfStrings)) {
    console.log("wrong input!");
    return;
  }

  for (var i=0; i<arrayOfStrings.length-1; i++) {
    for (var j=0; j<arrayOfStrings.length-1-i; j++) {
      var string1 = arrayOfStrings[j];
      var string1firstLetter = string1[0];
      var string2 = arrayOfStrings[j+1];
      var string2FirstLetter = string2[0];

      if (string1firstLetter>string2FirstLetter) {
        arrayOfStrings[j] = string2;
        arrayOfStrings[j+1] = string1;
      }
    }
  }

  console.log(arrayOfStrings);
}
sort(["qwerty", "asdfg", "zxcvb", "poiuy", "lkjhg", "mnbvc"]);

function findLongest(arrayOfStrings) {
  if (!Array.isArray(arrayOfStrings)) {
    console.log("wrong input!");
    return;
  }

  var longest = arrayOfStrings[0];

  for (var i=1; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length>longest.length) {
      longest=arrayOfStrings[i];
    }
  }
  console.log (longest);
  return longest;
}

findLongest(["qwerty", "asdfgtt", "zxcvbttt", "poiuytttt", "lkjhgttttt", "mnbvcttt"]);