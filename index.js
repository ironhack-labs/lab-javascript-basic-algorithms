// Iteration 1: Names and Input
let hacker1 = "Maximus";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "John";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let splittedString = hacker1.split('');
let hacker1WithSpaces = splittedString.join(' ');
let upperCaseStringWithSpaces = hacker1WithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);

for(let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
}

if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first, definitely.");
}
else if ((hacker1.localeCompare(hacker2) === -1)){
  console.log("The driver's name goes first.");
}
else {
  console.log("What?! You both have the same name?");
}

//Bonus 1:
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac felis nulla. Aenean pulvinar quis lacus vitae vulputate. Quisque scelerisque blandit felis a pretium. In in efficitur sapien. Praesent suscipit neque id velit varius pretium. Aliquam maximus tincidunt felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras scelerisque sit amet purus eget maximus. In vestibulum quam ut dui volutpat, non congue sapien vestibulum. Donec varius dui id lorem tincidunt maximus. Duis sed tempus diam, quis faucibus turpis. Sed condimentum sem a ultricies tristique. Proin eu sagittis odio, a fringilla ipsum.

Sed tellus libero, tristique sit amet rutrum sit amet, egestas nec erat. Suspendisse potenti. Donec a augue elit. Integer libero sem, lacinia ut diam scelerisque, finibus mattis leo. Nunc scelerisque sed nulla vulputate semper. Ut ac nisl nisl. Nulla rutrum dui at lacus tristique sodales.

Maecenas in orci tellus. Aenean convallis fermentum pretium. Cras rutrum velit ac ex sodales consectetur. Nulla eget lacinia sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam scelerisque, eros eu auctor pharetra, nisi enim aliquam purus, eget consectetur tellus leo a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec arcu ipsum. Vivamus ut nibh eget urna vestibulum ullamcorper. In volutpat blandit mi, sed cursus urna aliquam sit amet. Duis quis dapibus nulla, ac eleifend urna. Nulla quis malesuada enim.`;

function WordCount(str) { 
  return str.split(" ").length;
}

console.log(`The number of words is ${WordCount(longText)}`);

// Bonus 2

let myName = "Michael";
let myAge = 67;

if(myAge > 65){
  console.log("price is 2.99");
} else if(myAge === 15 && myName === "Michael" ){
  console.log("Are you Michael Scott from Dunder Mifflin?");
} else if(myAge > 16){
  console.log("price is 1.99€");
} else {
  console.log("price is 5.99€");
}

// calculatePrices(17, "Michael");