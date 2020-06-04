// Iteration 1: Names and Input

let hacker1 = "william"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "pepe"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`the driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names ${hacker1.length}`)

} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}

// Iteration 3: Loops


let intermedia = hacker1.toUpperCase()
console.log(intermedia)
for (i = 0; i < intermedia.length; i++) {
    let finalName = []
    finalName.push(intermedia[i])
    console.log(finalName)
}

let sinter = hacker2.split("")
console.log(sinter)
let reverseName = sinter.reverse()
console.log(reverseName)
let revNameJoin = reverseName.join("")
console.log(revNameJoin)

// el último no sabemos//