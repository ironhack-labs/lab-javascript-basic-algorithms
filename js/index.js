// Iteration 1: Names and Input
const hacker1 = "Brian"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Mike"
console.log(`The navigator's name is ${hacker2}`) 
// Iteration 2: Conditionals
if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
// Iteration 3: Loops

//Solución de Internet
//console.log(hacker1.split('').join(' ').toUpperCase())
function printName1(name) {
    let nameUpper = name.toUpperCase()
    let newName = ""
    for(let letters of nameUpper) {
        newName += `${letters} `
    }
    console.log(newName)
}
printName1(hacker1)

//Solución de Internet
//console.log(hacker2.split('').reverse().join(''))
function printName2(name) {
    let newName = ""
    for(i = name.length; i >= 0 ; i--) {
        newName += `${name.charAt(i)}`
    }
    console.log(newName)
}
printName2(hacker2)

let order = hacker1.localeCompare(hacker2)
if(order < 0){
    console.log(`The driver's name goes first`)
} else if(order > 0){
    console.log(`Yo, the navigator goes first definitely.`)
} else{
    console.log(`What?! You both have the same name?`)
}

//Bonus 1
const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium massa vitae vehicula laoreet. Fusce at ex eleifend, tincidunt lacus id, aliquet justo. Aenean facilisis risus id lacus mollis, non commodo libero tincidunt. Ut velit risus, congue vitae scelerisque eget, scelerisque nec ipsum. Sed in justo eu sapien vestibulum condimentum. Donec pretium, enim in hendrerit convallis, nibh orci malesuada massa, eu dictum nisi felis sit amet orci. Mauris vulputate laoreet erat. Donec eros dui, bibendum sed massa sit amet, rutrum interdum lectus. Fusce vel fermentum est. Etiam non dignissim ex. In hac habitasse platea dictumst. Quisque vestibulum at justo non consectetur. Donec aliquet pellentesque finibus.
Praesent convallis orci eget cursus placerat. Quisque tincidunt elit ac sapien aliquet, et maximus neque tempus. Cras in nunc justo. Vivamus egestas risus eu suscipit sollicitudin. Ut ut bibendum metus. Suspendisse potenti. Sed pretium magna eu sem egestas, in maximus ante semper. Nulla facilisi.
Quisque commodo massa orci, at ultricies tellus tincidunt sit amet. Suspendisse facilisis egestas odio, eget finibus urna. Nam euismod metus in ullamcorper pharetra. Ut condimentum arcu et laoreet vehicula. Suspendisse tincidunt viverra lorem, facilisis semper erat auctor sit amet. In nec tincidunt ipsum, a dignissim nisl. Etiam a dui ornare, sollicitudin magna in, tincidunt diam. Maecenas ex magna, volutpat eget ex ultrices, luctus volutpat lectus. Morbi ut dolor neque.`
/* Solución de Internet
function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
 }
 console.log(countWords(paragraphs))
 */

 let wordsCounter = 0;
 for(i = 0; i < paragraphs.length; i++){
    if(paragraphs.charAt(i) === ' '){
        wordsCounter++
    }
 }
 wordsCounter++
 console.log(`El número de palabras es ${wordsCounter}.`)

 let cleanParagraph = '';
 for(let letter of paragraphs) {
    if(letter !== ',' && letter != '.' && letter !== '\n'){
        cleanParagraph += `${letter}`
    }
}
cleanParagraph = ` ${cleanParagraph.toLowerCase()} `
//console.log(cleanParagraph)
let etCounter = 0;
for(i = 0; i <= cleanParagraph.length; i++){
    if(cleanParagraph.charAt(i) === ' ' && cleanParagraph.charAt(i+1) === 'e'
    && cleanParagraph.charAt(i+2) === 't' && cleanParagraph.charAt(i+3) === ' '){
        etCounter++
    }
}
console.log(`The number of times the Latin word et appears is ${etCounter}.`)

 //Bonus 2
 let phraseToCheck = 'taco cat'
 let phraseLower = phraseToCheck.toLowerCase()
 let phraseNoSpaces = ""
 for(let letter of phraseLower) {
     if(letter !== ' ' && letter !== ',' && letter !== '?' && letter !== '!'){
        phraseNoSpaces += `${letter}`
     }
 }
 let phraseReverse = ""
    for(i = phraseNoSpaces.length; i >= 0 ; i--) {
        phraseReverse += `${phraseNoSpaces.charAt(i)}`
    }
if(phraseNoSpaces === phraseReverse){
    console.log(`The phrase ${phraseToCheck} is a palindrome.`)
} else{
    console.log(`The phrase ${phraseToCheck} is not a palindrome.`)
}
console.log(phraseNoSpaces)
