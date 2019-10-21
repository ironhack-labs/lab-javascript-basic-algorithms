// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

const hacker1 = "Nick"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Masaki"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print: - The Driver has the longest name, it has XX characters or - Yo, navigator got the longest name, it has XX characters or - Wow, you both got equally long names, XX characters!

if (hacker1.length > hacker2.length) {
    console.log(`The driver got the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
console.log(hacker1.toUpperCase().split('').join(' '))

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
console.log(hacker2.split('').reverse().join(''))

// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// reverseString(hacker2);

// console.log(reverseString(hacker2.slice(1))+hacker2.charAt(0))

// 3.3 Depending on the lexicographic order of the strings, print: - The driver's name goes first. - Yo, the navigator goes first definitely. - What?! You both got the same name?
function lexicographicOrder(name1, name2) {
    let compareName = name1.localeCompare(name2)

    if (compareName < 0) {
        console.log("The driver's name goes first.")
    } else if (compareName > 0) {
        console.log("Yo, the navigator goes first definitely.")
    } else {
        console.log("What?! You both got the same name?")
    }
}
lexicographicOrder(hacker1, hacker2)

// Bonus Time!
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et scelerisque nunc. Cras eu laoreet sapien, vel sollicitudin massa. In sit amet vulputate tellus, ut dapibus sem. Duis eget purus tellus. Cras sem ipsum, maximus eu rhoncus quis, tempor nec sem. Cras tellus mauris, sagittis et lectus eget, tempus consectetur mi. Sed ut neque id nibh tempus rutrum. Aliquam at vehicula purus, at hendrerit tellus. Sed sed velit ut dolor hendrerit laoreet. Praesent sagittis felis et congue consectetur. Quisque congue dui eget enim fermentum placerat. Sed et mollis sem. Sed cursus sodales turpis, in tincidunt ante elementum vitae. In ut mauris vel leo sollicitudin pulvinar. Sed vel turpis aliquet, iaculis velit at, facilisis erat. In hac habitasse platea dictumst. In scelerisque leo dui, tincidunt pretium tortor volutpat sit amet. Nunc lobortis volutpat massa, ut varius nunc sollicitudin a. Vivamus semper metus eget est hendrerit, at hendrerit dui facilisis. Donec tempor mauris eu sem mollis, vel ornare velit ultrices. Etiam volutpat, ligula quis consequat vulputate, dui lacus euismod augue, non facilisis tellus dolor ut est. In dignissim massa risus, vel ullamcorper diam porta sed. Curabitur interdum vestibulum blandit. Sed elit arcu, vulputate in malesuada sit amet, dictum vel sem. Aenean bibendum dui in mi finibus, porta ornare odio lacinia. Nam finibus faucibus quam eget dictum. Duis vitae fermentum felis. Sed id gravida nulla, ut molestie lacus. Mauris rutrum leo lacus, non tempor velit blandit a. Morbi fermentum libero ex, ut suscipit sem tristique ut. Morbi sodales sed erat in sagittis. Curabitur lacinia sapien at lacus imperdiet condimentum at ac sapien. Vestibulum rutrum diam eu ultrices rutrum."

// Make your program count the number of words in the string.
let countWords = (str) => {
    console.log(str.split(' ').length)
}
countWords(str)

// Make your program count the number of times the Latin word et appears.
let countEt = () => {
    let count = 0;
    let wordArr = str.split(' ')

    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].toLowerCase() === "et") {
            count++
        }
    }
    return count
}
countEt(str)