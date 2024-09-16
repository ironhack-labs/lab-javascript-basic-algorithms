// Iteration 1: Names and Input
let hacker1 = 'Agu';
console.log("The driver's name is" + hacker1);
let hacker2 = 'Maria Juana'
console.log("The navigator's name is" + hacker2);




// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has" + hacker1.length + " characters.")
}
else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longes name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names , " + hacker1.length + " characters!");
}

// Iteration 3: Loops
let hacker1UpperCase = '';
for (let i = 0; i < hacker1.length; i++) {
    hacker1UpperCase += hacker1[i].toUpperCase() + " ";


}
console.log(hacker1UpperCase.trim());
let hacker2Reverse = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverse += hacker2[i];

}
console.log(hacker2Reverse);
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");


} else {
    console.log("What?! You both have the same name?")
}
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies efficitur ullamcorper. Proin vitae urna mattis, interdum dui sit amet, fringilla lacus. Suspendisse potenti. Sed viverra lectus lorem, at efficitur justo efficitur vitae. Fusce id ligula quis nibh tempor hendrerit. Aliquam non vestibulum enim. Integer dictum dictum lacus, ac pharetra nunc commodo a. Sed condimentum lobortis dolor, ut faucibus odio vulputate a. Fusce cursus posuere pellentesque. Integer aliquet pulvinar lorem at dictum. Donec viverra iaculis neque ac eleifend. Nulla luctus elit in dui viverra, sit amet cursus nunc aliquet. Donec sollicitudin dolor eget volutpat tincidunt. Aliquam fringilla augue tellus, eu eleifend ex elementum ac. Proin viverra diam libero, non dignissim ligula pulvinar sed.";
let wordCount = 0;
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === "") {
        wordCount++;
    }
    if (longText.slice(i, i + 2) === "et") {
        etCount++;
    }
}
wordCount++;
console.log("Number of words in the string: " + wordCount);
console.log("Number of times 'et' appears: " + et);

