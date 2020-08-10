// Iteration 1: Names and Input
let hacker1 = "Bas";
let hacker2 = "Max";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length && hacker2.length}`);
}

// Iteration 3: Loops
let splittedHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
    splittedHacker1 += hacker1[i].toUpperCase() + ' ';
}
splittedHacker1 = splittedHacker1.slice(0, -1); 

console.log(splittedHacker1);

let reversedHacker2 = "";
for (let i = hacker2.length -1; i >= 0; i--) {
    reversedHacker2 += hacker2[i];
}
console.log(reversedHacker2);


let compareNames = hacker1.localeCompare(hacker2);

console.log(compareNames)
if (compareNames < 0) {
    console.log("The driver's name goes first.");
} else if (compareNames > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1
let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, dictum eget aliquam eu, mollis et nisl. Vivamus iaculis porttitor eros sit amet volutpat. Sed pharetra, odio quis gravida pharetra, dui metus malesuada nisi, eu lacinia ante lacus efficitur purus. Sed condimentum dolor sit amet tortor semper, id pharetra felis lobortis. Curabitur eu suscipit nulla. Donec gravida lacus non erat blandit, a egestas turpis eleifend. Cras venenatis ligula ante, ac porttitor urna tincidunt eget. Aliquam pellentesque metus sit amet mi mattis finibus. Curabitur ullamcorper sem sed purus eleifend dignissim. Aenean aliquet feugiat justo. Morbi at est vel lorem tempor pellentesque ac ut libero. In quis pharetra nisi. Donec vel justo tempus, mattis ipsum eu, pellentesque lorem. Nullam aliquet, risus vel maximus imperdiet, metus leo aliquam mauris, ut vehicula leo nisl nec ipsum. Etiam enim nulla, pretium at sem a, iaculis cursus elit. Pellentesque imperdiet ultricies ex. Maecenas et massa nec mauris tincidunt volutpat. Pellentesque a posuere nunc, et interdum sem. Curabitur ornare nulla id lacus tincidunt, vel lobortis velit interdum. Donec tincidunt ullamcorper massa, quis pulvinar est pellentesque non. Vivamus ut ligula tempus, mattis arcu eget, convallis leo. Pellentesque id justo nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam mollis nulla elit, sit amet commodo nunc posuere ut. Proin finibus nisl eget lorem egestas, id feugiat libero venenatis. Pellentesque pellentesque tellus nec fringilla sollicitudin. Nam blandit felis sed lorem hendrerit, quis interdum augue ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vestibulum at felis id imperdiet.";
function WordCount(str) {
    return str.split(" ").length;
}

console.log(WordCount(loremText));

let countEt = loremText.match(/et/g || []).length;
    console.log(countEt);

// Bonus 2
let phraseToCheck = "race car";

function palindrome(str) {
    let len = str.length;
    let mid = Math.floor(len/2);

    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome(phraseToCheck));
