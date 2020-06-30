//Students: Natalia Silva and Luis De Gouveia.

// Iteration 1: Names and Input
let hackerName1 = 'Luis';
console.log("The drivers name is " + hackerName1);

let hackerName2 = 'Natalia';
console.log("The navigator name is " + hackerName2);

// Iteration 2: Conditionals
var name1 = "Natalia";
var num1= name1.length;
console.log(num1);

var name2 = "Luis";
var num2= name2.length;
console.log(num2);

if (num1 > num2) {
  console.log("The driver has the longest name it has " + num1 + "characters");
}
else if (num2 > num1) {
  console.log("It seems that the navigator has the longest name, it has " + num2 + "characters");
} else { 
  console.log("Wow, you both have equally long names " + num1 + "characters!");
}

// Iteration 3: Loops
let uppercased = hackerName1.toUpperCase().split('');
console.log(uppercased);

let empty = '';

for (i = 0; i < uppercased.length; i++){
  empty += uppercased[i] + ' '
}

console.log(empty);

var cadenaInvertida = "";

while (num2>=0) {
  cadenaInvertida = cadenaInvertida + hackerName2.charAt(num2);
  num2--;
}

console.log(cadenaInvertida);

var student1 = "Natalia";
var student2 = "Luis";
var order = student1.localeCompare(student2);

console.log(order);

if (order = 1) {
  console.log("The drivers name goes first");
} else if (order = -1) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both have the same name?");
}