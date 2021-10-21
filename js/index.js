// Iteration 1: Names and Input
//
const hacker1 = "Alvaro";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Marta";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} character.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names,${hacker2.length} characters!`
  );
}

// Iteration 3: Loops

const hacker1 = "Alvaro";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Marta";
console.log(`The navigator's name is ${hacker2}`);

console.log(hacker1.toUpperCase().split("").join(" "));

let cadena = [];
for (i = 0; i < hacker1.length; i++) {
  cadena.push(hacker1[i].toUpperCase());
}
console.log(cadena.join(" "));

console.log(hacker1.split("").reverse().join(""));

let cadena2 = [];
for (i = hacker1.length - 1; i >= 0; i--) {
  cadena2.push(hacker1[i]);
}
console.log(cadena2.join(""));

let value = hacker1.localeCompare(hacker2);
if (value < 0) {
  console.log("The driver's name goes first.");
} else if (value > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus
let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere lorem augue, at tristique justo dignissim scelerisque. Vestibulum eget laoreet dui. In est justo, sollicitudin sed molestie nec, pretium ut lorem. Quisque rhoncus, neque ut volutpat cursus, nisl dui gravida nunc, vitae tincidunt ipsum libero id nunc. Curabitur dictum, sem ac rhoncus malesuada, lacus risus consequat sapien, id dapibus eros est ac mauris. Maecenas eu commodo dolor, a mattis nunc. In nulla est, bibendum sed arcu ac, aliquet porta mauris. Curabitur aliquam est vel lorem feugiat ullamcorper. Vivamus enim metus, ultricies a pulvinar nec, ultrices in sapien. Nam consequat congue odio, a aliquam turpis semper in. Donec et molestie augue, non hendrerit massa. Curabitur tempor eros dignissim, aliquet tortor non, volutpat felis. Donec quis feugiat nisl, cursus auctor nisi. Vestibulum pellentesque consectetur massa ac rhoncus. Vivamus nec mi sem. Pellentesque sollicitudin semper sapien, ut vehicula elit elementum at.Duis at vulputate ligula. Ut venenatis quis erat vitae suscipit. Maecenas id bibendum lectus. Vivamus vitae aliquet massa. Nam commodo sed velit sed mattis. Pellentesque sed lobortis turpis. Nam porttitor laoreet quam, quis ultrices nisi auctor vel. Vestibulum id justo eu magna dignissim suscipit vel vel neque. In vel dolor id nisl lacinia aliquet sed id lacus. Nunc nec malesuada ante. Phasellus est massa, luctus sit amet accumsan eu, efficitur eget ante. Aenean venenatis, lectus quis interdum maximus, leo ligula viverra ligula, et ultricies magna dolor quis ipsum. Duis tempor ipsum a aliquam vestibulum. Praesent in dictum ante. Nulla facilisi. Mauris fermentum et leo non fermentum.Pellentesque congue neque sed ante semper, eget ultrices lorem molestie. Aenean at volutpat est. Mauris sed nulla pulvinar, gravida elit sit amet, faucibus sapien. In convallis placerat malesuada. Fusce placerat porta euismod. Mauris facilisis posuere orci, eu volutpat turpis accumsan vitae. Sed sit amet lorem et arcu aliquam ornare. Fusce a eros ac sapien accumsan consequat. Duis malesuada pulvinar ex sed vulputate. Etiam vestibulum sed elit bibendum vulputate. Vestibulum ante ipsum primis in faucibus orci luctus ultrices posuere cubilia curae;";

let contador = lorem.split(" ").length;
console.log(contador);
