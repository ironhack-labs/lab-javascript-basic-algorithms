var hacker1 = "Alvaro";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("Whats your name?");
console.log("The navigator's name is " + hacker2);

var longitud = "";
if (hacker1.lenght > hacker2.length) {
  console.log("The driver has the longest name! It has " + hacker1.length + "characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + "characters");
} else if (hacker1.length === hacker2.length) {
  console.log("Wow, you both got equally long names, " + hacker1.length + "characters");
}

console.log(hacker1.toUpperCase());

var nombreAlReves = hacker2;
nombreAlReves = nombreAlReves.split(""); //convert 'jQuery' to array
nombreAlReves = nombreAlReves.reverse(); //reverse 'jQuery' order
nombreAlReves = nombreAlReves.join(""); //then join the reverse order values together
console.log(nombreAlReves);

var orden = [hacerk1, hacker2];
console.log(orden.sort());
