// Iteration 1: Names and Input
const hacker1 = 'Piero'
console.log(`The driver's name is ${hacker1}`)
const hacker2 = 'Mariana'
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
const longestName = hacker2.length
console.log(`The navigator has the longest name, it has ${longestName} characters`) 

// Iteration 3: Loops

const driver = "Piero";
let result = " ";
for (let i = 0; i < driver.length; i++) {
    result += driver[i].toUpperCase() + " "
}
console.log(result);
const navigator = "Mariana"
let backwardsName = " "
for (let i= navigator.length -1; i >= 0; i--) {
    backwardsName += navigator[i]
}
console.log(backwardsName)


 if (navigator<driver) {
    console.log ("Yo, the navigator goes first, definitely.")
 }
else if (navigator>driver) {
    console.log ("The driver's name goes first")
}
else if (navigator=driver) {
    console.log("What?! You both have the same name?")
}
else {
    console.log("Try again later")
}
 
//BONUS 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit vulputate vestibulum. Donec odio metus, ultricies ac dictum in, tempor sed metus. Ut lacinia a justo ut venenatis. Vivamus hendrerit semper justo, a molestie nunc rutrum sed. Morbi et tristique dui, quis varius lorem. Donec vitae eros felis. Aenean sed risus in enim hendrerit pretium. Nunc faucibus facilisis varius. Vivamus eget mi id ipsum imperdiet porta. Donec lacus nibh, egestas id turpis eget, egestas sollicitudin justo. Etiam convallis tempor nisl in cursus. Morbi id accumsan urna. Mauris sit amet massa porttitor, iaculis justo ut, lobortis odio. Cras pretium urna ac est cursus, et facilisis lorem pellentesque. Etiam tincidunt laoreet mattis."
+
" Aenean quis elit sed ex porta accumsan sit amet at neque. Nulla dapibus in dui rhoncus vestibulum. Praesent sodales dui arcu, ut viverra diam venenatis vitae. Mauris vel erat feugiat, sollicitudin elit ac, lacinia sem. Suspendisse luctus quam eu diam volutpat efficitur. Curabitur blandit sem quis vulputate viverra. Fusce eget dui vitae sapien volutpat finibus."
+
" Nulla sit amet ante in neque consequat porttitor vel sed ex. Curabitur eu consequat ex, sed tincidunt lacus. Vestibulum ultrices rutrum aliquam. Mauris vulputate mauris placerat urna pellentesque, nec tempor tellus aliquam. Donec ipsum nunc, pharetra eu elit vel, cursus iaculis sapien. Aenean dapibus mattis fringilla. Aliquam erat volutpat. Suspendisse sit amet finibus augue, sit amet ullamcorper elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget sem quam. Integer in sodales nunc. Sed vitae consequat lectus, sit amet commodo tortor."

let wordArr = longText.split(" ");
let wordCount = wordArr.length;
console.log(wordCount)

let etCounter = 0

for (let i= 0; i<=wordArr.length; i++) {
    if (wordArr[i] === "et") {
        etCounter++
    }
}
console.log (etCounter)

//BONUS 2

let phraseToCheck = "radar";

let wordLow = phraseToCheck.toLowerCase();

let wordRev = wordLow.split("").reverse().join("")

let isPalindrome = wordLow === wordRev

console.log(isPalindrome)

//Does not work with separated words or symbols