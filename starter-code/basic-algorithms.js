// IMPRIMIR EL NOMBRE MAS LARGO

var hacker1="Mileydis";
console.log("The driver's name is ",hacker1);

var hacker2="Carlos";
console.log("The navigator's name is ",hacker2);

var n = hacker1.length;
var m = hacker2.length;

if (n>m) {
  console.log("The Driver has the longest name, it has ",n,"characters");
}
else if (m>n){
  console.log("Yo, navigator got the longest name,",m,"characters")
}
else {
  console.log("wow, you both got equally long names, ", m, "characters!!");
}

// IMPRIMIR EN MAYUSCULAS Y CON UN ESPACIO

var hacker1Space=" ";
for (var i=0;i<hacker1.length;i++){
  hacker1Space= hacker1Space+hacker1[i].toUpperCase()+" ";
  
}
console.log(hacker1Space);

// INVERTIR UN STRING 


var hacker1Invertido=" ";
for (var i=(hacker1.length-1);i>=0;i--){
  hacker1Invertido= hacker1Invertido+hacker1[i];
  }
console.log(hacker1Invertido);

// IDENTIFICAR QUIEN VA PRIMERO

var mayor = "What?! You both got the same name?";

for (var i=0; (i<hacker1.length || i<hacker2.length); i++){
  if (hacker1[i]>hacker2[i]){
    mayor = "The driver's name goes first";
  }
  else if (hacker1[i] < hacker2[i]){
    mayor = "Yo, the navigator goes first definitely";
  }
}
console.log(mayor);

// HACER EL PALINDROME

var palindrome= prompt("Introduzca la frase:");
var Invertido = " ";
for (var i=(palindrome.length-1);i>=0;i--){
  Invertido= Invertido+palindrome[i];
  }
console.log(Invertido);