// 1.1 Create a variable hacker1 with the driver's name. 
const hacker1 = "Kevin";

// 1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = "Ashraf";

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);

// 2.1. Depending on which name is longer, print: - The Driver has the longest name, it has XX characters or - Yo, navigator got the longest name, it has XX characters or - Wow, you both got equally long names, XX characters!
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters`);
}

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
console.log(hacker1.toUpperCase().split("").join(" "));

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
//Method 1
console.log(hacker2.split("").reverse().join(""));

// Method 2
let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName);

// 3.3 Depending on the lexicographic order of the strings, print: - The driver's name goes first. - Yo, the navigator goes first definitely. - What?! You both got the same name?
let lexi = hacker1.localeCompare(hacker2); // A-Z = -1 & Z-A = 1
if (lexi === -1) {
    console.log("The driver's name goes first");
} else if (lexi === 1) {
    console.log("The navigator's name goes first");
} else if (lexi === 0) {
    console.log("What?! You both have the same name?");
}

// Bonus Time
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat lacus ut efficitur rutrum. Donec placerat quam dui, semper rhoncus libero pretium eget. Cras nunc ex, tempor ut vehicula sed, suscipit eu mauris. Curabitur mattis fringilla erat vel cursus. Nam non ipsum non arcu aliquam ultrices. Sed rhoncus posuere purus quis eleifend. Nulla volutpat velit at ultricies laoreet. Sed vulputate orci vitae egestas posuere. Integer vel lorem quis turpis elementum condimentum. Nullam quis accumsan orci, vel semper turpis. Nam vitae commodo nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mi lorem, blandit eu fringilla semper, dignissim vel mi. Aliquam libero est, sodales vel nunc tristique, finibus tincidunt quam. Vivamus ut nulla pharetra sem placerat suscipit. Vestibulum massa ligula, euismod ac porttitor non, accumsan eget dolor. Maecenas et purus sit amet ex viverra posuere. Integer rutrum est at sem varius, vitae tempus erat semper. Donec commodo pulvinar viverra. Curabitur nisi sem, viverra dapibus tempor non, vulputate ut massa. Maecenas a vestibulum augue. Nulla lobortis sed turpis varius placerat. Proin quis mi sit amet neque lacinia pulvinar vel id tellus. Aenean ornare turpis sit amet dolor dignissim, vel ultrices augue faucibus. Suspendisse potenti. Nulla facilisi. Sed lacinia erat tempus sem convallis euismod sed hendrerit felis. Vestibulum ornare laoreet augue, sed vestibulum dui ultricies convallis. Etiam ut nibh risus. Nullam eros lectus, tincidunt ut facilisis in, commodo ac orci. Fusce vulputate rhoncus nulla sed auctor.";

let count = 0;
for (let i = 0; i < text.length; i++) {
    let wordCount = text[i] + text[i + 1];
    if (wordCount === "et") {
        count++;
    }
}
console.log(`The latin word et appears ${count} times`);

