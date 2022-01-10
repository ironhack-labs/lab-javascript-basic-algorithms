console.log("i'm ready!")

// Iteration 1: Names and Input

let hacker1 = "Nikolas"

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Gabe"

// Iteration 2: Conditionals

console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

let newName = ""
for (i=0; i < hacker1.length; i++) {
    newName += hacker1[i] + " ";
}
console.log(newName.toUpperCase())

let reverseName = ""
for (i=hacker1.length-1; i>=0 ; i--) {
    reverseName += hacker1[i]
}
console.log(reverseName) 

let lengthToGo = 0;

if (hacker1.length >= hacker2.length){
    lengthToGo = hacker2.length;
} else if (hacker1.length <= hacker2.length){
    lengthToGo = hacker1.length;
}

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

let picked = false;
for (let i = 0; i < lengthToGo; i++){
    if (hacker1[i] > hacker2[i]){
        console.log("Yo, the navigator goes first definitely.")
        picked = true;
        break;
    } else if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.")
        picked = true;
        break;
    } 
}

if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
}
else if (picked === false) {
    if (hacker1.length > hacker2.length) {
        console.log("Yo, the navigator goes first definitely.")
    } else {
        console.log("The driver's name goes first.")
    }
}

// Bonus Section
//Lorem Ipsum Word Count
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo maximus lectus eu pellentesque. Proin magna nunc, fringilla eget tortor non, rhoncus imperdiet dolor. Curabitur ut imperdiet nulla, at rutrum dolor. Fusce quam orci, convallis vel consectetur vitae, faucibus ut ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rhoncus porttitor quam sed scelerisque. Sed semper ex et est vehicula, eu ultricies urna vehicula. Vestibulum facilisis nisl mattis molestie feugiat. Aenean a lorem vitae mauris malesuada lobortis in quis erat. Pellentesque faucibus gravida lorem, non scelerisque magna blandit sed. Nunc vestibulum sit amet purus varius sodales. Cras ac malesuada risus. Nulla id condimentum nibh, ac pharetra elit. Phasellus dictum auctor molestie. Nunc a ultricies dui, in elementum turpis. Quisque nulla ipsum, suscipit et mauris at, lobortis vehicula mi. Pellentesque condimentum in erat vitae luctus. Etiam id libero aliquam, porta felis eget, tristique orci. Nunc sed commodo nulla. Sed ac finibus tellus. Nullam consequat arcu id lacus aliquet sodales. Donec id quam luctus, vehicula sapien ac, ornare purus. Sed posuere tortor gravida justo iaculis, eu imperdiet metus sagittis. Morbi id enim non ante gravida pellentesque. Morbi posuere non ligula non consectetur. Cras sit amet iaculis sem. In id neque tincidunt mi pretium euismod. Nunc tincidunt volutpat maximus. Nunc dignissim non magna in tempor. Fusce auctor dolor a lorem posuere, ac lacinia nulla ornare. In vulputate nulla odio, quis consequat velit tempus vel."

let wordCount = 0

for (i=0; i < loremIpsum.length ; i++) {
    if (loremIpsum[i] = " ") {
        wordCount++
    } 
}
console.log("The number of words in this lorem ipsum is " + ++wordCount)
 
//Lorem Ipsum etCount
let etCount = 0
for (i=0; i < loremIpsum.length ; i++) {
    const char1 = loremIpsum[i]
    const char2 = loremIpsum[i+1]

    if (char1 === "e" && char2 === "t") {
        etCount++
    } 
}
console.log("The word et appears, " + etCount + " times.")

//Bonus Section 2

let phraseToCheck = "No 'x' in Nixon"
let reversePhrase = ""
let editedPhraseToCheck = ""

phraseToCheck = phraseToCheck.toLowerCase()
reversePhrase = reversePhrase.toLocaleLowerCase()

//           first attempt

// for (i=phraseToCheck.length-1; i>=0 ; i--) {
//     if (phraseToCheck[i]===" "||phraseToCheck[i]===","||phraseToCheck[i]==="."||phraseToCheck[i]==="!"||phraseToCheck[i]==="?"||phraseToCheck[i]==="'") { 
//         continue
//     } else {
//         reversePhrase += phraseToCheck[i]
//     }
// }



for (letter of phraseToCheck) {
    if (letter===" "||letter===","||letter==="."||letter==="!"||letter==="?"||letter==="'") {
        continue;
    }
    reversePhrase = letter.concat(reversePhrase);
    editedPhraseToCheck += letter;
}

 

if(reversePhrase === editedPhraseToCheck) {
    console.log("The phrase is a palindrome!")
} else {
    console.log("The phrase is not a palindrome :(")
}
