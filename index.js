// Iteration 1: Names and Input
let hacker1 = "Max";
console.log(hacker1);

let hacker2 = "Alex";
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
var nombreEspaciado = "";

for (let i = 0; i < hacker1.length; i++) {
    nombreEspaciado += hacker1[i].toUpperCase() + ' ';
}

console.log(nombreEspaciado);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
nombreAlReves = "";

for (let i = 3; i >= 0; i--) {
    nombreAlReves += hacker2[i];
}

console.log(nombreAlReves);

// 3.3 Depending on the lexicographic order of the strings, print: 
let ordenado = hacker1.localeCompare(hacker2);

if (ordenado < 0) {
    console.log("The driver's name goes first.");
} else if (ordenado > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bonus 1:
let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id enim rutrum, dapibus erat posuere, tempus augue. Suspendisse eget elementum enim, a dictum metus. Phasellus finibus volutpat convallis. Phasellus blandit tempus tempus. Mauris egestas convallis neque, eu scelerisque mi ultrices sit amet. Sed ullamcorper felis at turpis dictum sollicitudin commodo et massa. Cras tempor eu leo ultricies consequat. Morbi consectetur nisi sit amet ex consequat, id cursus mauris tempus. Donec ultrices nisi quis nulla pulvinar facilisis. Cras gravida magna a turpis lobortis venenatis. Morbi vehicula iaculis tellus. Sed non tincidunt nisi. Cras aliquam mauris ac varius egestas. Proin vitae magna eget magna porta pretium. Mauris ac urna a velit pellentesque imperdiet. Cras ac mollis justo, sit amet tempus turpis. Etiam pharetra ligula mi, eget tincidunt ante laoreet eget. Phasellus magna sem, efficitur nec auctor nec, efficitur id quam. Cras posuere risus odio, sed vestibulum leo accumsan in. Nullam ut neque dolor. Quisque ac fringilla eros. Cras nec diam metus. Mauris et lacus diam. Curabitur nisi quam, ullamcorper eu pellentesque et, semper id leo. Duis consectetur ligula risus, eget egestas dui luctus at. Cras rhoncus augue quis metus auctor lacinia. Nullam sit amet urna nec sapien mollis lobortis. Proin a mauris massa. Praesent lobortis diam nulla, eget sagittis ipsum gravida a. Sed ac gravida mauris.';
console.log(longText.split(/\s+/).length);

// Bonus 2:
phraseToCheck = '';
