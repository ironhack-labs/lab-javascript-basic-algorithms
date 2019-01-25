var hacker1 = "Mike";
var hacker2 = "Aoberto";
var orderedHackers = [];

orderedHackers.push(hacker1);
orderedHackers.push(hacker2);

orderedHackers.sort();

if(hacker1 === hacker2){
  console.log("What?! You both got the same name?");
}
else if (orderedHackers[0] == hacker1){
  console.log("The driver's name goes first");
}
else {
  console.log("Yo, the navigator goes first definitely");
}

// EXERCISE 9
function getCharsOnly(str){
  var desired = str.replace(/[^\w\s]/gi, '');
  var characters = desired.split(" ");
  var onlyCharacters = characters.join("");
  return onlyCharacters;
}


function isPalindrome(phrase){

  var toCompare = getCharsOnly(phrase);
  
  var array = toCompare.split("");
  var upsideDown = array.reverse();
  var comparable = upsideDown.join("");
  
  if(toCompare.toLowerCase() == comparable.toLowerCase()){
    console.log("It is palindrome.");
  }
  else {
    console.log("It is not palindrome.");
  }

}
isPalindrome("Was it a car or a cat I saw?");
