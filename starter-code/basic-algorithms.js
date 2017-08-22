//https://repl.it/KQbB/41

// Names and Input

var hacker = "Manu";

console.log("The driver is " + hacker)

var hacker2 = prompt("Wich is the navigator name?")

console.log("The navigator is " + hacker2)



if(hacker.length > hacker2.length) {

  console.log("The Driver has the longest name, it has " +  hacker.length + " characters")

} else if(hacker.length < hacker2.length) {

  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")

} else if(hacker.length === hacker2.length) {
  console.log("wow, you both got equally long names, " + hacker.length + "characters!!")
}



//Conditionals

var stringVacio = "";

for(var i = 0; i < hacker.length; i++) {

  var espacio = " "
  stringVacio += hacker.charAt(i).toUpperCase() + espacio;
}

//var hacker = hacker.charAt(0) + " " + hacker.charAt(1) + " " + hacker.charAt(2) + " " + hacker.charAt(3);

console.log(stringVacio)

var stringVacioReverse = "";

for(var i = hacker.length -1; i >= 0; i --) {
  stringVacioReverse += hacker[i].toUpperCase() + " ";
}

console.log(stringVacioReverse);



// Lorem ipsum generator

/////////////////// Según el orden alfabético va un hacker delante de otro

console.log(hacker.split("").sort())
