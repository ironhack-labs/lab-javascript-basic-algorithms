// Names and Input

var hacker1 = 'John Doe';
console.log('The driver\'s name is ' + hacker1);

var hacker2 = prompt('What is the navigator\'s name?');
console.log('The navigator\'s name is ' + hacker2);

// Conditionals

if (hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
}
else if (hacker1.length < hacker2.length) {
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
}
else console.log('wow, you both got equally long names,' + hacker1.length + ' characters!!');

var nombreEsp;

for (var i = 0; i < hacker1.length; i++) {   
  nombreEsp = nombreEsp + hacker1[z].toUpperCase() + ' ';  
}
console.log(nombreEsp);

var aux;
var nombreAlReves;

for (var z = 0; z <= hacker1.length; z++) {
  aux = hacker1.length;
  nombreAlReves = nombreAlReves + hacker1[aux - z];
}
console.log(nombreAlReves);

for (var i = 0; i < Math.min(hacker1.length, hacker2.length) && hacker1[i] === hacker2[i]; i++);

if (hacker1[i] < hacker2[i]) {
console.log('The driver\'s name goes first');
}
else if (hacker1[i] > hacker2[i]) { 
console.log('Yo, the navigator goes first definitely');      
}
else console.log('What?! You both got the same name?');