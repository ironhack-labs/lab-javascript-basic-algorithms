
// Iteration 1: Names and Input
let hacker1 = `David`
console.log(`The driver's name is ${hacker1}`)
let hacker2 = `Jason`
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let driver = hacker1.length
let navigator = hacker2.length

if (driver > navigator){
    console.log(`The driver has the longest name, it has ${driver} characters`)
}else if(navigator > driver){
    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${driver} characters!`)
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals
hacker1Capital = hacker1.toUpperCase()
let nameSpaces = ''

for (const letter of hacker1Capital){
    nameSpaces += letter + " "
}
console.log(nameSpaces)

//3.2 Print all the characters of the navigator's name, in reverse order. 
let reversed = ""
for (let i = navigator - 1; i >= 0; i--){         
     reversed += hacker2[i];  
   }     
console.log(reversed)

//3.3 Lexicographic order

let namesOrder = hacker2.localeCompare(hacker1)

if (namesOrder === 1){
  console.log(`The driver's name goes first.`)
  }else if(namesOrder === -1){
    console.log(`Yo, the navigator goes first definitely.`)
  }else{
    console.log(`What?! You both have the same name?`)
  }

//BONUS 1

let loremIpsum = `Nulla rhoncus mi sed blandit mollis. Duis ac massa ut sapien rutrum vulputate non in tellus. Cras nec finibus mi. Pellentesque a sem erat. Praesent tincidunt laoreet lacus, gravida imperdiet lacus volutpat id. Maecenas a bibendum metus. Fusce egestas, lacus vitae sodales tincidunt, lacus odio sollicitudin neque, at mattis est nunc in neque. Cras et blandit lorem, eget cursus risus. In hac habitasse platea dictumst. Nulla facilisi.

Suspendisse potenti. Duis volutpat pulvinar tellus, vel rhoncus ex commodo et. Donec eleifend, mi quis commodo feugiat, turpis erat rhoncus mi, eget maximus dolor nibh eu mauris. Suspendisse tempor et arcu vitae aliquam. Donec orci neque, tincidunt id turpis a, gravida rhoncus nulla. Praesent auctor nisl erat, vel blandit sem sagittis tincidunt. Duis vulputate dui sed nunc pretium hendrerit. Fusce quam odio, porta nec sodales quis, consequat eget ligula. Nam pellentesque, ligula eget dignissim sollicitudin, diam elit ullamcorper ex, ut laoreet magna enim nec ex. Vestibulum libero lectus, condimentum id erat eu, imperdiet viverra turpis. Fusce vel aliquam erat, eu tempus nulla. Mauris mi sem, iaculis in libero nec, sollicitudin blandit risus.

Vivamus elit risus, consequat at nulla eu, molestie varius lacus. Nullam eu interdum ipsum, eget egestas tortor. Praesent mattis facilisis consectetur. In laoreet arcu quis blandit blandit. Aenean quis egestas ante. Vivamus semper vestibulum vehicula. Nulla risus enim, molestie sit amet faucibus eu, sagittis vel nisl. Donec sapien nisi, porttitor et nunc quis, pellentesque semper enim. Nam rutrum, tortor id accumsan elementum, libero est porttitor purus, a tempor enim purus nec justo. In auctor vulputate enim, in condimentum metus tincidunt in. Ut bibendum fermentum enim nec pretium. Cras sit amet libero rhoncus, maximus mauris nec, tincidunt ligula. Mauris tristique in arcu ac cursus.`

let countWords = loremIpsum.split(" ", loremIpsum.length); //Hay un error y es que faltan dos palabras que son las que comienzan el segundo y tercer parrafo, ya que no estan predecidas por espacio.
let countEt = loremIpsum.split(" et ", loremIpsum.length);

console.log(`There is ${countWords.length} words and the word "et" appears ${countEt.length} times in the text.`)


//BONUS 2

function phraseToCheck(str){

    // Quitar caracteres especiales y mayusculas -- introducir en nueva variable 
    
  let cleanPhrase = ''
  
  for (const letter of str){
      if (letter === "," || letter === " " || letter === "!" || letter === "?" || letter === "'"){
        continue;
      }else{
        cleanPhrase += letter;
      }
    cleanPhrase = cleanPhrase.toLowerCase()
  }
    
  //   // Revertir la nueva variable y compararlas
  let reversed = ""
  for (let i = cleanPhrase.length - 1; i >= 0; i--){         
       reversed += cleanPhrase[i];  
     }     
    
  if (reversed === cleanPhrase){
    console.log(`${str} is a Palindrome.`)
  }else{
    console.log(`${str} is not a Palindrome.`)
  }
  }
  phraseToCheck('race car')