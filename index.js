// Iteration 1: Names and Input

let hacker1 = "muzna"
console.log("The driver's name is " + hacker1)

let hacker2 = "kristof"
console.log("The navigator's name is " + hacker2)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }


// Iteration 3: Loops

// Part 1:

let hacker1Spaced = ""

for(let i=0; i < hacker1.length; i++){
  hacker1Spaced += hacker1[i].toUpperCase() + " "
}

console.log(hacker1Spaced)

// Part 2:

let hacker2Reversed = ""


for(let j=hacker2.length-1; j >= 0; j--){
  hacker2Reversed += hacker2[j]
}

console.log(hacker2Reversed)

// Part 3:

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
  } else {
    console.log("What?! You both have the same name?")
}

// Bonus Iteration 1: 

// Part 1:

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nisl massa. Aenean ut lacus eget enim maximus sagittis quis id purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan orci vitae urna venenatis cursus. Fusce fringilla massa sit amet ligula blandit sagittis. Quisque nec dignissim nulla. Morbi non odio in libero euismod finibus.

Vivamus lectus nisi, tristique nec augue elementum, vestibulum blandit ex. Integer vel augue metus. Nunc ac arcu purus. Phasellus at suscipit arcu. Etiam condimentum purus eget orci ultrices, in eleifend nunc posuere. Aenean sollicitudin dui sed lectus dapibus, nec auctor ipsum tristique. Quisque aliquam convallis neque et tincidunt. Phasellus lobortis justo luctus justo dignissim, vitae eleifend turpis maximus. Nullam leo augue, pharetra id ex eu, luctus tempus nunc. Aenean blandit erat quam, ac sollicitudin enim malesuada id. Sed congue facilisis magna, eu varius ex fermentum vitae. Nam euismod magna feugiat ipsum condimentum, ornare rhoncus ipsum tempor. Duis a nisl vel quam scelerisque rutrum. Aliquam dictum risus sed convallis vehicula. Curabitur tellus velit, venenatis ut vehicula vel, laoreet placerat nulla. Morbi lacus metus, convallis et aliquam eget, malesuada ac mi.

Donec tincidunt condimentum sapien eu lobortis. Maecenas fermentum nisi ante, a mattis risus bibendum pulvinar. Etiam nibh eros, mollis eget metus dapibus, mattis consequat felis. Fusce volutpat vestibulum turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel libero vehicula, blandit nisi id, consequat erat. Proin nec ipsum dapibus, commodo nisl quis, ullamcorper nisi.`

// Part 2:

//Solution 1:
let words = 1
let wordCount = Array.from(longText)

for (let i = 0; i < wordCount.length; i++) {
  if (wordCount[i] == " ") {
    words ++
  }
}

console.log (words)

// Solution 2:
console.log("The total amount of words in this text are " + getCount(longText))

function getCount(str) {
 return str.split(' ').filter(function(num) {
  return num != ''
 }).length;
}

// Part 3:

let count = 0

for (let i = 0; i < longText.length; i++) {
  const et = " " + longText[i] + longText[i+"1"] + " "

  if (et === " et ") {
    count++
  }
}

console.log(count)


// Bonus Iteration 2: 

let text= "steponnopets"
let start = text
let end = ""

for(let j=text.length-1; j>=0; j--) {
   end += text[j]; 
}

if(start===end) {
  console.log("This is a palindrome!")
} else {
  console.log("This is not a palindrome!")
}