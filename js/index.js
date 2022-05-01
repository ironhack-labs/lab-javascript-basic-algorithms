//Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "rodrigo"

//1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}"`)

//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "javi"

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The navigator's name is ${hacker2}"`)

//Iteración 2: Condicionales
//2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length){
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters` )

}else if(hacker1.length < hacker2.length){
    console.log(`The ${hacker2} has the longest name, it has ${hacker2.length} characters` )
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let name = ''

for (let i = 0; i < hacker1.length; i++) {
    name += hacker1[i]
}
console.log (name.toUpperCase())

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let name2 = ""

for (let i = hacker1.length - 1; i >= 0; i--) {
    name2 += hacker1[i]
}
console.log(name2)

// 3.3 Depending on the lexicographic order of the strings, print:
let result = hacker1.localeCompare(hacker2);
if (result < 0){
    console.log(`The driver's ${hacker1} goes first.`)
} else if (result > 0){
    console.log(`Yo, the ${hacker2} goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

//Bonus Time!
//Bonus 1:

// - Generate 3 paragraphs. Store the text in a variable type of string.
let words = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lorem congue, sagittis urna ac, viverra purus. Nunc bibendum lobortis est sit amet suscipit. Etiam consectetur mi vel elementum commodo. Morbi eu neque a quam tincidunt varius eget at justo. Suspendisse potenti. Nullam euismod tellus erat, nec pharetra neque fringilla eu. Mauris magna purus, laoreet at egestas quis, venenatis a quam. Nulla scelerisque quam finibus aliquam porttitor.
Nunc interdum quam ante, non rutrum nunc posuere at. Sed tincidunt purus hendrerit pharetra tempus. Praesent in fringilla mi. Morbi consectetur magna at tincidunt varius. Aliquam tristique eros eu efficitur commodo. Sed ullamcorper semper magna, non rhoncus nunc malesuada id. Maecenas vestibulum dui eget accumsan consectetur. Donec enim lectus, ultrices in ligula non, consectetur bibendum justo. Sed consectetur, purus suscipit sagittis laoreet, nibh sapien pharetra mi, sed rhoncus sapien justo non dolor. Nunc sit amet efficitur velit. Nunc at convallis nisl, eu ullamcorper tellus. Nunc tincidunt orci sem, a sollicitudin arcu accumsan at. Cras hendrerit aliquet vestibulum.
Aenean commodo nec tortor nec efficitur. Ut facilisis sodales risus, id auctor risus gravida eu. Suspendisse ac velit sagittis, ornare mauris eu, malesuada nisl. Ut accumsan, magna feugiat imperdiet sollicitudin, est est feugiat enim, nec lobortis sapien dui vitae massa. Vestibulum fringilla viverra ex eget volutpat. Vestibulum porta sem ut varius ultricies. Fusce ante ligula, convallis in tellus et, fermentum convallis arcu. Nam laoreet tortor in lacinia placerat. Donec eget lacus auctor, condimentum nisl sit amet, dignissim ex.
`
// - Make your program count the number of words in the string.
console.log(words.length)

// - Make your program count the number of times the Latin word et appears.
let word = "et"

const lookfor = words.indexOf(word);

console.log(lookfor)

//Bonus 2:
let frase = "step on no pets"

function palindrome(frase) {
    
    let len = frase.length
    let result = true;

    for (let i = 0; i < len/2; i++) {
        
        if (frase[i] !== frase[len - 1 - i]) {
            
            result = false

        }
        
    }

    return result

}

console.log(palindrome(frase))