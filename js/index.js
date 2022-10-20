// Iteration 1: Names and Input
//
const hacker1= "Angela"
console.log("the driver's name is "+ hacker1)

const hacker2= "Someone"
console.log("the navigator's name is "+hacker2)

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log("The driver has the longest name!, it has "+ hacker1.length+" characters")
}
else if (hacker1.length<hacker2.length){
    console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters.")
}
else {
    console.log("Wow, you both have equally long names, "+hacker1.length+" characters!")
}

// Iteration 3: Loops

let hacker1Upper = ""
for (let i=0; i< hacker1.length; i++){
    hacker1Upper += hacker1[i].toUpperCase()+" ";
}
console.log(hacker1Upper)

let hacker2Back = ""
for (let i= hacker2.length -1; i >= 0; i--){
    hacker2Back += hacker2[i]
}
console.log(hacker2Back)

/* const hacker1Upper = hacker1.toUpperCase()
console.log(hacker1Upper.split('').join(' '))

const hacker2Back = hacker2.split('').reverse().join('')
console.log(hacker2Back) */


if (hacker1<hacker2){
    console.log("The driver's name goes first.")
}
else if (hacker1>hacker2){
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}

// Bonus 1
const lorem= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor, magna sit amet imperdiet feugiat, tortor lacus interdum dui, quis euismod nunc ligula et tellus. Quisque mollis ullamcorper dapibus. Duis sit amet magna a justo scelerisque tincidunt vel at sapien. Proin ac magna mattis risus imperdiet egestas. Suspendisse nulla felis, luctus eget finibus quis, ultricies et metus. Vivamus pharetra odio nec ex rutrum, a auctor urna pulvinar. Duis at auctor mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin suscipit mauris vitae massa auctor hendrerit. Morbi ultrices interdum erat, id cursus urna sollicitudin in. Maecenas finibus arcu vel mi interdum condimentum. Etiam vitae metus sagittis, sollicitudin odio nec, rhoncus dui. Mauris ac lacinia elit. Ut ac ultricies lorem, efficitur rutrum mi. Proin a ante vitae lacus lacinia eleifend. Fusce nec nibh sit amet dolor dapibus vestibulum id eu nisi. Nunc sed risus nec metus sodales sodales vitae quis justo. Aliquam laoreet sagittis venenatis. Nunc finibus et ligula eu aliquet. Aliquam nec leo a quam bibendum aliquet eu id risus. Suspendisse ut sodales nulla. Nam tempor euismod cursus. Nam magna erat, ullamcorper quis enim id, ullamcorper mattis tortor. Nullam a vulputate dui. Duis placerat ex dui, blandit dictum elit viverra nec. Proin ut vulputate justo. Morbi a tempor ex. Aenean porta arcu leo, quis consectetur ligula ultricies quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus interdum arcu mi, eu posuere nunc imperdiet ac. Pellentesque tincidunt mollis interdum. Nullam auctor egestas orci nec laoreet. Nam aliquam, mi quis vestibulum laoreet, mauris nulla pretium urna, nec feugiat orci urna ut nulla. Maecenas lacinia ornare urna pellentesque condimentum. Sed bibendum velit in commodo tincidunt. Pellentesque nec aliquet mi."


/* it starts with 1 because we are counting the spaces to deduce the number of words. the first word doesnt have a space */
const numWords = 1
for (let i=0; i<lorem.length -1; i++){
    if (lorem[i] === " "){
        numWords ++;
    }
} 
console.log(numWords)

let numEt= 0

console.log("the number of words in lorem are "+lorem.length)

for (let i=0; i<lorem.length; i++){
    
    if (lorem[i] + lorem [i+1] === " et"){
        numEt++;
    }
}

console.log("the lating word et appears "+numEt+"times")

// bonus 2


let phraseToCheck = "A man, a plan, a canal, Panama!"
let alphabetic = ""
let check = ""

for (let i= 0; i<phraseToCheck.length; i++){
    if (phraseToCheck[i] >= "a" && phraseToCheck[i] <= "z" || phraseToCheck[i] >= "A" && phraseToCheck[i] <= "Z" ){
        alphabetic += phraseToCheck[i]
    }
}

for (let i= alphabetic.length -1; i >= 0; i--){
    check += alphabetic[i]
}


if ( alphabetic.toLowerCase() === check.toLowerCase()){
    console.log("it is a palindrome")
}
else {
    console.log("it is not a palindrome")
}

console.log(alphabetic.toLowerCase())
console.log(check.toLowerCase())