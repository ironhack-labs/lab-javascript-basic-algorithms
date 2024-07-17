// Iteration 1: Names and Input
const hacker1 = "Sam"
const hacker2 = "Merwan"

console.log(`the driver's name is ${hacker1}`)
console.log(`the navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

for (let char of hacker2) {
    console.log(` ${char}`);
}

for (let i = hacker1.length -1; i >= 0; i--){
    console.log(` ${hacker1[i]}`)
}

const compareResult = hacker1.localeCompare(hacker2, undefined, { sensitivity: 'base' })

if (compareResult < 0){
    console.log("The driver's name goes first.")
} else if (compareResult > 0){
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus in leo id commodo. Donec interdum fermentum mi, at hendrerit diam sollicitudin et. Morbi justo felis, luctus eu nisl at, blandit scelerisque ante. Duis et tellus sit amet massa elementum posuere in pretium est. Mauris posuere, nulla laoreet gravida tempus, nisi libero gravida ligula, nec lacinia ante nunc quis purus. Phasellus consequat pellentesque elementum. Ut bibendum elit augue, non dignissim metus rutrum et. Maecenas et condimentum ligula. Morbi nec lacus vitae massa auctor finibus eu nec leo. Vestibulum non vulputate lectus. Morbi at arcu efficitur, varius leo ac, fringilla dui. Donec consectetur nibh id elit venenatis, sit amet elementum enim ultrices. Phasellus in ligula ligula. Nullam viverra porta justo, eget blandit libero finibus cursus. Quisque ultrices ligula arcu, nec venenatis odio congue sed. Curabitur sollicitudin, tellus a volutpat vehicula, nunc diam faucibus est, ac imperdiet diam tellus eu tortor. Donec laoreet lacinia purus at fringilla. Suspendisse luctus semper massa vel consequat. Quisque nisi sem, sodales id gravida nec, tempus eu lacus. Quisque a convallis nisi. Nam sagittis nisi ac nisl semper, nec blandit est lacinia. Etiam consequat justo vel neque gravida, quis blandit elit fermentum. Integer suscipit pellentesque velit, at cursus diam porta quis. Suspendisse condimentum urna in porta condimentum. Suspendisse lorem urna, egestas sit amet cursus in, interdum ut libero. Vestibulum leo massa, feugiat quis turpis at, ullamcorper interdum arcu. Pellentesque in convallis augue. Donec dui lorem, feugiat in sem suscipit, pharetra interdum dolor. Aliquam varius dolor ut tellus eleifend placerat. Nulla sed suscipit mi. Aenean pretium mauris a dolor rutrum aliquet. Quisque egestas mauris in sapien feugiat, eu molestie ex ultrices. Aenean arcu libero, gravida at odio vel, eleifend ullamcorper leo."
const nbOfWords = longText.split(' ').length
const numberOfEt = longText.match(/\bet\b/g).length

// Bonus 2

const phrasesToCheck = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"
]

function isPalindrome(str){
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++){
            if (str[i] !== str[j]){
                return false
            }
            j--
    }
    return true
}
phrasesToCheck.forEach(phrase => console.log(`${isPalindrome(phrase)}: ${phrase}`))


const reverseStr = (str) => str.split("").reverse().join("")
const isPalindromeV2 = (str, reverseStr) => str === reverseStr(str) ? true : false
phrasesToCheck.forEach(phrase => console.log(`${isPalindromeV2(phrase)}: ${phrase}`))
