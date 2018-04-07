// Names and Input
var hacker1 = "Jean"; 
var hacker2 = prompt("Navigators name?")
console.log("The navigators name is " + hacker2);
//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters"); 
} else {
  console.log("What?! You both got the same name>")
}

// Lorem ipsum generator

//REMEMBER TO PUT IT hacker1 ON TOP OF THE .JS!


var hackerSpace = "";
for (var i = 0; i < hacker1.length; i++) {
 if (i === hacker1.length) {
    console.log(hackerSpace);
  } else if (i === hacker1.length -1){
    hackerSpace = hackerSpace + hacker1[i].toUpperCase();
  } else if (i < hacker1.length) {
    hackerSpace = hackerSpace + hacker1[i].toUpperCase() + " ";
  }
}

var hacker1 = "Jean";

var hackerBack = "";
for (var j = hacker1.length - 1; j > -1; j--) {
  if (j === -1) {
    console.log(hackerBack);
  } else if (j > -1) {
      hackerBack += hacker1[j];
  }
}

var hacker1 = "Jean";
var hacker2U = prompt("Navigators name?");
function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var hacker2 = jsUcfirst(hacker2U);

if (hacker1 > hacker2) {
  console.log(hacker1 +"'s goes first");
} else if (hacker1 < hacker2) {
  console.log("Yo, " + hacker2 + " goes first definitely")
} else {
  console.log(`What?! You both got the same name?`)
}