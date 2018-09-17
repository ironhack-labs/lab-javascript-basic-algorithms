// Names and Input
var hacker1 = 'Ana';
console.log("The driver's name ist: "+hacker1);
var hacker2;
hacker2 = window.prompt("Imput the navigator's friend: ");
console.log("The navigator's name ist: "+hacker2);

//Conditionals
var longName;
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longer name, it has "+hacker1.length + " characters");

}else if (hacker1.length < hacker2.length){
  console.log("yo, navigator got the longer name, it has "+hacker2.length + " characters");
  
}else {
  console.log("wow, you both got equally long names, " +hacker1.length + " characters");
}

//LOOPS
var upperDriver = hacker1.toUpperCase();
var newDriver = "";
//console.log(upperDriver);
for (var i=0; i<hacker1.length; i++){
  if (i === hacker1.length-1){
    newDriver += upperDriver[i];  
  }else{
    newDriver += upperDriver[i]+ " ";
  }
}
console.log(newDriver);

//var upperNav = hacker2.toUpperCase();
var newNav = "";
//console.log(upperDriver);
for (var i=hacker2.length-1; i>=0; i--){
 newNav += hacker2[i];
}
console.log(newNav);

if (hacker1 < hacker2){
  console.log("The driver's name goes first");
}else if (hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely");
}else {console.log("What?! You both got the same name");}

//Bonus

var palindromo1;
var palindromo2 = '';
var palindromo3 = '';
palindromo1 = window.prompt("Introduzca una cadena: ");
var palindromo1L = palindromo1.toLowerCase();

for (var i=palindromo1L.length-1; i>=0; i--){
  if (palindromo1L[i] !== ' '){
  palindromo2 += palindromo1L[i];
  }
 }
 for (var j=0; j<palindromo1L.length; j++){
  if (palindromo1L[j] !== ' '){
  palindromo3 += palindromo1L[j];
  }
 }
 console.log(palindromo2);
 console.log(palindromo3);
if (palindromo3 === palindromo2){
  console.log("Es palíndromo " +palindromo1);
}
// Lorem ipsum generator
