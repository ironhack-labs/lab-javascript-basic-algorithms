// Names and Input
var hacker1 = "Chu";

console.log("Driver's name is " + hacker1);

var hacker2 = "Ariel";

console.log("Navigator's name is " + hacker2);

function nameLength() {
  if (hacker1.length > hacker2.length){
    console.log("The driver's got the longest name, it has " + hacker1.length + " Characters");
  }
  else if(hacker2.length > hacker1.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  }
  else {
    console.log("Wow, you both got equally long names, " + hacker2.length + " characters");
  }
}

nameLength();

var horizontalName = "";
for (var i = 0; i <= hacker1.length - 1; i++){

  horizontalName += hacker1[i] + " ";

}
  console.log(horizontalName.toUpperCase() + " ");
var horizontalName2 = "";

for (var i = hacker2.length - 1; i >= 0; i--){
  horizontalName2 += hacker2[i];
}
 console.log(horizontalName2);

 //Conditionals

 var palindrome = prompt ("Type any word");
 palindrome = palindrome.replace(/\s/g,"");

 if (palindrome === palindrome.split("").reverse().join("")) {
   console.log("This is a Palindrome");
   }
 else {
   ("This is not a Palindrome");
 }

// Lorem ipsum generator
