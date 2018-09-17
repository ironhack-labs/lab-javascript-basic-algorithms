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
//Ejercicio 6
var nombreSeparado="";
for(var i=0; i< hacker1.length; i++){
 if (i===hacker1.length -1){
  nombreSeparado += hacker1[i].toUpperCase();
 } else {
  nombreSeparado += hacker1[i].toUpperCase() + " ";
 }
};
console.log(nombreSeparado);
//Ejercicio 7
var nombreInvertido= "";
for(var i=hacker1.length-1; i>=0; i--){
  nombreInvertido += hacker1[i];
}
// Ejercicio 8
console.log(hacker1[0]);
if(hacker1[0]> hacker2[0]){
  console.log("The driver's name goes first") 
} else if(hacker1[0]< hacker2[0]){
  console.log("Yo, the navigator goes first definitely")
} else if (hacker1[0]=== hacker2[0]){
  console.log("What?! You both got the same name?")
}