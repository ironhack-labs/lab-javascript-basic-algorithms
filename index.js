// Iteration 1: Names and Input
const hacker1 = "Juan"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Bernardo"
console.log(`The navigator name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log("Wow, you both have equally long names, XX characters!.")
}

// Iteration 3: Loops

let nameSeparated = ""

for (let i = 0; i < hacker1.length; i++) {

    nameSeparated += hacker1[i].toUpperCase()
    nameSeparated += " "
}
console.log(nameSeparated)

let nameInverted = ""

for (let i = hacker2.length - 1; i >= 0; i--) {

    nameInverted += hacker2[i]
    
}
console.log(nameInverted)

const hackerNames = [
    hacker1, 
    hacker2
]
hackerNames.sort()
      
    if (hackerNames[0] === hacker1) {
        console.log(`The driver's name goes first.`)
    } else if (hackerNames[0] === hacker2) {
        console.log(`Yo, the navigator goes first definitely`)
    } else if (hackerNames[0] === names[1]){
        console.log("What?! You both have the same name ")
    }

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla turpis, tincidunt in luctus sit amet, ullamcorper vitae mi. Pellentesque orci lacus, consequat vel dolor vel, vulputate convallis odio. Sed ultricies, ipsum a tristique congue, massa orci aliquam justo, sed aliquet risus lacus vitae massa. Pellentesque neque dolor, auctor a vulputate nec, efficitur a nisl. Nam maximus ligula in tellus luctus venenatis. Sed in dignissim quam. Vestibulum sed lorem nec magna tincidunt interdum. Sed ut finibus sapien, sit amet lacinia libero. Morbi dui arcu, suscipit vitae pretium ac, placerat ac lectus.

Pellentesque scelerisque risus non sem sodales ullamcorper. Mauris nec cursus elit, a dignissim turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In convallis molestie lacus at interdum. In nec tempus metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nibh justo, egestas sed euismod vel, tempor et metus. Suspendisse non bibendum tortor. Sed consequat turpis imperdiet ligula convallis, in suscipit nibh ornare. Nulla massa lectus, elementum ut aliquet id, dapibus dapibus augue. Aliquam ac luctus tortor. Morbi nec ipsum eu tortor sodales aliquet at eget purus. Aliquam a viverra nunc, in laoreet magna.

Nam nec accumsan augue. Praesent sit amet risus mollis, pharetra purus non, pharetra nibh. Cras purus nunc, blandit sit amet orci non, vehicula commodo sapien. Ut auctor sit amet ex non rhoncus. Morbi sit amet rutrum erat, eget pretium ligula. Donec non gravida est, at volutpat mi. Nunc sed sem sit amet nulla efficitur iaculis nec vel augue.`

const textWords = longText.split(" ")
console.log(`En este texto hay ${textWords.length} palabras`)

let count = 0
for (let i = 0; i < longText.length; i++) {
    if (longText[i] + longText[i+1] === "et") {
       count++ 
    }
    
}
console.log(`La palabra 'et' se ha repetido ${count} veces`)

// Bonus 2

let palindromeWord = "Amor, Roma"
let newWord = ""
for (let index = 0; index < palindromeWord.length; index++) {
    if(palindromeWord[i] !== " " ) { 
        newWord += palindromeWord[i]
    }


}


console.log(palindromeWord)
