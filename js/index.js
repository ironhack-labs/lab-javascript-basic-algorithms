// Iteration 1: Names and Input
let hacker1 = "Jaime"
console.log(`The driver\'s name is ${hacker1}`)

let hacker2 = "Eva"
console.log(`The navigator\'s name is ${hacker2}`)

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.
`)
} else if(hacker2.length > hacker1.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.
`)
}else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 2: Conditionals

let spaceAndCapitals = ""
let reverse = ""

for (let i=0; i < hacker1.length; i++){
  spaceAndCapitals=spaceAndCapitals + hacker1.charAt(i)+` `
}
console.log(spaceAndCapitals)

console.log(spaceAndCapitals.toUpperCase())


for ( let i=hacker2.length; i>=0; i--){
reverse=reverse +hacker2.charAt(i)
}
console.log(reverse)

// Iteration 3: Loops

if (hacker1.localeCompare(hacker2)=== 1){
  console.log("The driver's name goes first")
} else if (hacker2.localeCompare(hacker1)=== 1){
  console.log("The navigator goes first definitely")
} else{
  console.log("What?! You both have the same name?")
}




// BONUS 1

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Et etiam ut commodo turpis. Mauris ac tuum dignissim. Morbi purus mi, molestie a est sit.

Aliquam porta laoreet rutrum. Nunc ut turpis diam. Etiam varius purus non arcu efficitur rhoncus. Maecenas .

Vivamus sit amet orci fringilla, efficitur lacus sed, suscipit ligula. Integer fermentum dictum tellus vel pulvinar.Donec in faucibus erat, a tincidunt nisi.`

const words = text.split(' ')
console.log(words.length)

const wordsEt = text.split('et')
console.log(wordsEt.length)



