// Iteration 1: Names and Input

// 1.1
const hacker1 = "Manuel";
// 1.2
console.log(`The driver's name is ${hacker1}`);
// 1.3
const hacker2 = "Sara";
// 1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

// 3.1
for (let i = 0; i < hacker1.length; i++) {
    console.log (hacker1[i].toUpperCase())
}
// 3.2
for (let i = hacker2.length - 1; i >= 0 ; i--) {
    console.log (hacker2[i])
}
// 3.3
if (hacker1.localeCompare(hacker2) === -1) {
  console.log (`The driver's name goes first.`)
} else if  (hacker1.localeCompare(hacker2) === 1) {
  console.log (`Yo, the navigator goes first definitely.`)
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log (`What?! You both have the same name?`)
} else {
  console.log ('You must write a string type of name')
}

// BONUS 1

// Bonus 1.1
const loremIpsun = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque viverra auctor. Phasellus nec eleifend risus. Donec justo risus, interdum at venenatis eget, faucibus in ante. Morbi urna elit, pretium non lobortis ut, consectetur sed nulla. Duis ut tempor ipsum. Aenean euismod tortor in odio ullamcorper, id fringilla lorem laoreet. Nullam eu feugiat velit. Sed vitae arcu porttitor, porta quam ut, mattis magna.
Aliquam bibendum ante quis accumsan ultrices. In hac habitasse platea dictumst. Nullam tempus tortor eget eros commodo aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec eros dui. Ut volutpat nulla eu odio suscipit maximus. Ut condimentum tortor nec justo mattis ultrices. Vestibulum malesuada vehicula libero, vel aliquam nisi malesuada non. Vestibulum massa est, convallis quis imperdiet non, bibendum id orci.
Integer mattis turpis non lacinia faucibus. Mauris pellentesque mollis est maximus interdum.Ut interdum pellentesque enim aliquet aliquet.Suspendisse bibendum ex in mi placerat rutrum.Proin nunc eros, porttitor nec ornare at, consequat vel dolor.Ut sodales velit et volutpat laoreet.Nulla rutrum sollicitudin nunc at faucibus.Maecenas scelerisque ligula at sapien venenatis dapibus.Vestibulum ut ipsum dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque vitae eros et nisi posuere interdum eget consequat justo.";
// Bonus 1.2
let divideLoremIpsun = loremIpsun.split("");

let numberOfWords = divideLoremIpsun.length;

console.log(numberOfWords);
//Bonus 1.3

// Hasta aquí hemos llegado
