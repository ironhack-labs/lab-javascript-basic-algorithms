// Iteration 1: Names and Input
let hacker1 = "Adam"
console.log(`The drivers name is: ${hacker1}`)
let hacker2 = "Adam"
console.log(`The navigator's name is: ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}

// Iteration 3: Loops
// 3.1
// uppercaseName = hacker1.toUpperCase()
// splitName = uppercaseName.split("")
// joinNameWithSpace = splitName.join(' ')
// console.log(joinNameWithSpace)

let name = ""
for (let i = 0; i < hacker1.length; i++) {
    name += hacker1[i].toUpperCase() + " "
}
console.log(name)


// 3.2
// console.log(hacker1.split("").reverse().join(''))
let reverseName = ""
for (let i = hacker1.length - 1; i > -1; i--) {
    reverseName += hacker1[i]
}
console.log(reverseName)

// 3.3




if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
} else if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
}
// if (hacker1 === hacker2) {
//     console.log("What?! You both have the same name?")
// } else {
//     let longerName = hacker1.length > hacker2.length ? hacker1 : hacker2;
//     console.log(longerName)
//     for (let i = 0; i < hacker1.length; i++) {
//         let nameOneChar = hacker1[i]
//         let nameTwoChar = hacker2[i]
//         // console.log(hacker1[i], hacker2[i])
//         if (nameOneChar > nameTwoChar) {
//             console.log("Yo, the navigator goes first definitely.")
//             break
//         } else if (nameOneChar < nameTwoChar) {
//             console.log("The driver's name goes first.")
//             break
//         }
//     }
// }

// Bonus 1

let randomText = "Sed tristique justo sit amet arcu porttitor, eu eleifend risus viverra. Nullam at sagittis enim. Sed maximus dolor sit amet tristique ultrices. Quisque egestas ipsum non lectus euismod, non mattis mi ultricies. Etiam facilisis, mauris rhoncus porta dignissim, odio tellus sodales odio, id porttitor lectus nulla nec enim. Proin quis quam eu urna fringilla maximus et quis augue. Vivamus at viverra turpis. Donec auctor purus ligula. Nulla molestie, elit vitae tincidunt condimentum, velit nisi eleifend dolor, sit amet fringilla quam mauris et lacus. Praesent vitae semper quam. Sed accumsan nisl dapibus felis dapibus, ut vestibulum ante faucibus. Proin imperdiet tortor a lorem tempor varius. Curabitur vel tortor lobortis, fringilla magna in, gravida odio. Nullam ut diam quam. Maecenas viverra leo eu elit porttitor, at tempus eros dapibus. Cras porttitor egestas magna, vel rutrum lorem facilisis eget. Suspendisse lacinia justo nec molestie malesuada."
console.log(randomText.split(" ").length)
console.log(randomText.split("et").length)

// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panamaa!"
let updatedPhrase = phraseToCheck.toLowerCase().replaceAll(",", "").replaceAll(" ", "").replaceAll("!", "")
console.log(updatedPhrase)
let len = phraseToCheck.length
let msg = ""
for (let i = 0; i < len / 2; i++) {
    if (phraseToCheck[i] === phraseToCheck[len - 1 - i]) {
        msg = "palindrome"
    } else {
        msg = "NO PALINDORME!"
    }
}
console.log(msg)