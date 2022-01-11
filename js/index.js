// Iteration 1: Names and Input

// 1.1.
let hacker1 = "Stephan";

// 1.2.
console.log(`The driver's name is ${hacker1}`);

// 1.3.
let hacker2 = "Zena";
let hacker3 = "Denise";

// 1.4.
console.log(`The navigators' names are ${hacker2} and ${hacker3}`);


// Iteration 2: Conditionals

// 2.1.
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

// 3.1. 
let lettersToPrint = "";
for (let i = 0; i < hacker1.length; i++) {
  capLetter = hacker1[i].toUpperCase();
  lettersToPrint = lettersToPrint.concat(capLetter, " ");
}
console.log(lettersToPrint);

// 3.2.
let lettersReversed = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    lettersReversed = lettersReversed.concat(hacker1[i], " ");
}
console.log(lettersReversed)


// Bonus 1:

let myParagraph = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ultrices nisi. Aliquam erat volutpat. Phasellus diam felis, imperdiet sit amet iaculis at, consequat id felis. Nunc ultrices ultricies placerat. Duis ac ipsum at odio aliquet consequat vel et sapien. Quisque iaculis dolor quis tellus suscipit placerat. Vivamus pulvinar eros a dolor accumsan, id varius risus ultricies. Donec auctor sem id pulvinar porttitor. Nam luctus suscipit libero et rhoncus. Nullam congue tellus felis, faucibus rhoncus mauris tempor at. Praesent eu orci quis metus pharetra laoreet. Morbi sed molestie metus, at hendrerit ex. Integer urna neque, tincidunt ac interdum faucibus, rhoncus vitae augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris luctus tincidunt lorem, ullamcorper cursus odio volutpat a.

Ut egestas elementum venenatis. Sed blandit, mi at blandit auctor, leo est lobortis lacus, ac commodo sapien dolor feugiat diam. Nullam nec viverra nulla. Morbi quis mi non enim fringilla gravida. Vestibulum et est vel nisl pellentesque condimentum. Praesent sit amet quam eu neque porta blandit. Vivamus lobortis laoreet libero. Nulla cursus blandit lorem. Vestibulum cursus rhoncus nibh vel porttitor. Duis eleifend ultrices condimentum. Praesent pulvinar eleifend justo, in fermentum justo. Nunc fermentum nec quam eu sodales. Aliquam sed ex tristique, maximus velit nec, dignissim erat. Nullam maximus sagittis suscipit.

Aenean dapibus nisl mauris. Etiam in odio tellus. Sed sagittis felis dolor, quis faucibus nibh euismod sed. Phasellus sollicitudin nunc finibus tempus venenatis. Nulla facilisi. Mauris tincidunt purus at justo posuere, at lacinia augue scelerisque. Suspendisse id lacus lectus. Morbi nec lectus tempor, dictum sem ut, mollis nibh. Mauris vitae egestas lorem, quis posuere ante. Proin convallis mollis libero, vitae congue dui vestibulum non. Cras id mi ultricies, lobortis metus vitae, consectetur lacus. Praesent arcu ante, porttitor eget magna ac, consequat varius augue. Etiam sed tristique justo. Nam auctor euismod ultricies.
`;

let wordList = myParagraph.split(" ");
console.log(`Paragraph has ${wordList.length} words.`)

const wordToBeCounted = "et";

let count = 0;
for (let i = 0; i < wordList.length; i++) {    
    word = wordList[i].toLowerCase();
    word = word.replace(/[^\w\s]/g,"") // strip signs
    if (word === wordToBeCounted) {
        console.log(wordList[i]);
        count++;
    }
}

console.log(`Word "${wordToBeCounted}" appears ${count} times in paragraph.`)

// Bonus 2:


let phraseToCheck = `Anna`

phraseToCheck = phraseToCheck.replace(/[^\w\s ]/g,"") // strip signs

letterIsEqual = [];
for (let i = 0; )



