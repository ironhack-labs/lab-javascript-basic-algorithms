// Iteration 1: Names and Input
const hacker1 = "Marianna"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Amparo"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const hacker1Length = hacker1.length
const hacker2Length = hacker2.length

//console.log(hacker1Length)
//console.log(hacker2Length)

if (hacker1.length>hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length>hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let spacedName = "";
for (let i = 0; i<hacker1.length; i ++) {
  const capitalLetter = hacker1[i].toUpperCase();
  spacedName += capitalLetter + " "
}
  console.log(spacedName);

/****/

let reversedName = ""
for (let i = hacker2.length -1; i >=0 ; i --) {
  reversedName += hacker2[i]
}
console.log(reversedName)

/****/

if (hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.")
  } else if(hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.")
  } else {
    console.log("What?! You both have the same name?")
  }

  //Bonus Time! 
  // Bonus 1:

  const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis orci at consequat fringilla. Mauris quis rhoncus arcu, vel elementum nulla. Mauris dapibus nulla vel quam blandit, non cursus metus lobortis. Maecenas egestas tincidunt nisl id varius. Mauris consectetur arcu in risus vehicula convallis. Maecenas non suscipit turpis, sed luctus velit. Nulla congue augue in augue feugiat, vitae pharetra erat rhoncus. Curabitur vitae erat aliquam velit ultrices porta. Vivamus id dui velit. Vestibulum nec condimentum nulla. In turpis diam, fringilla a erat sit amet, tristique imperdiet lectus. Sed varius facilisis sapien in luctus. Donec et est purus. Donec dignissim justo lacus, vitae molestie nulla vestibulum nec. Etiam laoreet mauris eu tellus elementum, at facilisis turpis aliquet. Fusce sollicitudin quis diam eu volutpat. Sed vulputate mauris id fringilla dapibus. Morbi id diam aliquam, fringilla felis eget, auctor lacus. Morbi non condimentum velit, vel aliquet massa. Aliquam turpis orci, cursus eget congue eu, maximus ut mi. Donec vitae urna vel est lobortis accumsan at faucibus nulla. Donec ut lectus semper, rutrum est nec, elementum lorem. Aenean quis maximus tellus, sed semper est. Pellentesque iaculis ligula dui, id molestie lacus dictum a. Donec sed imperdiet nisl. Maecenas bibendum, risus eu dictum mollis, velit arcu dapibus turpis, eu venenatis ex erat vel nibh. Etiam eu condimentum arcu. Quisque pharetra enim a tristique congue. Vestibulum lacus ex, feugiat sit amet euismod non, placerat ut sem. Curabitur iaculis nulla lorem, at tempus sem mollis at. In tempus turpis dolor, rhoncus tincidunt lacus viverra ut. Vestibulum sed turpis sed elit lobortis placerat. Duis molestie, ante quis consectetur efficitur, massa dolor pharetra magna, sit amet accumsan sem augue et sapien. Proin eget lacinia ex, vitae aliquet nisi. Praesent nec iaculis tortor. Nulla tincidunt dolor purus, in sollicitudin dui tristique at. Fusce maximus interdum semper. Sed eu sollicitudin massa. Donec volutpat, lectus sed euismod sagittis, nulla dolor hendrerit quam, quis facilisis leo lectus eget ligula."

let numberOfWords = ""

for (let i=0; i<longText.length; i++) {
  if (longText[i] === " ") {
    numberOfWords ++
  }
}
console.log(numberOfWords+1)

/****/

let numberOfEt = ""

for (let i=0; i<longText.length; i++) {
  if (longText[i]+longText[i+1] === "et") {
    numberOfEt ++
  }
}
console.log(numberOfEt)

/****/

//Bonus 2


//let phraseToCheck = "a, B y c"
let phraseToCheck = "A man, a plan, a canal, Panama!"
let phraseToCheckNew = ""
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] === " "){
    continue
  }
  else if (phraseToCheck[i] === ","){
    continue
  }
   else if (phraseToCheck[i] === "!"){
    continue
  }
  else {
     phraseToCheckNew += phraseToCheck[i].toLowerCase();
  }
}
console.log(phraseToCheckNew)


let phraseToCheckNewReversed = ""
for (let i = phraseToCheckNew.length-1; i>=0; i--) {
  phraseToCheckNewReversed += phraseToCheckNew[i]
}
console.log(phraseToCheckNewReversed)

if (phraseToCheckNew === phraseToCheckNewReversed) {
  console.log("It's a palindrome!")
} else  {
console.log("Not a palindrome...")
}


