// Iteration 1: Names and Input
const hacker1 = "Juan";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Pedro";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2} characters.`)
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length && hacker2.length} characters!`)
}

// Iteration 3: Loops

let hacker1Capitalized = "";

for (i = 0; i < hacker1.length; i++) {
    hacker1Capitalized += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1Capitalized);

let hacker2Reversed = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed sapien posuere, egestas nulla ac, pretium sem. Fusce ac nibh arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris pharetra malesuada augue, at rutrum metus ultrices ut. Donec eget urna egestas tellus pulvinar mollis. Etiam tempus odio non erat dapibus tincidunt. Etiam lacinia vestibulum ultricies. Vestibulum rutrum turpis in tellus rutrum interdum. Nam venenatis nunc id risus maximus, vel ornare nisl semper. Fusce fringilla ipsum sed odio efficitur, imperdiet vestibulum leo dignissim. Suspendisse vehicula metus vitae augue molestie aliquam. Sed gravida nulla a purus elementum, quis feugiat nulla fringilla. Phasellus laoreet erat ac facilisis hendrerit. Aenean tempus scelerisque sodales. Vivamus tincidunt elit ut semper pretium. Nullam a malesuada lacus. Aenean eu tellus auctor, accumsan risus id, feugiat libero. Nam ut elit vehicula, interdum arcu vitae, laoreet tellus. Aliquam tristique nunc id ante malesuada consectetur. Praesent diam purus, bibendum in sapien in, tempus dapibus augue. Integer nisl risus, sodales quis ornare id, sagittis a magna. Aenean vitae risus sit amet nisi porttitor aliquam. Nam nunc eros, tincidunt nec nibh in, gravida accumsan eros. Nullam fermentum fringilla velit at luctus. Suspendisse imperdiet odio augue, ac facilisis nibh commodo nec. Nullam tortor ligula, aliquet pulvinar facilisis vel, mollis non est. Sed ultrices, risus sit amet laoreet ultricies, tellus enim efficitur leo, ullamcorper sagittis mauris metus nec justo. Vestibulum rutrum hendrerit tincidunt. Aliquam sodales leo leo, sit amet lobortis metus varius ac. Aliquam placerat lobortis enim et laoreet. Vivamus eu molestie sem. Curabitur luctus, velit at faucibus ultrices, sapien metus pellentesque diam, quis lobortis arcu massa vitae enim. Vivamus vitae volutpat risus. Donec lacus urna, efficitur eget auctor id, eleifend vitae nunc."

let countWords = longText.split(" " || ".").length

console.log(countWords)

const phraseToCheck = `Was it a car or a cat I saw?`
let phraseModified = ""
let phraseReversed = ""

phraseModified += phraseToCheck.toLowerCase().replaceAll("[^a-z-0-9]", "")


for (let j = phraseToCheck.length - 1; j >= 0; j--)
    phraseReversed += phraseToCheck[j].toLowerCase()

if (phraseToCheck === phraseReversed) {
    console.log('Yes! It is a Palindrome!')
} else {
    console.log('Sorry... this is not a palindrome.  :( ')
}
