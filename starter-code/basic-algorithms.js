// Names and Input
console.log("hi");
var hacker1 = "yeap";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
}

else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
}

else {
  console.log("wow, you both got equally long names, " + hacker2.length + " characters")
}

var driverCapital = "";

for (var i = 0; i < hacker1.length; i++) {
 driverCapital += hacker1[i].toUpperCase() + " ";
}
console.log(driverCapital);

function reverse(words){
  var navigatorBackwards ="";
  for (var i = (words.length-1); i>=0; i--) {
    
      navigatorBackwards += words[i];

  }
  
  return navigatorBackwards;
}

console.log(reverse(hacker2));


var alphabet = "abcdefghijklmnopqrstuvwxyz";
if (hacker1 === hacker2) {
  console.log("What? You both got the same name?")
}

for (i=0; i < hacker1.length; i++) {
  var letterPosition1 = alphabet.indexOf(hacker1[i]);
  var letterPosition2 = alphabet.indexOf(hacker2[i]);
  
  if (letterPosition1 < letterPosition2) {
    console.log("The driver's name goes first");
    break;
  }
  
  else if (letterPosition1 > letterPosition2) {
    console.log("Yo, the navigator goes first definitely");
    break;
  }
  
  if (i== hacker1.length-1) {
    console.log("The driver's name goes first");
    break;
  }
}

var palindrome = prompt("Gimme a string").toUpperCase();

palindrome = palindrome.replace(" ", "");

if (palindrome===reverse(palindrome)){
  console.log("It's a palindrome");
}

else {
  console.log("It's not a palindrom.");
}

// Lorem ipsum generator
var lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur posuere nisi. Sed interdum id quam nec ullamcorper. Mauris leo neque, aliquam eu dignissim ut, vehicula ut odio. Sed iaculis efficitur molestie. Praesent et vestibulum quam. Nam sem nulla, aliquam sed posuere eget, feugiat id lorem. Ut porta lorem ac sem ornare ultrices. Cras arcu mi, condimentum sit amet felis et, rutrum finibus purus. Fusce purus nisl, maximus et odio in, lobortis aliquam lorem. Donec ornare dictum volutpat. Curabitur consectetur arcu sed urna tristique varius. Quisque ultrices massa in sem blandit viverra. Praesent sagittis lorem quis gravida dapibus. Fusce commodo elit ac justo finibus iaculis. Sed purus nisl, posuere quis pellentesque vitae, fringilla at diam. Integer sollicitudin rhoncus risus. Nulla facilisi. Ut et sollicitudin mi, quis dictum tortor. Morbi ut eros imperdiet est suscipit suscipit. Donec at pellentesque ligula. Praesent sollicitudin libero sit amet ante sagittis ultrices. Donec consectetur, lectus vel dapibus sollicitudin, magna mauris semper odio, blandit vehicula sem ante ac metus. Sed facilisis vel ligula at dapibus. Mauris at magna et nisi porta condimentum. Maecenas varius diam eget turpis mattis hendrerit. Donec ut felis lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed non sem eget tellus consectetur interdum.";

lorem = lorem.toUpperCase();
var numberWords = 0;
for (i=0; i<lorem.length; i++) {
  
  if (lorem[i]=" "){
    numberWords++;
  }
}

console.log("The number of words is " + numberWords);

var numberEt = 0;
for (i=0; i<lorem.length; i++) {
  
  if (lorem[0]=="E" && lorem[1]=="T"){
    numberEt++;
  }
  else if (lorem[i]==" " && lorem[i+1]=="E" && lorem[i+2] =="T" && lorem[i+3] == " " )
  {
    
    numberEt++;
  }
}

console.log("the number of the word 'et' is " + numberEt);