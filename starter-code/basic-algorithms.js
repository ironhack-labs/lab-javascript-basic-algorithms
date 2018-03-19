console.log ("I'm Ready!");

var hacker1 = "Mario"
hacker1 = hacker1.toUpperCase();

var response = "";
for (var i=0; i<hacker1.length; i++) {
  // console.log('iteration number ', response);
  // console.log(hacker1[i]); 
  response += hacker1[i] + " ";
}

console.log("The driver's name is " + response)
var hacker2 = prompt ("What is your name?")

var reverse = "";
var lastIndex = hacker2.length - 1;
//console.log(lastIndex);
for(var i = lastIndex; i >= 0; i -= 1){
 reverse += hacker2[i]; 
}

console.log ("The navigator's name is " + reverse)

var upperReverse = reverse.toUpperCase();
if (hacker1 < upperReverse){
  console.log("The driver's name goes first");
  }
  else if (hacker1 > upperReverse){
    console.log("Yo the navigator goes first definitely")
  }
  else {
    console.log("What you both got the same name?")
    
  }



if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
}
else if (hacker2.length > hacker1.length) {
  console.log ("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
}
else {
  console.log("wow, you both got equally long names, " + hacker1.length+ " characters")
}

var string = prompt ("Tell me a string!")

