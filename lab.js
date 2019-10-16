// General ---------------------------------------------------------------

var hackerBig = "";         //driver's name in uppercase
var reverseName = "";       //navigator's name in reverse
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum lacus ex, eu finibus sapien suscipit vitae. Vivamus ut eros lectus. Integer tempus in nibh eu suscipit. Ut arcu est, egestas vitae lacus eu, bibendum consectetur dolor. Proin cursus erat non dui bibendum, at aliquam quam aliquam. Duis faucibus mauris id lacus pharetra, sit amet vulputate sem lacinia. Praesent vitae magna ac dolor tempor semper. Praesent at porttitor neque. Integer leo mi, vehicula ut varius non, suscipit sed erat. Nullam varius, est quis suscipit interdum, erat augue sagittis est, vitae finibus tortor est at tellus. Donec pharetra neque nisi, sed rutrum urna molestie eget. Praesent suscipit ligula in fringilla pellentesque. Nulla facilisi. Praesent ipsum sapien, ornare sit amet malesuada sed, tempus vitae mauris. Sed ex lacus, blandit ut magna a, condimentum placerat arcu. Suspendisse ut urna imperdiet, elementum ante eu, sagittis sem. Donec faucibus faucibus neque. Aliquam ultrices semper arcu, vel dapibus velit commodo at. Vestibulum dictum varius sodales. Nullam et bibendum dui. Nulla facilisi. Ut lacinia condimentum augue, id ultrices erat tristique nec. Aliquam sapien mauris, consectetur id rhoncus ac, porta vitae lacus. Phasellus in tincidunt sapien. Pellentesque ut ornare lectus. Duis luctus, leo et aliquet ultricies, orci orci fermentum sapien, id consectetur dolor ligula a elit. Vestibulum at quam et nulla tincidunt fringilla vitae et lorem. Curabitur neque ante, imperdiet id enim dictum, sollicitudin rutrum velit. Cras sed massa mi. Etiam porttitor eget ex ac tincidunt. Proin et cursus diam. Aenean imperdiet velit vel interdum auctor."
var wordsCount = 0;         //count the number of words in a text
var spaceCount = 0;         //count the number of spaces in a text
var etCount = 0;            //count the number of et in a text

//  Iteration 1 -------------------------------------------------------------------

console.log("I'm ready!");
var hacker1 = "Guillaume";
console.log("The driver's name is " + hacker1);
var hacker2 = "Clara";
console.log("The navigator's name is " + hacker2);

// Iteration 2 -------------------------------------------------------------

if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both got equally long names, ${hacker2.length} characters!`)
}

// Iteration 3 -------------------------------------------------------------

for (let i = 0; i < hacker1.length; i++) {
    hackerBig += hacker1[i].toUpperCase() + " ";

}

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}

console.log(hackerBig);
console.log(reverseName);

var first = [hacker1, hacker2];
first.sort();

if (first[0] === first[1]) {
    console.log("What?! You both got the same name?");
} else if (first[0] === hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("The driver's name goes first.");
}

// Bonus-----------------------------------------------------------------------

for (let j = 0; j <= text.length; j++) {
    if (text[j] === " ") {
        spaceCount = spaceCount + 1;

    }
}
wordsCount = spaceCount + 1
console.log(`This text contain ${wordsCount} word(s)`)

for (let k = 0; k <= text.length; k++) {
    let kWord = text[k] + text[k + 1] + text[k + 2] + text[k + 3]
    if (kWord === " et ") {
        etCount = etCount + 1;
    } else if (kWord === " et,") {
        etCount = etCount + 1;
    } else if (kWord === " et.") {
        etCount = etCount + 1;
    } else if (k === text.length) {
        if (text[0] + text[1] + text[2] === "et ") { etCount = etCount + 1 }
    }
}
console.log(`This text contain ${etCount} "et" word(s)`);