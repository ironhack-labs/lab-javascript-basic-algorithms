// Iteration 1: Names and Input
//
let hacker1 = 'João Antunes'

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'João Morgado'

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`);
} else if (hacker1.length === hacker2.length) { 
    console.log(`Wow, you both have equally long names, ${hacker1.length}` );
}


// Iteration 3: Loops

// 3.1
let upperName1 = '';



for (let i = 0; i <= hacker1.length -1; i++){
    upperName1 += hacker1[i] + ' ';
}

console.log(upperName1.toUpperCase())

//3.2
let upperName2 = '';

for (let i = hacker2.length -1; i >= 0 ; i--){
    upperName2 += hacker2[i];
}

console.log(upperName2)

//3.3

let lexicOrder = hacker1.localeCompare(hacker2);

if (lexicOrder = -1) {
    console.log("The driver's name goes first.");
} else if (lexicOrder = 1){
    console.log("Yo, the navigator goes first definitely.");
} else if (lexicOrder = 0) { 
    console.log("What?! You both have the same name?");
}

/* Bonus 1

let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis et est eu commodo. Vestibulum ut varius lorem. Aliquam accumsan sagittis lacus ac luctus. Phasellus sed nibh malesuada, faucibus sem eu, posuere dolor. Ut lacinia ipsum ut odio placerat pharetra. Sed lectus ex, pretium ac ipsum vel, hendrerit finibus augue. Nullam sed lectus quis nunc faucibus viverra. Nulla consectetur ex augue, nec lobortis nisl ultrices non. Praesent in elementum leo. Cras et cursus est. Pellentesque eget pulvinar ante. Sed vehicula tellus sed dolor consequat scelerisque. Donec id porta nisl. Donec in pellentesque lectus. Vivamus laoreet tempor tellus, at maximus augue tincidunt quis. Mauris finibus ex massa, vitae dictum dui blandit ut.

Suspendisse varius eu dui a lobortis. Integer dignissim arcu vestibulum metus fermentum, at aliquet metus molestie. Etiam in dictum enim, at suscipit augue. Maecenas at faucibus urna. Nam cursus sed dui at rutrum. Ut pellentesque enim nec metus consectetur elementum. Aenean vel purus eros. Duis dapibus semper purus a condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras aliquam orci ut sapien laoreet malesuada. Donec volutpat augue ac nisl eleifend facilisis. Phasellus et nunc dui. Fusce eu tempor neque, et feugiat purus. Maecenas imperdiet, sem ac dapibus sodales, felis est laoreet justo, ut dignissim odio felis maximus augue. Sed mollis lectus vitae arcu maximus blandit.

Nunc at consequat libero. Sed sem odio, dapibus nec justo non, molestie placerat ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ultrices purus purus, a lacinia mi tempus a. Phasellus felis est, dapibus a suscipit non, scelerisque eu justo. Aenean at nisi nec lacus interdum ornare. Vivamus consequat neque quis felis congue sollicitudin. Integer aliquam vestibulum risus, eu placerat orci tincidunt vel. Aenean quis enim ut velit interdum tincidunt. Sed dui mi, posuere id orci nec, cursus dignissim nisi. Sed nec maximus enim. Aenean ut odio molestie, eleifend turpis ut, efficitur ex.'

let count = 0

for (let i = 0; i <= paragraph.length; i++){
    console.log(i);
}

*/