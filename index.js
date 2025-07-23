// Iteration 1: Names and Input
let hacker1 = "Alejandra"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Mael"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker2.length < hacker1.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if ( hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let hacker1UpperCase = ""
for(let i = 0; i < hacker1.length; i++){
    hacker1UpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1UpperCase)

let hacker2Reversed = "";
// for(let i = 0 ; i < hacker2.length; i++){
//     hacker2Reversed += hacker2[hacker2.length - 1 - i]
// }
// console.log(hacker2Reversed)

for(let i = (hacker2.length-1); i >= 0; i--){
    hacker2Reversed += hacker2[i]
}
console.log(hacker2Reversed)

// Excercise #3
// hacker2 = "Alejandro"
// hacker2 = "Ale"

let hackerHigherLexOrder = ""
let symbol =""
let iter = 0

let hackerWithShortestName = hacker1.length < hacker2.length ? hacker1:hacker2
let selectedLength = hackerWithShortestName.length
console.log(`Length of the shortest name is ${selectedLength} (${hackerWithShortestName})`)

for(let i = 0; i < selectedLength ; i++ ){
    iter = i + 1;
    if(hacker1[i] < hacker2[i]){
        hackerHigherLexOrder = hacker1;
        // console.log(`${iter})  ${hacker1[i]} (${hacker1[i].charCodeAt(0)}) is before ${hacker2[i]} (${hacker2[i].charCodeAt(0)})`)
        break;
    }else if(hacker1[i] > hacker2[i]){
        hackerHigherLexOrder = hacker2;
        // console.log(`${iter})  ${hacker1[i]} (${hacker1[i].charCodeAt(0)}) is after ${hacker2[i]} (${hacker2[i].charCodeAt(0)})`)
    }else{
        hackerHigherLexOrder = hackerWithShortestName
        // console.log(`${iter})  ${hacker1[i]} (${hacker1[i].charCodeAt(0)}) = ${hacker2[i]} (${hacker2[i].charCodeAt(0)})`)
    }
}

if(hackerHigherLexOrder === hacker1){
    console.log(`The driver's name goes first.(${hackerHigherLexOrder})`)
}else if(hackerHigherLexOrder === hacker2){
    console.log(`Yo, the navigator goes first, definitely.(${hackerHigherLexOrder})`)
}else{
    console.log("What?! You both have the same name?")
}

// Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue convallis nisl, vitae laoreet mauris. Fusce tempus, ipsum nec molestie egestas, magna nisl euismod justo, nec rutrum justo nibh id augue. In id leo sit amet turpis tincidunt commodo ut vitae ante. Cras vulputate elit et molestie auctor. Etiam rhoncus lobortis quam eget elementum. Nullam in enim leo. Ut porttitor sapien vitae rutrum accumsan.

Mauris ullamcorper lacus orci. Suspendisse vehicula blandit enim, non pulvinar enim aliquam id. Nulla vel nisl hendrerit, sagittis leo quis, egestas nunc. Integer fermentum venenatis mattis. Maecenas fermentum neque at nunc vestibulum, at fringilla metus cursus. Vivamus convallis lorem nec ante venenatis porttitor. Donec euismod leo ut leo tempor, eu tristique enim pellentesque. Nullam quis nibh est. Nunc non varius nunc. Vestibulum condimentum vitae purus ut iaculis.

Vestibulum ornare ullamcorper felis, ut egestas velit. Mauris feugiat interdum eros sit amet cursus. Donec in libero non velit faucibus euismod. Ut eu velit vel lectus facilisis dictum nec id dolor. Phasellus varius auctor augue porta mollis. Integer eget interdum nisl. Vestibulum id mollis diam. Ut in sapien lacus. Curabitur aliquam eleifend aliquet. Aenean sodales risus elit, vel convallis eros aliquet a. Fusce sed malesuada velit. Sed id elit nec lectus tincidunt elementum. Suspendisse tempor, mauris sit amet maximus efficitur, ipsum urna commodo nunc, nec faucibus nulla dolor sollicitudin turpis. Maecenas aliquam dapibus nunc, nec rhoncus elit. Pellentesque libero libero, aliquam sed est sit amet, efficitur fringilla urna.`
// longText = "Hola Mundo"

let wordCounter = 0
let word = ""
let etCounter = 0
for(let i = 0; i < longText.length; i++){
    if (longText[i] !== " " && longText[i] !== "\n"){
        word += longText[i]
    }else{
        if(word.length > 0){
            wordCounter++;
        }
        // console.log(`${wordCounter}) ${word}`)
        if(word === "et"){
            etCounter++;
        }
        word = ""; 
    }
}
// If word is not empty, but neither " ", nor /n was not found after it, then it is the last word, and it has not been counted yet. So add it to the count.
if (word.length > 0) {
    wordCounter++;
}
console.log(`There are ${wordCounter} words in the paragraphs`)
console.log(`There are ${etCounter} "et" words in the paragraphs`)
// console.log(`There are ${lineBreakCounter} line breaks`)

// let startIndex = 0 
// let lastIndexWord = 0
// for(let i = 0; i < longText.length; i++){    
//     if (longText[i] == " "  || longText[i] == "\n"){
//         lastIndexWord = i;
//         break;
//     }   
// }
// palabra = longText.slice(startIndex, lastIndexWord)
// console.log(`palabra: ${palabra}`)

// let wordsArray =[]
// for(let i = 0; i < longText.length; i++){
//     if (longText[i] !== " " && longText[i] !== "\n"){
//         // console.log(`i:${i}) char:${longText[i]}`)
//         word += longText[i]
//     }else{
//         wordsArray.push(word)
//         word = ""; 
//     }
// }
// console.log(wordsArray)