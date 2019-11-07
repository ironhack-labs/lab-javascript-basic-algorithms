// Iteration 1: Names and Input
// 1.1
let hacker1 = "Pedro Méndez";
// 1.2
console.log(`The driver's name is ${hacker1}`);
// 1.3
let hacker2 = "Carlos Mateo";
// 1.4
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
// 2.1
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
if (hacker1) {
    // 3.1
    console.log(hacker1.toUpperCase().split('').join(' '));

    // 3.2
    console.log(hacker1.split('').reverse().join(''));
}

// 3.3
if (hacker1.charAt(0) < hacker2.charAt(0)) {
    console.log(`The driver's name goes first.`);
} else if (hacker2.charAt(0) < hacker1.charAt(0)) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}


// Bonus 1:
let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta erat a urna consequat scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris egestas elit vitae vulputate venenatis. Cras iaculis lorem quam, eget rutrum mauris pulvinar eget. Nam interdum dictum dui in pellentesque. Proin eget metus lorem. Donec pretium euismod cursus. Suspendisse gravida sollicitudin risus sit amet condimentum. Sed egestas pharetra laoreet.

Morbi in velit mattis, eleifend lectus ornare, convallis libero. Etiam metus nibh, consectetur ut ex eget, porttitor laoreet nibh. Nunc sodales, elit nec aliquet viverra, velit eros varius lectus, at porttitor nisi ligula ut ex. Mauris et orci scelerisque, vehicula dolor sit amet, tincidunt justo. Vivamus dapibus turpis et ipsum semper, sed ultricies sapien fringilla. Curabitur et blandit ligula. Maecenas quis venenatis nisl, sit amet dignissim velit.

Nunc gravida lectus ligula, ac iaculis nulla gravida in. Pellentesque pulvinar, metus a varius consequat, nunc erat rutrum lacus, vitae egestas velit tellus non nisl. Nullam scelerisque tincidunt urna sit amet feugiat. Curabitur sodales justo sed erat vulputate iaculis. Mauris a lacus in purus vehicula efficitur quis eget metus. Donec rhoncus a erat id dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non placerat nunc.`;

paragraphs.replace(/\n+/g, ' ').split(' ').length;


// Bonus 2:
let userInput = prompt(`Please enter a sentence. I'll verify where it's a palindrome or not 😎`);

let sentence = userInput.toLowerCase().replace(/\W/g, '');
let reversedSentence = sentence.split('').reverse().join('');

if (sentence === reversedSentence) {
    console.log(`${userInput} - it's a palindrome! ✅`)
} else {
    console.log(`${userInput} - it's not a palindrome! 🙅🏻‍♂️`)
}