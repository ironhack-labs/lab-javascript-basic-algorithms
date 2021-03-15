//console.log("I'm ready!");

//Iteration 1: Names and Input

const hacker1 = "Vincent";
console.log("The driver's name is " + hacker1);

const hacker2 = "John";
console.log("The navigator's name is " + hacker2);


//Iteration 2: Conditionals
//Depending on which name is longer, print "text":

const lengthNameHacker1 = hacker1.length;
const lengthNameHacker2 = hacker2.length;

const longestName = () => {
    if (lengthNameHacker1 > lengthNameHacker2) {
        console.log(`The driver has the longest name, it has ${lengthNameHacker1} characters.`)
    } else if (lengthNameHacker1 < lengthNameHacker2) {
        console.log(`It seems that the navigator has the longest name, it has ${lengthNameHacker2} characters.`)
    } else {
        console.log(`Wow, you both have equally long names, ${lengthNameHacker1} characters!`)
    }
}

longestName();


//Iteration 3: Loops
//Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

function upperCase(hacker1) {
    let hacker1UpperCase = ""
    for (let i = 0; i < hacker1.length; i++)
        hacker1UpperCase += hacker1[i].toUpperCase() + " ";
    return hacker1UpperCase
}
console.log(upperCase(hacker1))

//Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function reverse(hacker2) {
    let hacker2Reverse = '';
    for (let i = hacker2.length - 1; i >= 0; i--)
        hacker2Reverse += hacker2[i];
    return hacker2Reverse;
}
console.log(reverse(hacker2))

//Depending on the lexicographic order of the strings, print "text":

const nameArr = [hacker1, hacker2]
console.log(nameArr.sort())

if (nameArr[0] === nameArr[1]) {
    console.log("What?! You both have the same name?")
} else if (nameArr[0] === hacker1) {
    console.log("The driver's name goes first.")
} else {
    console.log("Yo, the navigator goes first definitely.")
}


//bonus1
//Generate 3 paragraphs. Store the text in a variable type of string.

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum urna non sem bibendum molestie. In vitae turpis arcu. Suspendisse a mattis diam, quis scelerisque dui. Mauris pretium risus quis ante blandit posuere. Nulla facilisi. Praesent urna eros, vehicula vel sollicitudin eget, elementum vel nisl. Donec sagittis lacus quis congue vulputate. Morbi nibh ipsum, pharetra a finibus at, blandit nec augue. Vivamus enim lectus, fermentum in quam id, convallis varius velit. Nunc vitae arcu non lacus mollis aliquam non commodo arcu. Integer tortor neque, rhoncus a auctor eu, malesuada eget ipsum. Aenean posuere tellus in sem bibendum pulvinar. Curabitur tincidunt ligula non nulla convallis, ac interdum sem luctus. Vestibulum eu dignissim dui. Donec quis nunc pulvinar, scelerisque arcu in, ultricies eros. Sed laoreet erat ut neque pellentesque tempor. Aenean at laoreet nibh. Nullam ut condimentum ex, non dictum mi. Nullam ut volutpat mi. Mauris faucibus quam leo. Nunc eu lobortis nisl. Sed mi nisi, molestie sit amet tellus sed, laoreet pulvinar lacus. Mauris suscipit nibh eget elit sodales, id congue leo scelerisque. Fusce iaculis neque vel sem iaculis, et pellentesque leo hendrerit. Cras eleifend eget mauris id viverra. Aliquam ac lectus sed diam posuere sodales. Cras vehicula venenatis est sit amet ornare. Etiam at mauris consectetur, ullamcorper nibh sed, bibendum ex. Etiam vestibulum nibh vitae lacus scelerisque, nec dapibus nulla tincidunt. Etiam finibus mattis luctus. Sed rutrum commodo purus, a pulvinar urna convallis sed. Mauris turpis purus, maximus ac consectetur vitae, tincidunt pharetra mauris. Phasellus vestibulum, eros nec imperdiet porta, quam arcu tincidunt velit, eu sollicitudin nisl metus et dui. Ut enim felis, ultricies ac lacus ac, mollis tincidunt nisi. Proin lobortis leo non orci eleifend, mattis accumsan nisl molestie. Nam at nisl sem. Morbi blandit purus erat, et consectetur dolor tempor id. Sed tempor commodo mi vel maximus."

//Make your program count the number of words in the string.

function countWords(loremIpsum) {
    let words = loremIpsum.split(' ').length;
    return words;
}
console.log(countWords(loremIpsum))

//Make your program count the number of times the Latin word et appears.

function countOccurences(loremIpsum) {
    return loremIpsum.split(" et ").length - 1;
}
console.log(countOccurences(loremIpsum));

//Bonus 2
//Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes

let phraseToCheck = "Was it a car or a cat I saw?"

function isPalindrome(palindrome) {
    palindrome = palindrome.replace(/[\W_]/g, '').toLowerCase()
    console.log(palindrome);
    for (let i = 0; i < palindrome.length; i++) {
        if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome(phraseToCheck))