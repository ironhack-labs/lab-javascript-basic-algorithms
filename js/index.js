// Iteration 1: Names and Input
let hacker1 = "Marc";
console.log(`The driver's name is: ${hacker1}`)
let hacker2 = "Almudena"
console.log(`The navigator's name is: ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if (hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} 
// Iteration 3: Loops
//3.1
let string="";
for (let i=0; i < hacker1.length;i++ ){
    string = string + hacker1[i].toUpperCase() + " "   
}
console.log(string)
//3.2
let string2="";
for (let i= hacker2.length -1 ; i>=0; i--){
string2=string2+hacker2[i];
}
console.log(string2)
//3.3.1 using arrays and arrays.sort()
const hackers = [hacker1, hacker2]
const hackersOrdered = hackers.sort()
console.log(hackersOrdered)

if (hackersOrdered[0]===hackersOrdered[1]){
    console.log(`What?! You both have the same name?`)}
   else if (hacker1 === hackersOrdered[0]){
    console.log(`The driver's name goes first`)
    } else if (hacker1 === hackersOrdered[1]){
        console.log(`Yo, the navigator goes first definitely`)
    } 
// 3.3.2 comparing string with abc...

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

// Bonus

// Bonus.1
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et imperdiet nisi. Curabitur enim arcu, cursus id arcu eu, accumsan egestas purus. In pulvinar elementum erat. Sed vestibulum metus et nisl dictum, ut scelerisque leo semper. Integer vel eleifend ligula. Maecenas sit amet diam bibendum, scelerisque libero ac, ornare purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut elementum urna.";
 
let numberOfWords = lorem.split(' ').length

console.log(numberOfWords)

let numberOfET = lorem.split(' et ').length -1
console.log(numberOfET)

//Bonus.2

let phraseToCheck = "race car"
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
