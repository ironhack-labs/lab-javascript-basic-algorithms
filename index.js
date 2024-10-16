// Iteration 1: Names and Input
let hacker1 = 'Nigel';
console.log(`The driver's name is ${hacker1}`);

let hacerk2 = 'Mikel';
console.log(`The navigator's name is ${hacerk2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacerk2.length) {
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
    
} else if (hacker1.length < hacerk2.length){
    console.log(`It seems that the ${hacerk2} has the longest name, it has ${hacerk2.length} characters. `);
    
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
let newHacker1 = ''

for (let i = 0; i < hacker1.length; i++) {
    newHacker1 += hacker1[i].toUpperCase()+ ' ';    
}

console.log(newHacker1);

let newHacker2 = '';

for (let i = hacerk2.length -1; i >= 0; i--) {
    newHacker2 += hacerk2[i];  
}
console.log(newHacker2);

console.log(hacker1.localeCompare(hacerk2)); //1
if (hacker1.localeCompare(hacerk2)) {
    console.log('Yo, the navigator goes first, definitely.');
}

//Bonus 1.

const longText = 'Aenean justo magna, pharetra quis tincidunt vitae, ultrices eget risus. Vestibulum sit amet eleifend quam, id varius diam. Morbi elementum porttitor pretium. Praesent non faucibus mi. Phasellus vitae bibendum enim, eget auctor eros. Nam tempor, sapien sed vulputate rhoncus, ex ligula fringilla eros, sit amet pulvinar turpis turpis a mauris. Aliquam mollis sed odio quis rhoncus. Proin elit ipsum, posuere ac ex vel, aliquam iaculis enim. Quisque ornare porttitor tempor. Aenean condimentum nisl dictum iaculis ultricies. Donec diam ligula, rhoncus quis placerat ac, mollis ac mauris.';
console.log(longText.length); // 585
console.log(longText.match(/et/g));

//Bonus 2.


