// Iteration 1: Names and Input

// 1.1
let hacker1 = "Juan Pablo Castaño"
// 1.2
console.log(`The driver's name is ${hacker1}`)
// 1.3
let hacker2 = "Santiago Castaño"
// 1.4
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

// 2.1 
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

// 3.1
let result1 = hacker1.charAt(0).toUpperCase()
for (let i = 1; i<hacker1.length; i++){
    result1 += ` ${hacker1.charAt(i).toUpperCase()}`
}
console.log(result1)

// 3.2

let result2 = "";
for (let i = hacker2.length-1; i>=0; i--){
    result2 += hacker2.charAt(i)
}
console.log(result2)

// 3.3

if (hacker1 < hacker2) {
    console.log("The driver's name goes first,")
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definiely.")
} else {
    console.log("What?! You both have the same name?")
}

/* BONUS TIME */

// Bonus 1

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat erat et lacus sagittis consequat. Fusce eget gravida sapien, nec rhoncus arcu. Sed dignissim turpis ullamcorper ipsum semper, sit amet sollicitudin odio luctus. Donec lobortis, massa a sollicitudin ullamcorper, quam sapien vestibulum purus, sit amet fringilla arcu mauris non massa. Vivamus sit amet mauris tempus, sodales enim ac, ultricies mauris. Phasellus dapibus eu justo vel accumsan. Sed eget rutrum lectus. Suspendisse potenti. Nullam a metus sem. Nunc vitae massa a nulla malesuada ullamcorper at et urna. Fusce quis dignissim nisl. Aliquam porta porttitor ipsum bibendum venenatis. Nulla fringilla leo ipsum, a pharetra purus ultrices vitae. Aliquam nunc elit, efficitur at elit et, venenatis accumsan est. Maecenas euismod nisl a metus ornare eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin eget massa felis. Nam sodales enim vel diam posuere dapibus ac sed velit. Quisque gravida sagittis magna nec rhoncus. Proin eu laoreet dui. Quisque consequat sem id suscipit condimentum. Vivamus in purus luctus, pulvinar lacus sed, ornare ex. Curabitur aliquet lorem et volutpat laoreet. Quisque pharetra nulla et semper sodales. Phasellus tristique enim leo, efficitur ultrices ligula venenatis nec. Nunc volutpat lacus a facilisis vestibulum. Donec varius scelerisque tortor. Donec finibus urna non nibh imperdiet, sed aliquet nisi porta. Aliquam imperdiet suscipit est, at fringilla elit suscipit non. Aliquam elit quam, ultricies in enim quis, vestibulum porttitor nisi. Etiam et tristique est. Sed vitae orci vulputate, tempus enim eget, sagittis nisi. Quisque dignissim posuere blandit. Pellentesque aliquam turpis eget nulla sollicitudin, ut condimentum ante varius. Etiam tempor felis id maximus consectetur."

let word = ""
let wordCounter = 0
let etCounter = 0

for (let i = 0; i<lorem.length; i++){
    if (lorem.charAt(i) == ' '){
        if (word == "et") etCounter++
        wordCounter++
        word = ""
    } else {
        word+=lorem.charAt(i);
    }
}
console.log(`Number of words: ${wordCounter}`)
console.log(`Number of ets: ${etCounter}`)

// Bonus 2

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase()
}

function isPalindrome(phrase) {
    for (let i = 0, j = phraseToCheck.length-1; i<j;){
        if (!isLetter(phraseToCheck.charAt(i))) {
            i++
            continue
        }
    
        if (!isLetter(phraseToCheck.charAt(j))) {
            j--
            continue
        }

        console.log(`Comparing ${phraseToCheck.charAt(i)} and ${phraseToCheck.charAt(j)}`)
        if (phraseToCheck.charAt(i).toLowerCase() != phraseToCheck.charAt(j).toLowerCase()){
            return false
        } else {
            i++
            j--
        }
    }

    return true
}

let phraseToCheck = "Amor, Roma"
console.log(isPalindrome(phraseToCheck))



