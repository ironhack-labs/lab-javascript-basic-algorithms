// Iteration 1: Names and Input
const hacker1 = `Diego Flores`
console.log(`The driver's name is ${hacker1}`)

const hacker2 = `Fernando Ramirez`
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)  {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long name, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let newWord = ''
for (i = 0; i < hacker1.length; i++) {
    newWord += hacker1.charAt(i)
}

console.log(newWord.toUpperCase())

let newWord2 = ''
for (i = hacker2.length -1; i >= 0; i--) {
    newWord2 += hacker2.charAt(i)
}

console.log(newWord2)

if (hacker2 > hacker1) {
    console.log(`The driver's name goes first`)
} else if (hacker1 > hacker2) {
    console.log(`The navigator goes first definitely`)
} else {
    console.log(`What?! you both have the same name?`)
}

paragraph = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Duis luctus
ex nulla, vel venenatis lacus dapibus non.
Interdum et malesuada fames ac ante ipsum
primis in faucibus. Nam lacinia scelerisque
leo, at sodales ipsum. Duis consectetur et
lacus ut ullamcorper. Fusce sodales lacus
vitae nibh gravida tempor. Mauris erat nisl,
fringilla non est sit amet, porta lobortis turpis.
Morbi facilisis ligula id lorem imperdiet feugiat
sit amet at turpis. Etiam convallis porttitor 
ligula vel finibus. Pellentesque in facilisis nisi.
 Aliquam lacinia arcu dolor, eu euismod lorem faucibus tincidunt. Nam a neque quam. Curabitur ac mi et dui vehicula consectetur non ut mi.

Donec ornare erat quis sagittis elementum. Donec 

condimentum, mi a commodo gravida, purus felis accumsan est, sit amet accumsan nunc justo a urna. Praesent faucibus suscipit dui ac ultricies. Aliquam erat volutpat. Nam eget mi diam. Integer scelerisque convallis diam vitae elementum. Donec non sem erat. Aenean ultrices semper quam, sit amet dictum risus elementum ac. Proin in molestie nunc, at varius magna. Nam sagittis tortor sed volutpat tincidunt. Nam maximus leo ultricies metus ullamcorper hendrerit. Sed mi nunc, tempus posuere ligula eget, dictum finibus lacus. Sed fermentum rhoncus efficitur. Sed feugiat placerat urna, a pretium ipsum vestibulum in. Sed sodales est a felis interdum gravida nec sed nulla. Integer ex mi, ultrices nec odio et, laoreet convallis neque.

Aenean lectus velit, pharetra in massa eget, eleifend porttitor nulla. Cras purus libero, dignissim ac malesuada in, lobortis sit amet mi. Mauris semper risus a sem feugiat accumsan. Nunc fringilla dignissim leo a feugiat. Aliquam posuere quam non dictum molestie. Donec eget ullamcorper nulla, a facilisis erat. Mauris rhoncus lacus magna, nec porta massa sodales at. Ut finibus mi dui, et laoreet nulla ultricies a. Ut fermentum venenatis accumsan. Curabitur sodales nisl vitae dignissim viverra. Phasellus dignissim augue nisi, a tincidunt dui laoreet et. Sed et sollicitudin lorem, at lobortis erat. Suspendisse potenti. Quisque vel dolor efficitur augue lacinia laoreet vitae vitae lectus. Ut et mollis ante.`

console.log(paragraph.length)

console.log(paragraph.includes("et"))