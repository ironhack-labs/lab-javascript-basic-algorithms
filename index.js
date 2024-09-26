// // Iteration 1: Names and Input
const hacker1 = "Maureen"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Andre"
console.log(`The navigator's name is ${hacker2}`)


// // Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}

else if (hacker2.length>hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// Iteration 3: Loops

let lettersInCaps = ""

for (i = 0; i < hacker1.length; i++) {
    let letters1 = hacker1[i].toUpperCase();
    lettersInCaps += letters1;
 } 
 console.log(lettersInCaps);

 let navReverse = ""

 for(i=hacker2.length-1; i >= 0; i-- ){
    navReverse += hacker2[i]
 }
 console.log(navReverse)

 if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
 }

 else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.")
 }


 else {console.log("What?! You both have the same name?")}

 // Bonus 1: 

 let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat elementum magna sed consectetur. Curabitur dictum imperdiet massa. Maecenas suscipit rhoncus dictum. Nunc sit amet felis sit amet massa mattis volutpat. Phasellus scelerisque pellentesque feugiat. Pellentesque in iaculis tellus, ut commodo turpis. Curabitur in justo nec massa pulvinar hendrerit ac vestibulum lacus. Nulla sagittis, elit vitae porta cursus, libero ipsum auctor felis, vitae mattis magna elit sollicitudin diam. Morbi sed lorem facilisis augue tincidunt consequat id ac sapien. In nec risus id metus iaculis ultrices in et arcu. Nullam rhoncus convallis pulvinar. Donec sit amet magna non purus placerat mollis. Cras nec nisl vel ante lobortis pulvinar vel sit amet nulla. Phasellus tincidunt a magna eu imperdiet. Nullam at dolor vitae neque iaculis maximus. In pretium, dolor ut varius cursus, tortor risus malesuada tortor, aliquam faucibus velit est at elit. Mauris sed turpis nec dui hendrerit maximus. Cras pellentesque fringilla erat ac lacinia. Suspendisse non ex orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed et enim magna. Donec venenatis, mi sit amet sollicitudin tempus, ipsum velit lobortis elit, fringilla pretium nibh sapien id odio. Vivamus venenatis tincidunt nisl, ac ullamcorper eros efficitur eget. Proin suscipit venenatis bibendum. In gravida nibh mauris, vel pharetra lacus gravida id. Maecenas lobortis venenatis sem et malesuada. Nam sodales varius tincidunt. Donec eu felis interdum, maximus mi in, ornare dui. Quisque at vestibulum tortor."

// console.log(longText.trim().length)

let numChars = 0

for (i=0;i <= longText.length;i++) {
    let twoChars = longText[i] + longText[i + 1]
    if (twoChars === "et") {
        numChars += 1
    }
}

console.log(numChars)

// Bonus 2

let phraseToCheck = "amor roma"

let palindrome = ""

 for(i=phraseToCheck.length-1; i >= 0; i-- ){
    palindrome += phraseToCheck[i]
}
if(phraseToCheck === palindrome) {
    console.log("It's a palindrome!")
}
else {console.log("It's not a palindrome.")}


