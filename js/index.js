// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Pepe"
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The drive's name is ${hacker1}`)
// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Antonio"
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const driverLenght = hacker1.length
const navigatorLenght = hacker2.length

if (driverLenght > navigatorLenght) {
    console.log(`The driver has the longest name, it has ${driverLenght} characters`)
} else if (navigatorLenght > driverLenght) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLenght} characters`)
} else if (navigatorLenght === driverLenght) {
    console.log(`Wow, you both have equally long names, ${driverLenght} characters!`)
}


// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
console.log(hacker1.split("").join(" ").toUpperCase())

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
console.log(hacker1.split("").reverse().join(""))

// 3.3 Depending on the lexicographic order of the strings, print:


const hackerLengthComparison = hacker1.localeCompare(hacker2)

if (hackerLengthComparison < 0) {
    console.log(`The driver's name goes first`)
} else if (hackerLengthComparison > 0) {
    console.log(`Yo, the navigator goes first definitely`)
} else if (hackerLengthComparison === 0) {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum imperdiet felis, ut hendrerit turpis ullamcorper et. Quisque vel volutpat dolor. Pellentesque feugiat tellus sed nunc bibendum, euismod consectetur diam porta. Donec aliquam risus sed eros pretium, facilisis iaculis elit scelerisque. Aenean et porta odio, sit amet interdum ex. Suspendisse interdum lectus in sodales suscipit. Vivamus non leo rutrum, facilisis nulla sed, posuere urna. Nulla dapibus felis magna, ac pulvinar sem vehicula et. Proin ut condimentum orci.

Nullam a consectetur nisi. Vestibulum nunc mi, gravida et vestibulum vitae, lacinia ut velit. Aliquam pharetra suscipit lacus quis ullamcorper. Phasellus sed felis gravida, feugiat metus sed, hendrerit ex. Duis faucibus faucibus diam, et ullamcorper purus faucibus a. Aliquam mauris sapien, luctus in diam sit amet, facilisis luctus sapien. Ut ut molestie sem, in sagittis urna. Donec quis interdum neque.

Nam varius est lacus, at imperdiet nunc dictum vel. Integer ut augue consequat, feugiat sem vitae, congue ipsum. Fusce rutrum, arcu eget suscipit volutpat, nisi dolor molestie sapien, ac ornare ante risus a velit. Suspendisse bibendum lorem quis orci vehicula, non tempus augue semper. Donec justo sapien, aliquet a arcu nec, efficitur lacinia eros. Donec semper tortor at arcu elementum ultricies. Morbi porttitor, est eget pharetra imperdiet, sem nisl faucibus eros, eget dictum tellus urna nec tellus. Phasellus id consectetur tellus, vitae bibendum urna. Suspendisse potenti. Quisque imperdiet sed elit sit amet viverra. Duis a dui elit. Duis nec varius justo. Suspendisse consequat magna id ex hendrerit tempus.`

const wordsLenght = text.split(" ").length
console.log(wordsLenght)

const etCount = text.split("et").length - 1
console.log(etCount)

// Bonus 2

const phraseToCheck = "redivider"

let forwardCheck = ""
let backwardsCheck = ""


for (let i = 0; i < phraseToCheck.length; i++) {
    forwardCheck += phraseToCheck[i]
}

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    backwardsCheck += phraseToCheck[i]
}

let result

if (forwardCheck === backwardsCheck) {
    result = "It's a palindrome!"
} else {
    result = "It's not palindrome..."
}

console.log(result)