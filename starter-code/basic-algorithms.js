var hacker1 = prompt("Enter the driver's name"); console.log("The driver's name is " + hacker1); 


var hacker2 = prompt("Enter the navigator's name"); console.log("The navigator's name is " + hacker2); 
  if (hacker1.length === hacker2.length) {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!") } 
  else if (hacker1.length <= hacker2.length) { 
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters"); }
  else {     
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters"); }


var spaceDriver = "";  
for (i = 0; i <= hacker1.length -1; i++) {
  spaceDriver+=(hacker1[i])+" ";
}
console.log(spaceDriver.toUpperCase());


var reverseNavigator = "";  
for (i = hacker2.length -1; i >=0; i--) {
  reverseNavigator+=(hacker2[i]);
}
console.log(reverseNavigator);


if (hacker1 === hacker2) {
  console.log("What?! You both got the same name?");
} else if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else {
  console.log("Yo, the navigator goes first definitely");
};

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var candidate = prompt("Testez la palindromie du mot");
for (i=0 ; i <= candidate.length-1; i++) {
  if (!alphabet.includes(candidate[i])) {candidate=candidate.substr(0,i-1)+candidate.substr(i+1,candidate.length-1);
  i--;}
}
console.log(candidate);

// Names and Input


//Conditionals


// Lorem ipsum generator
