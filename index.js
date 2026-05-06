// Iteration 1: Names and Input
const hacker1 = "Karl"
const hacker2 = "Karlito"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
console.log(hacker2.toUpperCase().split('').join(' '))
console.log(hacker2.split('').reverse().join(''))

const strOrder = hacker1.localeCompare(hacker2)
if (strOrder === 1) {
    console.log("The driver's name goes first.")
} else if (strOrder === -1) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus 1
const longText = `Lorem    ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dui ac lectus aliquam, 
ut bibendum diam hendrerit. Morbi tempus porttitor accumsan. Nulla ornare ut risus sed aliquam. 
Praesent accumsan sollicitudin erat eu pulvinar. In eget metus mollis, 
lobortis nulla a, fringilla tellus. Mauris eu pretium mauris. Sed sagittis sagittis elit, 
sit amet iaculis felis blandit ac. Maecenas et dolor non odio finibus feugiat vitae eget 
libero. Integer quis gravida neque, et maximus elit. Phasellus mollis tortor eget quam hendrerit, 
sit amet tempor tellus imperdiet. Vivamus vitae eros posuere massa consectetur hendrerit sit amet 
tristique mauris. Mauris malesuada, metus et suscipit cursus, mauris lacus aliquet lorem, a congue odio nisl non neque. 
Donec consequat viverra sagittis. Pellentesque dolor justo, lacinia ut sapien at, dignissim faucibus nisl. 
Curabitur vitae porttitor dolor, a lobortis eros. Suspendisse potenti. Aliquam ornare porttitor molestie. 
Aenean dapibus nunc a tincidunt condimentum. Sed mattis metus nec sollicitudin gravida. Aliquam quis tellus dictum, 
dictum mi a, tincidunt massa. Nulla facilisi. Praesent tincidunt tempus neque vitae porttitor. Aenean in neque leo. 
Vestibulum efficitur nec odio nec faucibus. Donec tellus ex, ullamcorper vel sem et, sodales congue lacus. Curabitur cursus 
ex non tortor lobortis, eu fringilla odio mollis. In id facilisis nisl. Nulla quis commodo massa. Nam iaculis laoreet elementum. 
Nunc porta justo augue, nec rutrum ligula semper in. Nam ornare odio nec ex varius ultrices. Nulla accumsan metus sed metus rutrum 
ullamcorper. Curabitur odio ante, tristique et dictum ac, aliquam vitae tellus. Morbi aliquet urna eu nunc placerat finibus. 
Maecenas dapibus est quis urna ultrices tincidunt. Mauris congue turpis magna, sit amet aliquam ligula fermentum et.`


function countingWord(str) {
    const count = str.split(" ").filter(word => word !== "").length
    return count
}

function countingSpecWord(str, word) {
    const count = str.split(" ").filter(str => str !== "" && str === word).length
    return count
}

console.log(countingWord(longText))
console.log(countingSpecWord(longText, "et"))

// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!"

function checkPalindrome(str) {
    const lowerStr = str.toLowerCase()
    let reversedStr = "";
    let normalStr = "";
    // const punctArr = ["/",",", ";", ":", "!", "?",".", "'","\"","[",]
    // const punct = /^[.,:!?;"']/
    const punctArr = "^[.,:!?;\"']".split("")

    for (let i = str.length - 1; i >= 0; i--) {
        if (punctArr.includes(lowerStr[i]) || lowerStr[i] === " ") {
            continue
        }
        reversedStr += lowerStr[i]
    }
    for (let i = 0; i < str.length; i++) {
        if (punctArr.includes(lowerStr[i]) || lowerStr[i] === " ") {
            continue
        }
        normalStr += lowerStr[i]
    }
    if (normalStr === reversedStr) {
        return "This is a Palindrome."
    }
    return "This is not a Palindrome."

}

console.log(checkPalindrome(phraseToCheck))


