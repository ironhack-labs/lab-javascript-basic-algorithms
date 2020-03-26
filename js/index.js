// Iteration 1: Names and Input
let hacker1 = "John"
console.log(`The driver´s name is ${hacker1}`)

let hacker2 = "Petter"
console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver, ${hacker1}, has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator, ${hacker2}, has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

const separado = hacker1.split("")
console.log(separado)
let finalWord = ""

separado.forEach(function(elm) {
    let upper = elm.toUpperCase()
    finalWord += upper + " "
})

console.log(finalWord)


const naviSeparated = hacker2.split("")

let reversedName = ""

for (let j = naviSeparated.length - 1; j >= 0; j--) {

    reversedName += naviSeparated[j]
}

console.log(reversedName)

const firstLetterHacker1 = hacker1.charAt(0)
const firstLetterHacker2 = hacker2.charAt(0)

if (firstLetterHacker1 < firstLetterHacker2) {
    console.log("Yo, the navigator goes first definitely.")

} else if (firstLetterHacker1 > firstLetterHacker2) {
    console.log("The driver's name goes first.")

} else {
    console.log("What?! You both have the same name?")
}


// BONUS 
const loremText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, rerum! Cumque error iure molestias et vel corporis hic explicabo, vero unde voluptatibus perferendis quas, distinctio voluptatem, eum perspiciatis labore ipsam!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, ut blanditiis tempore, officia quas autem delectus esse ratione ab iure laborum molestiae labore aspernatur rerum, assumenda quod corporis omnis obcaecati!"

const separatedWords = loremText.split(" ")

console.log(`El lorem ipsum contiene ${separatedWords.length} palabras!`)

console.log(`"et" se repite ${separatedWords.indexOf("et")} veces!`)




//Palindrome 

const raceCar = "race car"
const removeSpace = raceCar.substring(4, 0) + raceCar.substring(5)


const carSeparated = removeSpace.split("")

let carReversed = ""

for (let i = carSeparated.length - 1; i >= 0; i--) {
    carReversed += carSeparated[i]

}
console.log(carReversed)

if (removeSpace === carReversed) {
    console.log("Ya hoo is a palindrome")
}