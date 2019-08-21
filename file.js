/*

Iteration 1: Names and Input
1.1 Create a variable hacker1 with the driver's name.

1.2 Print "The driver's name is XXXX".

1.3 Create a variable hacker2 with the navigator's name.

1.4 Print "The navigator's name is YYYY".
*/

let hacker1 = "Somename"

console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Secondname"

console.log(`The navigator's name is ${hacker2}.`)


/*
Iteration 2: Conditionals
2.1. Depending on which name is longer, print: - The Driver has the longest name, it has XX characters or - 
Yo, navigator got the longest name, it has XX characters or - Wow, you both got equally long names, XX characters!
*/

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name it has ${hacker2.length} characters`)
}
else console.log(`Their names are the same length!`)



//////////////
//AS FUNCTION

function checkLength(name1, name2) {
  if (name1.length > name2.length) console.log(`${name1} is the longest name it has ${name1.length} characters`)
  else if (name1.length < name2.length) console.log(`${name2} is the longest name it has ${name2.length} characters`)
  else console.log('Their names are the same length')
}


// checkLength(hacker1, hacker2)
/*
Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, 

print: - The driver's name goes first. 
- Yo, the navigator goes first definitely. 
- What?! You both got the same name?

*/
let driver = ""
let navigator = ""

for(let i = 0; i < hacker1.length; i++) {
  if (i !== hacker1.length-1) driver += hacker1[i].toUpperCase() + " "
  else driver += hacker1[i].toUpperCase();
}

for (let i = hacker2.length-1; i >= 0; i--) {
  navigator += hacker2[i]
}
console.log( `The new driver name is ${driver}. The new navigator name is ${navigator}`)

let array = [navigator.toLowerCase(), driver.toLowerCase()]
array.sort();

console.log(array)
if (array[0] == array[1]) console.log('What?! You both got the same name?')
else if (array[0] === driver.toLowerCase()) console.log(`The driver's name goes first.`)
else if (array[0] === navigator.toLowerCase()) console.log('Yo the navigator goes first definitely')


/////////////
//AS FUNCTION 

function upperCaseSplit(name) {
  let newName = name.toUpperCase().split("").join(" ")
  console.log(`The old name was ${name} it is now ${newName}`)
}

upperCaseSplit(hacker1)

function reverseIt(name) {
  let newName = name.split("").reverse().join("");
  console.log(`The old name was ${name} it is now ${newName}`)
}

reverseIt(hacker2);


function whatComesFirst(name1, name2) {
  let array = [name1.toLowerCase(), name2.toLowerCase()]
  array.sort();

  if (array[0] == array[1]) console.log('What?! You both got the same name?')
  else if (array[0] === name1.toLowerCase()) console.log(`The driver's name goes first.`)
  else if (array[0] === name2.toLowerCase()) console.log('Yo the navigator goes first definitely')
}

whatComesFirst(name1, name2);

/*
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/


let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus pulvinar enim blandit sollicitudin. Sed ornare et ligula quis lacinia. Vivamus a egestas libero. Donec volutpat sagittis auctor. Suspendisse molestie ultrices lacinia. Duis ex ante, dictum eu commodo eget, pretium in augue. Curabitur commodo vehicula metus, sit amet maximus arcu blandit non. Maecenas consequat dignissim metus, in luctus nisl. Integer rutrum sem at turpis euismod, eu dapibus urna volutpat. Integer semper, est nec iaculis feugiat, ipsum ex gravida lectus, in cursus metus felis sit amet magna. Sed ut vehicula diam, eget elementum diam. Mauris arcu mi, vehicula id finibus eget, varius eget ligula. Vestibulum vel lacus id neque vestibulum ornare eget nec ante. Mauris mauris lacus, malesuada et venenatis fringilla, ultricies ut orci. Fusce tempor aliquam aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque tempus auctor ante, ac interdum ex sodales id. Nunc dignissim ac eros sed maximus. Fusce in felis efficitur, molestie libero non, pellentesque magna. Donec et feugiat turpis. Quisque imperdiet ipsum ut massa posuere, eu sodales felis aliquet. Nunc id tincidunt quam. Phasellus et ligula molestie, rutrum magna sit amet, iaculis enim. Nam ornare ipsum dui, a ullamcorper metus iaculis non. Nullam at sapien accumsan, rutrum justo vitae, blandit metus. Nulla facilisi. Aliquam rhoncus tempor nibh, ut condimentum purus tempor sit amet. Suspendisse gravida arcu vel molestie viverra. Quisque non dui lobortis, fringilla ex dictum, suscipit tortor. Phasellus dignissim feugiat quam sed faucibus."

function loremCounter(text) {
  let etCount = 0
  let arrText = text.split(" ")
  for (let i = 0; i < arrText.length; i++) {
    if (arrText[i] === "et") etCount++
  }
  console.log(`Number of et's is ${etCount} and the word count is ${arrText.length}`)
}
 
loremCounter(loremText);