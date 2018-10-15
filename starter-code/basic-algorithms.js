console.log("I'm Ready!");

var hacker1 = "Adèle";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What's the navigator's name?");
console.log("The navigator's name is " + hacker2);

var shortestName = "";

if(hacker1.length > hacker2.length){
  shortestName = hacker2;
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker1.length < hacker2.length){
  shortestName = hacker1;
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
else {
  shortestName = hacker1;
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!")
}

console.log(shortestName);

var stringDriver = "";

// for(var i = 0; i < hacker1.length; i++){
//  stringDriver = stringDriver + hacker1[i].toUpperCase() + " ";
//}
//  console.log(stringDriver);

for(var i = hacker2.length -1; i >= 0; i--){
// 
  stringDriver = stringDriver + hacker2[i];
}
console.log(stringDriver);


function reverseString(str) {
   return str.split("").reverse().join("");
}
console.log(reverseString(hacker2));

if (hacker1.toLowerCase()<hacker2.toLowerCase()){
  console.log("The driver's name goes first");
}
else if (hacker1.toLowerCase()>hacker2.toLowerCase()){
  console.log("Yo, the navigator goes first definitely");
}
else {
  console.log("What?! You both got the same name?");
}

//var palindrome = prompt.("")
