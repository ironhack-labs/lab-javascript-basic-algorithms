// Names and Input
var hacker1 = "Miguel";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("Enter name");
console.log("The navigator's name is " + hacker2);
//Conditionals
if (hacker1 > hacker2){
    console.log("The driver has the longes name, it has " + hacker1.length + " characters");
  } else if(hacker1 < hacker2){
    console.log("the navigator got the longest name, it has " + hacker2.length + " characters");
  } else {
    console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!");
  }
console.log(hacker1.toUpperCase().split("").join(" "));
console.log(hacker2.split("").reverse().join(""));  
if(hacker1<hacker2){
    console.log("The drivers name goes first.");
  } else if(hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.");
  } else{
    console.log("What?! You both got the same name?");
  }
var usrString = prompt("inset text");
if(usrString == usrString.split("").reverse().join("")){
  console.log("It's a palindrome!!");
} else{
  console.log("This is not a palindrome");
}
// Lorem ipsum generator
var loremString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dignissim dictum. Quisque varius iaculis suscipit."
 var wordSplit = loremString.split(" ").length;
 console.log(wordSplit);
 var matches = loremString.match(/et/gi).length;
 console.log(matches);