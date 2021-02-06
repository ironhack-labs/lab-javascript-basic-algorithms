// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.

const hacker1="Roberto";

//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`);


//1.3 Create a variable `hacker2` with the navigator's name.

const hacker2="Daniela";

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigator's name is ${hacker2}`);

// ITERATION 2: Conditionals
// 2.1. Depending on which name is longer, print:

const lengthH1 = hacker1.length
const lengthH2 = hacker2.length

if (lengthH1>lengthH2) {
  console.log(`The driver has the longest name, it has ${lengthH1} characters.`)
} if (lengthH1<lengthH2) {
  console.log(`It seems that the navigator has the longest name, it has ${lengthH2} characters.`)
} if (lengthH1===lengthH2) {
  console.log(`Wow, you both have equally long names, ${lengthH1} characters!`)
}

// ITERATION 3 Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let namePrinted = ""

for (i=0; i<lengthH1;i++) {
  namePrinted += hacker1.charAt(i)+ " "
}
console.log(namePrinted.toUpperCase())


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let j=hacker1.length-1
let nameBackwards =""

while (j>=0) {
  nameBackwards += hacker1.charAt(j)
  j--
}
console.log(nameBackwards)

//3.3 Depending on the lexicographic order of the strings, print:
let comparacion = hacker1.localeCompare(hacker2)

if(comparacion===-1){
  console.log(`The driver's name goes first.`)
} if (comparacion===1) {
  console.log(`Yo, the navigator goes first definitely.`)
} if (comparacion===0) {
  console.log(`What?! You both have the same name?`)
}


// Bonus Time!
// Bonus 1: 
// Go to lorem ipsum generator and:

//Generate 3 paragraphs. Store the text in a variable type of string.
//Make your program count the number of words in the string.

let texto = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum lacus nunc, posuere tempus dolor euismod ultrices. Fusce a velit ut dolor efficitur maximus sit amet elementum nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sed aliquet dui. Integer condimentum ut turpis quis placerat. Aenean gravida lacinia scelerisque. Duis commodo tortor sed purus porttitor tempor. Vestibulum imperdiet neque felis, eget vestibulum nunc malesuada id. Proin in justo vitae magna consectetur scelerisque vitae quis diam. Sed sit amet tortor urna. In finibus, nisi vel cursus imperdiet, erat diam venenatis lorem, eu vehicula odio augue fringilla elit. Etiam vel semper tortor. Pellentesque vitae eleifend nisl. Donec sem ante, dignissim id urna pellentesque, aliquam lacinia ante. Nullam blandit, lacus laoreet pulvinar porta, justo libero vulputate lorem, non consectetur lacus lacus at eros.

Sed vitae fermentum ligula. Pellentesque malesuada bibendum tempor. Nullam metus mi, fermentum ut lacinia eleifend, finibus et ante. Quisque urna quam, feugiat non vulputate nec, vulputate at sapien. In lobortis leo at arcu lobortis, eu ultricies dui eleifend. In pulvinar sodales facilisis. Sed ac elit sapien. Aliquam augue metus, tempor eu aliquam a, suscipit eu arcu. Nunc nec iaculis nunc, quis suscipit dui. Cras vehicula dui nec euismod elementum. Pellentesque dapibus lectus ut condimentum sagittis. Mauris tincidunt sem sed metus rutrum, et luctus ante tincidunt. Vestibulum dignissim nunc id enim egestas auctor. Fusce eu convallis lectus.

Sed vitae metus ac dui eleifend posuere. Curabitur rhoncus justo sed nisi vehicula sollicitudin. Ut eget est odio. Quisque vehicula, nunc in aliquet posuere, ante lacus dictum magna, vitae sodales enim elit volutpat nibh. Pellentesque quis nisl at metus volutpat pellentesque. Praesent mattis ligula dui, eget vulputate augue porttitor sit amet. Vestibulum eu turpis et sem gravida posuere. Morbi nibh turpis, vulputate vel orci non, pharetra viverra erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sodales tempus arcu, ac tincidunt lorem mollis sit amet. Suspendisse vestibulum purus justo, eget maximus ligula feugiat id.`.split(' ')

console.log(`The text has ${texto.length} words`)

