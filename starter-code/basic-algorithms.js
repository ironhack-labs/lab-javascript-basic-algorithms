var hacker1 = "Mathis";

console.log("The driver's name is " + hacker1);

var hacker2 = "Nicolas";

console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + "caracters.");
}
else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + "caracters.");
}
else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " caracters.");
}

// ----- Loops

//for (i = 0; i <= hacker1.length; i++) {
//  console.log(" ");
//}

var space = "";

for (var i = 0; i < hacker1.length; i++) {

  space +=  hacker1[i]  + " ";
 //console.log(space)
}
console.log(space.toUpperCase());
//console.log (hacker1[i]  + " "); 

var inverse = "";

for (var i = hacker2.length - 1; i > -1 ;i--) {
  inverse += hacker2[i] 
}

console.log(inverse);

// 24 A Z M N 

for (i = 0; i < 24; i++) {
  console.log(i);
}
