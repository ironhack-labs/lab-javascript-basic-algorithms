var hacker1 = "Flo";

console.log("The driver's name is " + hacker1);
var hacker2 = prompt("Name?");
console.log("The navigator's name is " + hacker2);

var h1length = hacker1.length;
var h2length = hacker2.length;
var maxlength = 0;
if(h1length > h2length){
  console.log("The Driver has the longest name, it has " + h1length + " characters");
  maxlength = h1length;
}else if (h2length > h1length){
console.log("Yo, navigator got the longest name, it has " + h2length + " characters");
maxlength = h2length;
}else{
 console.log("wow, you both got equally long names, " + h2length + " characters!!");
 maxlength = h1length;
}
// Loops
var output = "";
for(var i = 0; i < hacker1.length; i++){
  output += hacker1[i].toUpperCase() + " ";
} 
console.log(output);

var output2 = "";
for(var i = hacker2.length-1; i >= 0; i--){
  output2 += hacker2[i];
} 
console.log(output2);


if(hacker1 === hacker2){
  console.log("Wow, same name!");
}else if(hacker1 < hacker2){
  console.log("The driver goes first")
}else{
  console.log("The naviagtor goes first");
}

var myString = prompt("Your word?").toLowerCase();
myString = myString.replace(/[, !]/g, "");

console.log(myString);
var stringLength = myString.length;
var j = stringLength-1;
var sucess = true;
for(var i = 0; i < stringLength; i++){
  if(myString[i] !== myString[j--]){
      console.log("No palindrome");
      sucess = false;
      break;
  }
}

if(sucess){
  console.log("Palindrone");
}
