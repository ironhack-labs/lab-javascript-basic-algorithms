console.log("I'm ready");
console.log("\n:: Names and Input ::")
// Names and Input
let hacker1 = "ChavoDelOcho";
let hacker2;
hacker2 = prompt("What's the navigator's name?");
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

//Conditionals
//str.length
console.log("\n:: Conditionals ::")
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if(hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else if(hacker2.length == hacker1.length){
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

// Lorem ipsum generator
console.log("\n:: Lorem ipsum generator ::")
let cadena = "";
for (let i = 0;i <= hacker1.length - 1;i++){
  cadena = cadena + hacker1[i].toUpperCase() + " ";
  //console.log(hacker1[i]);
}
console.log(cadena);

cadena = "";
for (let i = hacker2.length - 1; i >= 0; i--){
  cadena = cadena + hacker2[i];
}
console.log(cadena);

if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely");
} else if(hacker2[0] > hacker1[0]){
  console.log("The driver's name goes first");
} else if (hacker2[0] == hacker1[0]){
  console.log("What?! You both got the same name?");
}

// Bonus Time!
console.log("\n:: Bonus Time! ::")
let cadena2 = prompt("Escribe algo y te digo si es un palindromo...");
cadena2 = cadena2.replace(" ","");
cadena2 = cadena2.toUpperCase();
//este ciclo recorre de reversa la cadena
let j = 0;
for (let i = cadena2.length - 1; i >= 0; i--){
  if (cadena2[i] == cadena2[j]) {
    //vamos bien
    console.log(cadena2[i] + " vs. " + cadena2[j]);
  } else {
    console.log(cadena2[i] + " vs. " + cadena2[j] + "ya no cumple para ser palindromo, sorry");
  }
  j++;
}
