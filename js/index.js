// https://github.com/ironhack-labs/lab-javascript-basic-algorithms
// Iteration 1: Names and Input
const hacker1 = "Michael"
console.log("Driver name is " + hacker1)

const hacker2 = "Brigi"
console.log("The navigators name is " + hacker2)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker1.length < hacker2.length) {
   console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`);
  }

// Iteration 3: Loops
let driversNameUppercase = ""
for (let letter in hacker1) {
  driversNameUppercase += hacker1[letter].toUpperCase()
  if (Number(letter) !== hacker1.length-1) { 
    driversNameUppercase += " "
  }
}
console.log(driversNameUppercase)

//3.2
let navigatorReverse = ""
for (let i = hacker2.length-1; i>=0; i--) {
  navigatorReverse += hacker2[i]
}
console.log(navigatorReverse)

//3.3

// The loop way
/*
let firstOrderName = "Same Name"
for (let i = 0; i <= theLongestName.length-1; i++) {
  if (hacker1[i] < hacker2[i]) {
    firstOrderName = hacker1
    break
  }
  else if (hacker1[i] > hacker2[i]) {
    firstOrderName = hacker2
    break
  }
}
console.log(firstOrderName)
*/

// The build in way
const compareResult = hacker1.localeCompare(hacker2)
switch (compareResult) {
  case -1:
    console.log("The drivers name goes first.")
    break
  case 1:
    console.log("Yo, the navigator goes first definitely.")
    break
  case 0:
    console.log("What?! You both have the same name?")
    break
}

// Bonus 1
let threeParagraphs = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet justo pellentesque, porta augue a, scelerisque ligula. Integer ac ligula quis ipsum blandit placerat in quis dui. Integer lorem tellus, facilisis non mi non, dapibus viverra nunc. Maecenas ut pretium tortor. Vivamus id turpis felis. Curabitur rhoncus mauris sit amet nibh viverra elementum. Maecenas sit amet blandit augue. Vestibulum nec metus vestibulum, cursus lacus at, scelerisque purus. Pellentesque ut enim turpis. Praesent varius iaculis semper. Fusce vehicula tristique eros et ultrices. Praesent non pellentesque metus, quis semper arcu. Vivamus lobortis vehicula felis vitae viverra.

Donec molestie malesuada turpis, nec commodo risus iaculis vitae. Etiam rhoncus efficitur varius. Proin ut lectus vel mi faucibus ornare et id purus. Sed a nisl sed dui sodales pharetra. Cras quam libero, sollicitudin ac libero at, elementum suscipit odio. Aenean eu risus a erat vehicula euismod. Sed non ligula finibus, malesuada quam maximus, volutpat nisl. Vivamus ornare varius eros ut pharetra.

Sed viverra tempus augue, eget mattis urna imperdiet id. Vivamus nec commodo metus. Praesent rutrum venenatis risus eu consectetur. Sed justo dolor, interdum et porta in, dapibus finibus lorem. Nam ac suscipit mauris, sodales tempor orci. Nunc id arcu consequat, rutrum felis in, dapibus tellus. Curabitur ut volutpat lectus. Curabitur congue rutrum justo, eget viverra libero. Mauris vitae bibendum massa. Morbi malesuada lectus ut aliquet auctor. Quisque aliquet odio odio, vitae efficitur tortor fringilla id. Ut ultrices pellentesque scelerisque. Nullam vel massa vel orci sollicitudin condimentum. Praesent sed vehicula odio, ut faucibus sapien.`

// loop with no brain
/*
let spaceCounter = 0
for (let letter of threeParagraphs) {
  if (letter === " ")
    spaceCounter++
}
console.log(`Estimated ${spaceCounter} words.`)
*/
// with regex
console.log(`Actually ${threeParagraphs.match(/\S+/g).length} words.`)

let etCounter = threeParagraphs.match(/(et)/g).length
console.log(etCounter)