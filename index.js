// Iteration 1: Names and Input
let hacker1 = "jvv456";
console.log("the driver's name is " + hacker1);
const hacker2 = "mySelf";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops
hacker1 = hacker1.toUpperCase()

//the upper case with spaces name
let u = ''

for (let i = 0; i < hacker1.length; i++){
    u += hacker1[i] + ' '
}

console.log(u)


//the reverse name
let r = '' 

for (let i = hacker2.length; i > 0; i--) {
    r += hacker2[i-1]
}
console.log(r)


/**
 * Bonus 1: Lorem ipsum counter
 */

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim magna, rhoncus et velit at, ultrices mattis neque. Sed est urna, aliquam sed pulvinar sit amet, aliquet id justo. Quisque pretium arcu a nulla efficitur imperdiet. Duis ut augue ac tortor semper cursus id in elit. Donec at efficitur nulla. Nullam est magna, tincidunt et mollis ac, laoreet vitae purus. Curabitur eget laoreet sapien. Ut cursus risus sit amet turpis auctor, eu maximus sapien tincidunt. Maecenas aliquet dictum nunc ac facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque semper lorem eget urna sollicitudin, iaculis mollis nisl posuere. Nunc quis sem erat. Fusce convallis nunc a porttitor interdum.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur eget mollis est, sed scelerisque erat. In et malesuada felis. Integer hendrerit luctus enim, ultrices tempor est lacinia vel. Donec at interdum felis. Proin vitae volutpat ipsum. Nullam lorem tellus, malesuada eget maximus vel, malesuada at eros. Suspendisse tellus elit, imperdiet eget justo in, egestas varius nulla. Nunc gravida non urna consequat condimentum. Pellentesque suscipit viverra justo, id consequat erat consectetur at. Ut quam erat, interdum vitae eros id, bibendum molestie neque.

Praesent accumsan massa vel massa fermentum consequat. Quisque vehicula imperdiet consequat. Curabitur sit amet lacus in elit imperdiet efficitur eu ac tellus. Cras ut turpis sapien. Aenean fermentum turpis vel felis volutpat laoreet eu eu leo. Quisque aliquet ligula eget dui porta vehicula. Nunc ullamcorper sem purus, vitae viverra arcu rhoncus in. Integer ut venenatis nunc. Nulla pulvinar, nulla eget tristique accumsan, odio odio vehicula felis, non feugiat ante metus vitae velit. Nam neque nisl, commodo ut risus at, tempus posuere lacus. Sed feugiat vulputate dictum. Mauris eget nisi vehicula, mattis dui quis, placerat tellus. Mauris non mattis dolor, quis iaculis orci.`
//counter will store the number of words
let counter = 0
//The actual position to check if the char is space or not
let position = 0
//the inWord flag tells if the character before our postion was a space, in which case the flag is set to false
let inWord = false
const spaces = /\s+/
while (position < longText.length) {
    if (spaces.test(longText[position]) && inWord) {
        counter++
        inWord = false
    }
    if (!spaces.test(longText[position]) && !inWord) {
        inWord = true
    }
    position++
}
if (inWord) counter++

console.log(counter)

//count the number of times the word et appears in the text:
position = 0
let currentWord = ''
let etCounter = 0

while (position < longText.length) {
    c = longText[position]
    if (spaces.test(c) && inWord) {
        if (currentWord === 'et') etCounter++
        currentWord = ''
        inWord = false
    } else if (!spaces.test(c) && !inWord) {
        inWord = true
        currentWord += c
    } else if (inWord && !spaces.test(c)) {
        currentWord += c
    }
    position++ 
}
console.log(etCounter)

/**
 * Bonus 2: PALINDROME?
 */

const phraseToCheck = 'a.bcd efged-c:b,a'

let phrase = ''
const notSpecial = /[a-zA-Z]/
for (letter of phraseToCheck){
   if (notSpecial.test(letter)) {
    phrase += letter
   }
}

let palindrome = true
let start = 0
let end = phrase.length -1
while (start < end) {
    if (phrase[start] != phrase[end]){
        palindrome = false
        break
    }
    start++
    end--
}
console.log(phrase)
console.log(palindrome)


