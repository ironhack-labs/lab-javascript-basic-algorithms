// Iteration 1: Names and Input

const hacker1 = "Lluis"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Julio"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops

let hacker1Mod = ""

for (let i = 0; i < hacker1.length; i++) {
    let hacker1_upper = hacker1[i].toUpperCase()

    if (i === 0) {
      hacker1Mod += `${hacker1_upper}`
    } else {
      hacker1Mod += ` ${hacker1_upper}`      
    }
}

console.log(hacker1Mod)

let reverseHacker = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseHacker += hacker1[i]
}

console.log(reverseHacker)

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// BONUS 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum massa sed porta lobortis. Curabitur tellus nisl, gravida quis tellus cursus, porta porttitor libero. Etiam pulvinar fringilla justo, non commodo justo volutpat a. Quisque ornare purus nec erat convallis, vitae dapibus dolor gravida. Aliquam facilisis ex quis imperdiet iaculis. Suspendisse at ex aliquet, feugiat lacus nec, malesuada justo. Etiam et augue vel lacus ullamcorper ullamcorper sit amet sed diam. Cras iaculis placerat elit at auctor. Curabitur at dolor lorem. Vestibulum maximus urna eros, ac ultrices neque vestibulum ut.

Duis lacinia libero quam, id consequat ex scelerisque eu. Ut vel maximus nisl. Quisque faucibus vel justo vitae varius. Ut facilisis hendrerit quam, ac tempus massa ultricies non. Sed ac aliquam diam. Fusce suscipit ultrices tortor id hendrerit. Integer porttitor, velit non mollis condimentum, risus libero consectetur metus, pretium dictum dolor orci id nunc. Etiam pulvinar vulputate fringilla. In nec ultrices lectus, eget consequat eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut quis magna fringilla, faucibus lacus at, auctor purus. Vestibulum faucibus a augue sit amet malesuada.

Curabitur condimentum convallis sapien, in pellentesque ante commodo et. Proin laoreet tincidunt nunc, vitae lacinia magna efficitur ut. Morbi sollicitudin egestas justo, nec tempor massa accumsan at. Curabitur eleifend augue a ex ultrices, a fringilla ex hendrerit. Pellentesque vitae turpis felis. Suspendisse posuere elementum posuere. Sed et luctus libero. Fusce suscipit urna et mauris accumsan vulputate. Donec sapien turpis, ultricies a tempor sit amet, laoreet ut tortor. Pellentesque condimentum et magna id laoreet. Curabitur fermentum neque enim, porta auctor odio pharetra non. Nunc rutrum erat quis leo venenatis varius.`

let words = 0
let et = 0
for (let i = 0; i < longText.length; i++) {
      
    if (longText[i] === " ") {
        words++
    }

    let capitalLongText = longText.toUpperCase()

    if (capitalLongText[i] === "E" && capitalLongText[i + 1] === "T" && capitalLongText[i - 1] === " ") {
      if (capitalLongText[i + 2] === " " || capitalLongText[i + 2] === "," || capitalLongText[i + 2] === ".") {
        et++
      }
    }
}

console.log(`The number of words is ${words + 1}`)
console.log(`The word "et" appears ${et} times`)

// BONUS 2

const phraseToCheck = "A man, a plan, a canal, Panama!"

let phrase = ""
let reversePhrase = ""

for (let i = 0; i < phraseToCheck.length; i++) {
  
    const char = phraseToCheck[i].toUpperCase()
    
    if (char === " " || char === "," || char === "." || char === "?" || char === "¿" || char === "!" || char === "¡") {
      continue
    } else {
      phrase += char
    }
}

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  
    const char = phraseToCheck[i].toUpperCase()
  
    if (char === " " || char === "," || char === "." || char === "?" || char === "¿" || char === "!" || char === "¡") {
      continue
    } else {
      reversePhrase += char
    }
}

if (reversePhrase === phrase) {
  console.log("Yes, the phrase is a palindrome")
} else {
  console.log("No, the phrase is not a palindrome")
}


