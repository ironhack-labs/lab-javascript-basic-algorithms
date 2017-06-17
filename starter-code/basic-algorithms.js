var hacker1 = "Jorge";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("Who is the navigator?");
console.log("The navigator's name is " + hacker2);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!");
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var capitalizedName = "";
for (var i = 0; i < hacker1.length; i++) {
  capitalizedName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalizedName);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var reversedName = "";
for (var i = hacker2.length-1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

if(hacker1 < hacker2){
  console.log("The driver's name goes first");
}
else if(hacker2 < hacker1){
  console.log("Yo, the navigator goes first definitely");
}
else{
  console.log("What?!, You both got the same name?");
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var removeSpaces = function (sentence){
  var charactersGlued = "";
  for(var i = 0;i<sentence.length;i++){
    if(sentence[i]!== " "){
      charactersGlued += sentence[i];
    }
  }
    return charactersGlued;
};

var inputSentence = prompt("Give me a sentence to check if its a palindrome...");
var shortSentence = removeSpaces(inputSentence);

var reversedInput = "";
for (var i = shortSentence.length-1; i >= 0; i--) {
  reversedInput += shortSentence[i];
}
console.log(reversedInput);
if(shortSentence.toUpperCase() === reversedInput.toUpperCase()){
  console.log("This is a palindrome");
}
else{
  console.log("Sorry, try again");
}
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var loremString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur sapien in scelerisque egestas. Morbi purus neque, sollicitudin in lectus nec, placerat egestas lacus. Integer sit amet vehicula lorem, vitae eleifend mauris. Ut elementum blandit quam. Nulla convallis nec leo at mattis. Nunc felis tellus, gravida et velit ut, varius vulputate sem. Fusce non diam at lorem tempus laoreet at quis eros. Suspendisse sed tempus ante. Proin mi dolor, maximus ut arcu quis, ultrices mollis eros. Proin non tincidunt nisl, in rutrum mauris. Fusce non ultricies eros. Morbi pretium scelerisque diam, sed pellentesque ligula tempus in. Vivamus at est vehicula, tristique quam eu, congue sem. Ut a scelerisque quam, ut placerat est. Morbi posuere non diam ac tempor. Nulla semper ornare magna semper dapibus. Quisque vehicula tincidunt mi ac tincidunt. In pellentesque interdum tellus ac convallis. Suspendisse potenti. Aliquam viverra sem leo, fringilla posuere tellus sollicitudin elementum. Aliquam pretium scelerisque neque, nec convallis turpis vehicula quis. Vestibulum ac enim mi. Mauris cursus, lectus ut eleifend euismod, lectus neque aliquam orci, a hendrerit tellus justo sed ligula. Ut a erat vitae sapien cursus gravida sed a augue. Aliquam sit amet arcu et lorem finibus consectetur. Suspendisse fermentum, ipsum eu interdum finibus, est erat elementum mauris, ut tristique sapien eros eu metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam molestie ipsum in nisi ullamcorper, sed faucibus velit malesuada. Vestibulum lectus purus, bibendum ac leo sit amet, iaculis porttitor nisl. Etiam pulvinar ipsum ut ligula imperdiet fermentum. Curabitur bibendum justo nunc, ac consectetur erat sollicitudin ac. In non elit blandit, ultricies risus vel, vehicula leo. In vehicula mi id ornare dictum.";

var wordsCounter = function (string) {
  return string.split(" ").length;
};
console.log(wordsCounter(loremString));

var occurrences = function (string, word) {
   var substrings = string.split(word);
   return substrings.length - 1;
};
console.log(occurrences(loremString,"et"));
