// Iteration 1: Names and Input

let hacker1 = "Johannes";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Johannes";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
for (let i = 1; i <= hacker1.length; i += 1) {
    console.log(hacker1[i-1].toUpperCase());
}

for (let i = 1; i <= hacker2.length; i += 1) {
    console.log(hacker2[hacker2.length-i]);
}

if (hacker1<hacker2) {
    console.log("The driver's name goes first.");
} else if(hacker2<hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et! Donec vehicula nibh eu volutpat tincidunt. Sed eget arcu mauris. Aliquam nec augue efficitur, pharetra velit in, luctus urna. Cras ultrices fringilla nisl, et dapibus enim porta vitae. Quisque nibh justo, venenatis sed sollicitudin a, fermentum at nisi. Maecenas id leo id est rhoncus tincidunt sed at orci. Aenean dictum et ex nec vehicula. Sed id tincidunt nisi. Maecenas scelerisque, felis ut semper tristique, purus justo dignissim magna, viverra tempor dolor nisl sit amet massa. Sed vitae augue ut augue varius vulputate. Quisque sollicitudin laoreet laoreet. Sed libero enim, faucibus sit amet nulla vel, scelerisque blandit nibh. Pellentesque nec dictum velit. Donec lacinia vestibulum massa et ullamcorper. Sed eu tortor quis felis ultrices venenatis. Phasellus semper auctor orci. Vivamus venenatis convallis porttitor. Etiam ut lectus lobortis mauris vestibulum suscipit. Morbi sed molestie sem, quis laoreet turpis. Duis porta purus ut ultricies rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In sodales lectus sed metus ullamcorper fringilla. Aliquam varius velit vel nisi imperdiet, at tristique purus malesuada. Aliquam varius urna in felis faucibus tincidunt.";
let numberOfWordsInString = 1
for (let i = 1; i < text.length; i += 1) {
    if (text[i] === " ") {
        numberOfWordsInString += 1;
    }
} 

console.log(numberOfWordsInString);

let numberOfEt = 0;

for (let i = 0; i < text.length; i += 1) {
    if (text[i].toLowerCase() === "e" && text[i+1] === "t" && (text[i+2] === " " || text[i+2] === "." || text[i+2] === "?" || text[i+2] === "!")) {
        numberOfEt += 1;
    }
}

console.log(numberOfEt);

//Bonus 2

let phraseToCheck = "Step on no pets";

let phraseReversed = "";

for (let i = phraseToCheck.length; i > 0; i -= 1) {
    phraseReversed += phraseToCheck[i-1];
} 

if (phraseToCheck.toLowerCase() === phraseReversed.toLowerCase()) {
    console.log("This is a palindrome!")
}
