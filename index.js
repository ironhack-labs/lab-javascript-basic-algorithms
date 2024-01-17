// Iteration 1: Names and Input
// Driver
const hacker1 = "Stefan";
console.log(hacker1);

// Navigator
const hacker2 = "Dilan";
console.log(hacker2);

// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker1Length < hacker2Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Length} characters`
  );
} else {
  console.log(`What?! You both have the same name?`);
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let hacker1Update = "";

for (let i = 0; i <= hacker1Length - 1; i++) {
  hacker1Update += hacker1[i] + " ";
}

console.log(hacker1Update);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let hacker2Update = "";

for (let i = hacker2Length - 1; i >= 0; i--) {
  hacker2Update += hacker2[i];
}

console.log(hacker2Update);

// 3.3 Depending on the lexicographic order of the strings, print:
// console.log(hacker1.localeCompare(hacker2))

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus
// Generate 3 paragraphs. Store the text in a new string variable named longText.
// const longText = `Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.`;
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat pellentesque magna sit amet commodo. Integer felis est, dapibus at felis luctus, scelerisque ullamcorper diam. Nulla lectus sapien, fringilla eget sollicitudin in, bibendum id est. Fusce tempus eu dui vel tempus. Pellentesque nisl lorem, tristique quis commodo id, pretium nec sem. Fusce maximus faucibus congue. Suspendisse risus orci, suscipit sed euismod rutrum, tincidunt eget nisl. Cras at lacinia erat. Nam mollis ex risus. Phasellus et egestas neque, quis sollicitudin arcu. Praesent suscipit leo a lectus eleifend viverra.
Duis ut lacus ultrices sapien dignissim convallis. Suspendisse ac massa a urna porta pulvinar at a urna. Praesent id massa nibh. Integer sollicitudin risus in urna placerat, vel fermentum nunc luctus. Pellentesque at urna in diam blandit tempor in iaculis leo. Etiam quam nibh, bibendum rhoncus enim finibus, venenatis efficitur massa. Nam non tortor ipsum. Aliquam erat volutpat. Sed lobortis mi ante, venenatis euismod nunc hendrerit sit amet.
Nunc nec sollicitudin ex. Nunc a pretium sem. Suspendisse ac pretium odio, vel congue nisl. Aenean rhoncus bibendum mi id efficitur. Sed vitae eros et libero ultrices euismod vitae ac quam. Pellentesque ligula sapien, varius a lacus sed, pulvinar fringilla ex. Ut metus ipsum, vestibulum pellentesque augue at, pharetra suscipit nisl. Aenean efficitur consectetur turpis eget blandit. Maecenas malesuada lacus et elementum efficitur. Cras porta at nibh porttitor tincidunt. Aenean semper augue dui, placerat posuere eros accumsan in. Nam ac interdum diam, et imperdiet libero. Sed finibus vitae purus ut feugiat. Aenean molestie ante ut purus accumsan malesuada. Nulla in luctus urna.`;

const etText = "et et et no et"
// Make your program count the number of words in the string.
function textAnalysis(text) {
    let wordCount = 0
    let etCount = 0

    for (let i=0; i < text.length-1; i++) {
        // counting spaces and textbreaks
        if (text[i] === " " || text[i] === "\n") {
            wordCount++
        } 

        // console.log(text.slice(i, i+2))
        if (text.slice(i, i+2) === "et"){
            etCount++
        }
        
       
    }

    //totalWordCount is wordCount + 1 as each " " and textbreak is surrounded by two words
    let totalWordCount = wordCount + 1
    // console.log(etCount)
    return [totalWordCount, etCount]
}


let words = textAnalysis(longText);

console.log(`Total words in the text: ${words[0]}`)

// Make your program count the number of times the Latin word et appears.

console.log(`Total words of "et": ${words[1]}`)


