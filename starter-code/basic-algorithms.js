var hacker1 = "Ana";
var hacker2 = prompt ("What's the navigator's name?");
console.log("The driver's name is "+hacker1);
console.log("The navigator's name is "+hacker2);
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has "+hacker1.length+" characters");
} else if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has "+hacker2.length+" characters");
} else if (hacker1.length === hacker2.length){
  console.log("Wow, you both got equally long names, "+hacker1.length+" characters!!");
} else {
  console.log ("Error");
}
var output = "";
var letters = "";
for (var i = 0; i < hacker1.length; i++){
 letters = hacker1[i].toUpperCase() + " ";
 output += letters;
 console.log(output);
}