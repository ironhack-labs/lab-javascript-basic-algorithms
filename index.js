// Iteration 1: Names and Input

let hacker1 = "Silvia"
console.log("The driver's name is " + hacker1)

let hacker2 = "Gunnar"
console.log("The navigator's name is " + hacker2)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
    else if (hacker1.length < hacker2.length){
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }


// Iteration 3: Loops

let hacker1UpperCase = ""
for (i=0; i < hacker1.length; i++) {
    hacker1UpperCase += hacker1[i].toUpperCase() + ` `
}
console.log(hacker1UpperCase)


let hacker1Reverse = " "
for (i=hacker1.length-1; i >= 0; i--) {
    hacker1Reverse += hacker1[i]
}
console.log(hacker1Reverse)



if (hacker1 > hacker2){
    console.log("The driver's name goes first.")
}
    else if (hacker1 < hacker2){
        console.log("Yo, the navigator goes first, definitely.")
    }
    else {
        console.log("What?! You both have the same name?")
    }


// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui tortor, porttitor ut magna pulvinar, malesuada aliquet orci. Integer feugiat, neque vel facilisis dignissim, mi magna dictum est, quis rhoncus dui justo eu odio. Quisque ultricies, orci id sollicitudin imperdiet, mi velit blandit justo, sit amet aliquam erat est sed dolor. Duis ac est non arcu dapibus vulputate. Duis rhoncus tellus risus, a eleifend justo consequat non. Morbi sit amet varius tellus, id viverra turpis. Fusce varius tempor urna et imperdiet. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non velit at elit accumsan laoreet. Nulla et consectetur turpis. Curabitur mauris urna, bibendum at quam nec, volutpat tincidunt sapien. Duis risus felis, iaculis ac dui in, faucibus pretium odio. Sed ornare ut dolor ut feugiat. Phasellus venenatis iaculis libero quis venenatis. Nullam in mollis ante. Nulla sed facilisis lacus. Vivamus eu magna a odio auctor hendrerit. In ac tristique enim. Sed blandit diam eget vestibulum pulvinar. Aliquam eu mattis enim, quis sodales justo. Phasellus orci turpis, vestibulum aliquet dapibus consequat, efficitur eu turpis. Nulla posuere, metus eget pharetra porta, tortor eros gravida dui, eget pretium mauris metus et lectus. Morbi eu purus sed augue mattis rhoncus. Aenean elementum metus eget blandit euismod. Nullam luctus cursus vulputate. Phasellus fermentum mauris eget pellentesque convallis. Morbi facilisis mauris lorem, at convallis lectus ultricies non. Curabitur ullamcorper nulla ac metus blandit, nec aliquet nibh sodales. Nulla mi orci, tristique ut rhoncus sed, auctor quis mi. Integer auctor auctor nisi in dictum. In posuere risus turpis, id ullamcorper nisi blandit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vulputate mauris in dolor eleifend, sed laoreet nisl luctus. Cras tempor ligula sed molestie ultricies. Vivamus ultrices tristique pretium."

let countSpace = 0
let countEt = 0

for (i=0; i < longText.length; i++) {
    if ( " " === longText[i]){
        countSpace += 1
    }
    if ( "et" === longText[i] + longText[i+1]){
        countEt += 1
    }
}
console.log(countSpace)
console.log(countEt)


// Bonus 2

const phraseToCheck = "step on no pets"
let phraseToCheckReverse = ""
let phraseToCheckNoSPace = ""

//Remove spaces

for (i=0; i < phraseToCheck.length; i++){
    if ( " " === phraseToCheck[i])
        continue
    else {
        phraseToCheckNoSPace += phraseToCheck[i]
    }
    }
console.log(phraseToCheckNoSPace)


//Reverse
for (i=phraseToCheckNoSPace.length-1; i >= 0; i--) {
    phraseToCheckReverse += phraseToCheckNoSPace[i]
}
console.log(phraseToCheckReverse)


//Compare
if (phraseToCheckNoSPace === phraseToCheckReverse){
    console.log("It´s a palindrome!")
}
else {
    console.log("It´s not palindrome!")
}
