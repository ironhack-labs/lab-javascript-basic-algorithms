// Iteration 1: Names and Input
const hacker1 = 'Paquichu'

const hacker2 = 'Waze'

console.log(`The drivers name is ${hacker1}`)

console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let driversName = ""
for (let i = 0; i < hacker1.length; i++) {
    driversName += hacker1[i] + " "
}
console.log(driversName.toUpperCase())

let reverseDriverName = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseDriverName += hacker1[i]
}

console.log(reverseDriverName)

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The drivers name goes first")
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely")
} else {
    console.log("What? You both have the same name")
}

//BONUS 1

let longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
longText += "Totam cumque, explicabo consequuntur nobis vero ut sunt.Reprehenderit dolorum etdeserunt non quo."
longText += "Blanditiis, commodi.Dolorem nisi et deleniti nostrum tenetur natus quia ? "
longText += "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad magni laudantium iure eveniet nisi fugiat eos"
longText += "doloremque possimus corrupti adipisci inventore iusto porro commodi ullam, consequuntur et odio culpa molestias"

let numberOfWords = longText.split(' ').length

console.log(numberOfWords)



let numberOfEt = longText.split(' et ').length

console.log(numberOfEt)