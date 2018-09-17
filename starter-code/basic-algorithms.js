// Names and Input
var hacker1 = "Ester";
console.log("The driver's name is " + hacker1);

var hacker2 = "Jose";
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else if (hacker2.length === hacker1.length) {
  console.log("wow, you both got equally long names, " + hacker2.length + " characters!!");
}

//loops
var nombreSeparado="";
for(var i=0; i< hacker1.length; i++){
 if (i===hacker1.length -1){
  nombreSeparado += hacker1[i].toUpperCase();
 } else {
  nombreSeparado += hacker1[i].toUpperCase() + " ";
 }
};
console.log(nombreSeparado);
// Lorem ipsum generator
