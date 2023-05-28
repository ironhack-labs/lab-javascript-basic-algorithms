// Iteration 1: Names and Input
const hacker1 = 'jason'
console.log(`The driver's name is ${hacker1}`)
const hacker2 = 'Michael'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let letterUp = hacker1.toUpperCase();
let up = '';
for(let i=0; i<letterUp.length; i++){
   up += letterUp[i] + ' ';     
}
console.log(up)

let reverso = "";
for(let i = hacker1.length -1; i >= 0; i--) {
  reverso += hacker1[i];
}
console.log(reverso);

const newHacker1 = hacker1.split("").sort().join("");
const newHacker2 = hacker2.split("").sort().join("");
if (newHacker1 > newHacker2) {
    console.log("The driver's name goes first.")
} else if (newHacker1 < newHacker2) {
    console.log('Yo, the navigator goes first, definitely.')
} else {
    console.log('What?! You both have the same name?')
}

// Iteration Bonus 1: Lorem ipsum paragraphs

const longText = `
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend cursus mauris. Cras in elit vitae metus vestibulum viverra efficitur id
 orci. Aliquam blandit interdum magna, vitae ornare libero scelerisque a. Vestibulum non aliquam quam, vehicula pulvinar risus. Aenean
 ornare, risus eget pharetra sollicitudin, dui leo luctus elit, nec ultricies nisi lectus at enim. Vestibulum lobortis quam eget est cursus
 bibendum. Proin eget mattis nisl. Mauris in lorem aliquam, eleifend ipsum sed, tempus arcu. Nunc in mauris est. Suspendisse dui lacus,
 rhoncus sit amet rutrum dapibus, varius non massa. Phasellus suscipit mollis dui vel aliquam. Sed cursus sagittis arcu, sed gravida massa
 tincidunt vitae. Nam et imperdiet massa. Vestibulum laoreet sollicitudin fermentum.

 Duis tempus velit purus, eget interdum ex consectetur ac. Aliquam ullamcorper lectus tortor, nec rhoncus eros consectetur eu. Cras sed
 metus et est consectetur gravida sit amet ac mauris. Donec enim neque, fermentum ut placerat vitae, posuere quis nisl. Suspendisse in ex
 vitae odio scelerisque lobortis quis sit amet nisl. Suspendisse vel porttitor est. Mauris at nulla ac lectus imperdiet pretium cursus eu
 massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin aliquet ex eu tristique
 consectetur. Pellentesque quis lectus pretium, ornare enim eget, malesuada nulla. Integer rhoncus ante sit amet elit interdum, at viverra
 ante vulputate. Mauris nec pellentesque turpis. Nam orci metus, efficitur a nisl et, fringilla imperdiet diam. Ut nec elit tempor, suscipit ante
 id, semper orci. Nunc aliquam lorem non laoreet placerat.

 Sed convallis, erat nec facilisis sodales, lectus purus dapibus magna, id auctor ligula libero nec augue. Nam pharetra nibh magna, a
 accumsan odio lobortis vitae. Pellentesque finibus nulla non odio blandit efficitur. Vivamus sit amet eros ipsum. Phasellus sed euismod
 orci. In hac habitasse platea dictumst. Donec molestie, massa id blandit ornare, metus magna placerat sapien, nec fringilla odio libero sed
 sem.`

 const splitLongText = longText.split(/\s+/);
 let numeroDePalabras = splitLongText.length
 console.log(numeroDePalabras)

 let count = 0;
 for(let i = 0; i < splitLongText.length; i++){

    if(splitLongText[i] === 'et'){
        count++
    } 

 }
 console.log(count)

