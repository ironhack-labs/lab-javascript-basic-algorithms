var hacker1 = "Alonso";
console.log("The driver´s name is: " + hacker1);

var hacker2 = prompt("Ingresa el nombre del Navegante.");
console.log("The navigator´s name is: " + hacker2);

// Condicionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length+ " characters");
} else if (hacker1.length < hacker2.length) {
  console.log ("yo navigator got the longest name, it has "+ hacker2.length +" characters");
}

else
{
console.log ("wow you both got the equally name, " + hacker1.length + " characters");
}

//********loops***********
//Impresion del Nombre separando las letras y poniendolas en mayus
var hacker1Cap = "";
for (var i = 0; i < hacker1.length; i++) {
  if (i !== hacker1.length - 1) { //aqui le estamos poniendo que reste el ultimo espacio para no dejarlo en blanco
    hacker1Cap += hacker1[i].toUpperCase();
  } else {
    hacker1Cap += hacker1[i].toUpperCase() + ' ';
  }
}
console.log(hacker1Cap);


//impresion del nombre a la inversa
var hacker2Reverse = '';
for (i < hacker2.length; i >= 0; i--) {
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse); //no funciona bien, no se porqué


//impresion del nombre que es el primero alfabeticamente
console.log("** Orden alfabético de los personajes:");

if (hacker1 < hacker2){
  console.log('The driver´s ' + hacker1 + ' goes first')
}else if(hacker1 > hacker2){
  console.log('The navigator '+ hacker2 + ' goes first definitely')
}else{
  console.log('What?! You both got the same name?')
}

// ***** Palindromos *****

var palinInput = prompt("Introduce un Palindromo");

function checkPalindrom(palinInput) {
  return (
    palinInput == palinInput.split('').reverse().join(''));
}
if (checkPalindrom(palinInput) == true ) {
  console.log("Sii, '" + palinInput + "' es un palindromo, enhorabuena!!");
}
else {
  console.log ("Lo sentimos, '" + palinInput + "' no es un palindromo :(");
}


// ***** Ejercicio de recuento de caracteres ******
var str ='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. et et et. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. et et et. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

console.log("\nThe text has: " + str.length + " words.");
counter = 0;
var strArr = str.split(" ");
for (var i = 0; i <= str.length; i++) {
  if (strArr[i] === 'et') {
    counter++;
  }
}
console.log("\nThe text has: " + counter + " coincidences with 'et'.");