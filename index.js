// Iteration 1: Names and Input
let hacker1 = 'juanda'

console.log(`the driver's name is ${hacker1}`)

let hacker2 = 'raquel'

console.log(`the navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let longestName
if (hacker1.length > hacker2.length) {
  console.log(`the driver has the longest name it has ${hacker1.length} characters`)
  longestName = hacker1.length
}
else if (hacker1.length === hacker2.length) {
  console.log(`Wow you got equally long names, ${hacker1.length} characters!!`)
  longestName = hacker1.length
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  longestName < hacker1.length
}
else {
  console.log("OHHH NOOOO IT'S A BUG!! :(")
}

// Iteration 3: Loops
let hacker1WithFormat = ''

for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    hacker1WithFormat += hacker1[i]
  }
  else {
    hacker1WithFormat += hacker1[i] + ' '
  }
}

console.log(hacker1WithFormat.toUpperCase())

let hacker2Reordenated = ''

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reordenated += hacker2[i]
}

console.log(hacker2Reordenated)

for (let i = 0; i < longestName; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log("The drivers name's goes first")
    }
    else if (hacker1[i] === hacker2[i]) {
        console.log("What? You both have the same name")
    }
    else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first, definitely.")
    }
    else {
        console.log("OHHH NOOOO IT'S A BUG!! :(")
    }
}

// Bonus 1:
let lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat deserunt nisi, sed ex ratione eveniet quidem numquam reiciendis perferendis! Ex soluta tempore repellendus quod id magni sed debitis illum voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur odio harum, voluptatem sed vitae ut assumenda repellendus sequi! Ex expedita cum nostrum, culpa facilis architecto recusandae repudiandae laboriosam blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus dolore quas voluptas quaerat cum nisi saepe expedita, quis illo cumque modi obcaecati ad eius. Quia, ipsam aliquam. Ipsa, facilis?"

let words = lorem.toLowerCase().split(' ')

console.log(words.length)

let etCounter = 0

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'et') {
    etCounter++
  }
}

console.log(etCounter)

// Bonus 2:
let phraseToCheck = "Hola Lorena o Ruben, que tal estas? Espero que hasta ahora todo el LAB este bien XD"
let reversePhrase = ""

phraseToCheck.toLowerCase()

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  reversePhrase += phraseToCheck[i]
}

if (phraseToCheck === reversePhrase) {
  console.log("It's a palindrome!!")
}

else {
  console.log("Just a normal phrase")
}