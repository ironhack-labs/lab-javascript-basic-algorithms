// Iteration 1: Names and Input - Initialize variables with our names

    console.log(`I'm ready!`)

    let hacker1 = "Eduardo"
    let hacker2 = "Isa"

    console.log(`The driver's name is ${hacker1}.`);
    console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals - Check which name is longer

    if ( hacker1.length > hacker2.length ) {
        console.log(`The driver has the longest name, it has ${hacker1.length} letters.`)
    } else if ( hacker1.length < hacker2.length ) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    } else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    };


// Iteration 3: Loops 

    // 1. Print all the characters of the driver's name, separated by a space and in capitals

        let lettersInName1 = hacker1.split("")

        for ( let i = 0; i < lettersInName1.length; i++ ) {
            lettersInName1[i] = lettersInName1[i].toUpperCase() + ' '
            console.log(lettersInName1[i])
        }

        console.log(lettersInName1.join(""));


    // 2. Print all the characters of the navigator's name, in reverse order

        let lettersInName2 = hacker2.split("");
        console.log(lettersInName2.reverse().join(""));


    // 3.3 Depending on the lexicographic order of the strings, print.

        let lexOrder = hacker1.localeCompare(hacker2)

        if ( lexOrder === -1 ) {
            console.log('The driver´s name goes first')
        } else if ( lexOrder === 1) {
            console.log('Yo, the navigator goes first definitely.')
        } else {
            console.log('What?! You both have the same name?')
        }

// Bonus 1 - Lorem Ipsum

const stringLoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ultricies augue. Ut non laoreet turpis. Pellentesque et nisl orci. Vestibulum luctus quam a est finibus blandit. Praesent efficitur lacinia sapien sit amet vulputate. Aliquam ut lacinia magna, in elementum felis. Aliquam eleifend dui nisi, vitae finibus sapien aliquet a. Suspendisse scelerisque purus faucibus orci pulvinar, a egestas lacus scelerisque. Sed elit nulla, mollis id arcu id, egestas suscipit turpis. Pellentesque at blandit nulla. Praesent eget ultricies dui, non imperdiet lacus. Quisque velit purus, hendrerit in ante id, malesuada hendrerit nisi. Vestibulum nec sapien non ipsum vulputate imperdiet a ut arcu. Nam ut faucibus augue. Vivamus turpis leo, convallis in cursus et, pulvinar quis tellus. Fusce dignissim lacus non justo bibendum, vitae sollicitudin diam fringilla. Vestibulum volutpat orci quis libero interdum, ut gravida enim congue. Vestibulum hendrerit est eu dolor luctus, rhoncus tristique ipsum vulputate. Sed justo libero, porttitor in interdum ut, congue nec sem. Nullam ut tellus urna. Praesent vehicula, turpis a pharetra facilisis, turpis magna porta lorem, non laoreet nulla augue in sapien. Etiam congue eu metus eget ultricies. Quisque rhoncus consectetur magna posuere gravida. Etiam rhoncus dui eros, sed pharetra tellus finibus nec. Sed in tortor bibendum, blandit urna sed, maximus dui. Cras non ultrices libero, in volutpat tortor. Nam sed justo a turpis pulvinar porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec dignissim velit sed sem congue hendrerit. Nullam bibendum nibh erat, sed faucibus arcu euismod a. Quisque eget sollicitudin diam. Sed egestas interdum urna vitae mattis. Quisque eget lacus sit amet dolor dignissim iaculis a non ante. Aliquam convallis nec metus vel condimentum. Nulla facilisi. Vestibulum at posuere ante, a rhoncus mauris. Aenean nec arcu ultrices, lacinia nisi non, tincidunt libero. Vivamus maximus mauris et lobortis elementum. Duis ut velit ac dui facilisis finibus nec fringilla purus."

let numberOfWords = stringLoremIpsum.split(" ").length

console.log(numberOfWords);


const arrayLoremIpsum = stringLoremIpsum.split(" ")

let numberOfEt = 0
for (let i = 0; i < arrayLoremIpsum.length; i++) {
  if (arrayLoremIpsum[i].includes("et")) {
    numberOfEt++
  }
}

console.log(numberOfEt)


// Bonus 2 - Palindromes

let palindrome1 = "Amor, Roma"

let stringPalindrome = palindrome1.toLowerCase().replace(/\s/g, "").replace(/[^\w\s]|_/g, "");
let stringPalindromeReverse = palindrome1.split("").reverse().join("").toLowerCase().replace(/\s/g, "").replace(/[^\w\s]|_/g, "");
  
  if (stringPalindrome === stringPalindromeReverse) {
    console.log("It is a palindrome")
  } else {
    console.log("It is not a palindrome")
  }