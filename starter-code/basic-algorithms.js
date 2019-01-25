// Names and Input 
var hacker1= "Jose"; 

console.log("The driver's name is "+ hacker1)

 var hacker2= "";
hacker2 = prompt("What's the navigator's name?");
console.log("The navigator's name is " + hacker2);

// Conditionals
if (hacker1.length < hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker2.length + " characters");
} else if(hacker1.length > hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker1.length + " characters");
}else{
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
};

//Loops
var arrayHacker1 = Array.from(hacker1);
var caja = [];
for (var i=0; i<arrayHacker1.length; i++) {
caja.push(arrayHacker1[i].toUpperCase());
}
console.log(caja);

var arrayHacker2 = Array.from(hacker2);
var caja = [];
for (var i=0; i<arrayHacker2.length; i++) {
caja.push(arrayHacker2[i].toUpperCase());
}
console.log(caja.join(' '));


var inversa1 = arrayHacker1.reverse();
console.log(inversa1.join(''));

var inversa2 = arrayHacker2.reverse();
console.log(inversa2.join(''));

var orden = hacker2.localeCompare(hacker1);

if ( orden < 0) {
 console.log("The driver's name goes first")
} else {
 console.log("Yo, the navigator goes first definitely")
}

