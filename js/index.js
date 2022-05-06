//Pair programing. GRUPO: Marc, Giancarlo y Almudena

// Iteration 1: Names and Input
/*
1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`.
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`.
*/

let hacker1 = "Marc";
console.log(`The driver's name is: ${hacker1}`)
let hacker2 = "Almudena"
console.log(`The navigator's name is: ${hacker2}`)

// Iteration 2: Conditionals
/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if (hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let string="";
for (let i=0; i < hacker1.length;i++ ){
    string = string + hacker1[i].toUpperCase() + " "
}

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let string2="";
for (let i= hacker2.length -1 ; i>=0; i--){
string2=string2+hacker2[i];
}

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

stringABC="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let positionDriver = 0
let positionNavigator=0
for(let i=0; i < stringABC.length;i++){
    if (stringABC[i]===hacker1[0]){
        positionDriver=i
    } else if(stringABC[i]===hacker2[0])
        positionNavigator=i
}
if (positionDriver===positionNavigator){
    console.log(`What?! You both have the same name?`)}
else if (positionDriver>positionNavigator){
    console.log(`Yo, the navigator goes first definitely`)
} else if (positionNavigator>positionDriver){
    console.log(`The driver's name goes first`)
}

/*
Bonus 1:
Go to lorem ipsum generator and:
Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et imperdiet nisi. Curabitur enim arcu, cursus id arcu eu, accumsan egestas purus. In pulvinar elementum erat. Sed vestibulum metus et nisl dictum, ut scelerisque leo semper. Integer vel eleifend ligula. Maecenas sit amet diam bibendum, scelerisque libero ac, ornare purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut elementum urna.";
let numberOfWords = lorem.split(' ').length
console.log(numberOfWords)
let numberOfET = lorem.split(' et ').length -1
console.log(numberOfET)

/*
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

let phraseToCheck = "A man, a plan, a canal, Panama"
let newPhraseNoSpace = ""
let newPhraseVolteada = ""
let cont =0;
//remove spaces
for (let i=0; i<phraseToCheck.length;i++){
    if (phraseToCheck[i]!==" "){
    newPhraseNoSpace=newPhraseNoSpace+phraseToCheck[[i]]
    }
}
console.log(newPhraseNoSpace)
//Voltear phrase
for (let i=newPhraseNoSpace.length -1; i>=0 ; i--){
    newPhraseVolteada=newPhraseVolteada+newPhraseNoSpace[i]
    }
console.log(newPhraseVolteada)
//compare removedspaces with Phrasevolteada
for (let i = 0, j=newPhraseVolteada.length -1 ; i<newPhraseNoSpace.length, j>=0 ; i++, j--){
    if (newPhraseVolteada[i]===newPhraseNoSpace[j]){
        cont = cont + 1
    }
}
//print solution
if (cont===newPhraseVolteada.length){
    console.log("es palindrome")
} else {
    console.log("no es palindrome")
}