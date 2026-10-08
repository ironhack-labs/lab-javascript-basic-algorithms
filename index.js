// Iteration 1: Names and Input
const hacker1 = 'Eloy'
const hacker2 = 'Jorge'

console.log(`The driver's name is ${hacker1}`)
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
let upperCasedName = ''
for (let i = 0; i < hacker1.length; i++) {
    upperCasedName += `${hacker1[i].toUpperCase()} `
}
console.log(upperCasedName.trim())

let reversedName = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i]
}
console.log(reversedName)

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first, definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non laoreet elit, eget aliquam nisl. Vivamus viverra dictum ante, et iaculis velit bibendum sit amet. Etiam dignissim ac lectus quis faucibus. Nulla auctor, neque non luctus volutpat, diam quam mattis neque, sed vulputate sapien eros id turpis. Nam iaculis, mauris at facilisis ultricies, tellus risus suscipit nunc, vitae congue est erat ac neque. Duis lobortis iaculis libero a posuere. Suspendisse potenti. Sed posuere purus ut sem ultricies, id congue quam sagittis. Phasellus orci purus, fermentum ut volutpat ut, scelerisque quis orci. Nunc hendrerit ultrices quam dapibus sagittis. Nulla velit tellus, lobortis at maximus commodo, aliquam in velit. Phasellus eu ligula eu ante commodo congue suscipit scelerisque urna. Praesent consequat, diam eu euismod dictum, lorem lacus gravida leo, a condimentum urna sapien nec sapien. Ut placerat at erat nec pellentesque. Suspendisse mollis efficitur bibendum. Pellentesque consectetur dolor eget ligula feugiat, vitae lacinia libero tincidunt. Nunc ut nunc efficitur risus ultricies porta. Vivamus at tempus neque, et semper lorem. Nam pulvinar euismod felis suscipit suscipit. Praesent vulputate tristique malesuada. Curabitur eu tincidunt dolor. Curabitur vestibulum purus in nibh dictum, ut consectetur lectus hendrerit. Fusce eget mauris eu nulla semper pulvinar. Phasellus congue quam odio. Aenean accumsan accumsan malesuada. Donec metus neque, tincidunt in rutrum vitae, imperdiet et tellus. Vestibulum auctor quam in diam sollicitudin finibus. Aliquam sed aliquet justo. Morbi vitae ultrices urna, at aliquet orci. Proin tempus tempor felis, vitae venenatis est dignissim sed. Phasellus pulvinar ipsum sapien, non congue eros posuere non."

// I googled this one and as far as I'm understanding, split here uses the spaces to store the rest of the string in an array, and since it's an array we can count it by words instead of characters.
function wordCount(str) {
    return str.split(" ").length
}

console.log(wordCount(longText))

function etCount(str) {
    return str.split(" ").filter(word => word.toLowerCase() === "et").length
}

console.log(etCount(longText))

// Bonus 2
function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "") // I had to google this out because I manage to deal with white spaces but not with punctuation and special characters.
    let reversedStr = ''
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i]
    }

    if (cleanedStr === reversedStr) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome(`A man, a plan, a canal, Panama!`)) // true
console.log(isPalindrome(`stack cats`)) // true 
console.log(isPalindrome(`buenas noches`)) // false