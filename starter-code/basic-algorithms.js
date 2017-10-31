var hacker1 = "Alvaro";
  console.log ("The driver's name is " + hacker1);
var hacker2 = prompt ("Whats your name?");
  console.log ("The navigator's name is " + hacker2);

var longitud1 = hacker1.length;
var longitud2 = hacker2.length;
if (longitud1 > longitud2) {
  console.log ("The driver has the longest name! It has " + longitud1 + "characters");
}

else if (longitud1 < longitud2) {
  console.log ("Yo, navigator got the longest name, it has " + longitud2 + "characters");
}

else if (longitud1 === longitud2) {
  console.log ("Wow, you both got equally long names, " + hacker1.length + "characters");
}


console.log (hacker1.toUpperCase());

var nombreAlReves = hacker2;
nombreAlReves = nombreAlReves.split("");
nombreAlReves = nombreAlReves.reverse();
nombreAlReves = nombreAlReves.join("");
console.log(nombreAlReves);

var orden = [hacker1, hacker2];
console.log(orden.sort());
