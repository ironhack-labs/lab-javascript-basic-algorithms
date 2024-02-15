// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops

// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

const hacker1 = "zasome name of person which is super long";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "another person with a different name";
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

const whichIsLonger = (name1,name2) => {
    if (name1.length === name2.length) {
        return `Wow, you both have equally long names, ${name1.length} characters!`
    }
    else if (name1.length > name2.length) {
        return `The driver has the longest name, it has ${name1.length} characters.`
    }
    return `It seems that the navigator has the longest name, it has ${name2.length} characters.`
}

console.log(whichIsLonger(hacker1,hacker2))

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?

console.log(hacker1.toUpperCase().split('').join(' '))
console.log([...hacker1].reverse().join(''))

const whosOnFirst = (name1,name2) => {
    // negative if string 1 first
    // positive if string 2 first
    // zero if the same
    const comparison = name1.localeCompare(name2,'en', { sensitivity: 'base' })
    if (comparison === 0) {
        return 'What?! You both have the same name?'
    }
    else if (comparison < 0) {
        return 'The driver\'s name goes first.'
    }
    return 'Yo, the navigator goes first, definitely.'
}

const testString1 = 'abbcdefga';
const testString2 = 'abbcdefga';
console.log('who is first test: ', whosOnFirst(hacker1,hacker2))




// bonus 1: counting
// Bonus 1:
// Go to the lorem ipsum generator website and:

// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet purus ut magna sagittis congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel metus sit amet justo rhoncus vestibulum. Praesent tristique malesuada metus ut interdum. Mauris imperdiet nisl vitae tempor interdum. Nunc a faucibus nibh, sed ornare velit. Sed tincidunt tempus aliquet. Vivamus fringilla turpis at rutrum sagittis. Vestibulum id ipsum viverra, porttitor ante a, tincidunt nisi. Mauris sit amet facilisis lorem. Aliquam aliquet faucibus justo. Aenean vel metus nec dolor porta lobortis sed vitae metus. Nam tincidunt metus nisl, eu volutpat velit hendrerit ut.

Morbi ac semper nisi, eu tristique neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet elit a ipsum mollis lacinia. Nunc efficitur at nisi id facilisis. Fusce in pulvinar sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in purus nunc. Praesent ac nulla at justo gravida lacinia. Duis semper tortor quis nisi lobortis, id lacinia nunc interdum. In hac habitasse platea dictumst.

Duis egestas odio dui, et porttitor tellus semper ac. Pellentesque sit amet lacinia diam, a ultricies lectus. Aenean malesuada blandit mollis. Praesent vitae dui quis arcu vulputate efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Morbi congue felis quis nulla laoreet, ut commodo sapien ullamcorper. Praesent faucibus velit ligula, eget efficitur ipsum finibus nec. Phasellus auctor eleifend magna sed eleifend. Etiam a est eget urna eleifend fermentum. Vivamus ornare et magna vitae eleifend.
`

const countWords = string => string.split(/\n+|\s+/).filter(a => a).length
const countOccurences = (string,match) => 
        string.split(' ')
        .map(a => a.toLowerCase().replace(/\W/,''))
        .filter(a => a === match).length

console.log('word count: ',countWords(longText))
console.log('occurences: ', countOccurences(longText,'et'))


// bonus 2: palindrome

const strings = [
    "A man, a plan, a canal, Panama!",
    "definitely, not. a \"palindrome\"? bud",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"
]

const phraseToCheck = "Was it a car or a cat I saw?";

const isItAPalindrome = (string) => {
    const filterString = (string) => [...string].filter(a => a.match(/\w/)).join('').toLowerCase();
    const filteredString = filterString(string)
    let isIt = true;
    for (let i = 0,j = filteredString.length - 1; i < filteredString.length/2; i++,j--) {
        if (filteredString[i] === filteredString[j]) {
            continue
        }
        else isIt = false
        break
    }
    return isIt
}
console.log(isItAPalindrome(phraseToCheck))
console.log(strings.map(a => isItAPalindrome(a)))
