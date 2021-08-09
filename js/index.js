// Iteration 1: Names and Input
const hacker1 = "Guille"
const hacker2 = "Patri"


console.log(`The driver's name is ${hacker1}`)
console.log(`The navigators's name is ${hacker2}`)


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}  else if(hacker1.length < hacker2.length ){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}   else{ console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)}


// Iteration 3: Loops

//3.1
let UpperCaseName = ""
for(const letra of hacker1){
    newName += letra.toUpperCase() + " "
}

console.log( UpperCaseName )

//3.2
let reverseName = ""
for( let i = hacker2.length -1; i >= 0; i--){
    reverseName += hacker2[i]
  }
console.log(reverseName)

//3.3

  if (hacker1.localeCompare(hacker2) === -1){
    console.log("the driver's name goes first")
  } else if(hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely.")
  } else {console.log("What?! You both have the same name?")
    
  }

  // BONUS 

  //bonus 1.1
  const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium ut ante a viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam varius justo felis, vel malesuada lacus malesuada a. Nam malesuada condimentum diam, id semper sem porta nec. Fusce eros sapien, faucibus ut sodales sed, facilisis ac metus. Nulla volutpat ac nulla nec volutpat. Curabitur rutrum purus blandit malesuada imperdiet. Curabitur ultricies molestie pellentesque. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vivamus luctus tempus leo nec mattis. Nunc congue vehicula laoreet. Nam suscipit orci augue, id volutpat elit mollis vel. Donec iaculis eros ac nisi maximus, nec pretium neque porta. Suspendisse lacinia nibh et arcu fringilla, ac eleifend mi tempus. Aliquam dapibus fermentum luctus. Praesent vulputate purus et odio euismod, sed dapibus nunc vulputate. Nulla finibus rhoncus massa id vehicula. Vestibulum tempus lectus nec lacus tempus commodo. Cras lacinia vitae leo in pulvinar. Curabitur auctor vulputate metus id auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut condimentum magna eu odio tempor pulvinar. Nulla mollis luctus quam nec pellentesque. Cras lobortis nisi ipsum, in euismod massa rutrum a. Nunc ac vehicula massa."
//1.1.1

let wordCount = 1
for(palabras of paragraph){
  if (palabras === " "){
    count++
  }
}

console.log(wordCount)

//1.1.2

let etWordCount = 0

for (let j = 0; j < paragraph.length; j++){
  if(paragraph[j] === " " && paragraph[j+1] === "e" && paragraph[j+2] === "t" && (paragraph[j+ 3] === " "|| paragraph[j+ 3] === ".")){
 etWordCount++
    }
}

console.log(etWordCount)





//bonus 1.2

const phraseToCheck = "step on no pets"

let reversedPhrase = ""
let matchCount = 0

for(let a = phraseToCheck.length -1; a >= 0 ; a--){
  reversedPhrase += phraseToCheck[a]
  
}

for(let b = 0; b < phraseToCheck.length; b++){
  for(let c = 0; c < reversedPhrase.length; c++){
    if(phraseToCheck[b] === reversedPhrase[c]){
       
      matchCount += 1 
      break

    }
  }
}console.log(matchCount)


if ( matchCount === phraseToCheck.length && matchCount === reversedPhrase.length){
  console.log( "the word is palindrome")
}