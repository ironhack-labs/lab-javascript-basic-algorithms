// Iteration 1: Names and Input

const hacker1 = "Bob"

const hacker2 = "Paul"

console.log(`The driver's name is ${hacker1}`)

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length) {
console.log(` The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length<hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
    }
else {
console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!`)
} 

// Iteration 3: Loops

let nameCapital = ""

for (let i=0 ; i<hacker1.length; i++) {
    nameCapital += hacker1[i].toUpperCase() + " ";
}

console.log(nameCapital)

//let nameReversed = hacker2.split().reverse().join()

// console.log(nameReversed)

let nameReversed = ""

for (let j=hacker2.length-1; j>=0 ; j-- ) {
nameReversed += hacker2[j]
}

console.log(nameReversed)


let compare = hacker1.localeCompare(hacker2) 


     if (compare<0) {
    console.log(`The driver's name goes first.`)
    }

    else if (compare>0){
        console.log(`Yo, the navigator goes first, definitely.`)
        }

    else {
    console.log(`What?! You both have the same name?`)
    }

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas et libero porta rutrum. Quisque aliquet neque purus, nec scelerisque lorem malesuada quis. Etiam nec maximus purus, porta ultrices metus. Sed iaculis erat in nisi laoreet pellentesque. Nulla laoreet placerat tincidunt. Duis sollicitudin porttitor eleifend. Vestibulum luctus felis vel magna facilisis tincidunt.

Quisque blandit tempus venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel semper nulla. Vivamus orci justo, bibendum a ipsum et, iaculis dapibus massa. Nam bibendum condimentum tellus ut finibus. Sed sodales nibh eros, non consectetur tellus efficitur vel. Donec vehicula eu lectus a mattis. Pellentesque pretium tortor urna, interdum luctus dui egestas ac. Etiam cursus dolor id metus pulvinar sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras posuere massa eget elit pharetra facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sagittis, magna luctus volutpat tincidunt, libero magna eleifend nulla, et pretium est tellus sit amet metus.

Nulla id varius magna, eu suscipit felis. Nunc vel magna nec justo ullamcorper elementum. Maecenas felis purus, laoreet ut nisi et, eleifend rhoncus ligula. Nunc accumsan ac diam ornare scelerisque. In non iaculis magna. Duis accumsan tellus sit amet libero vestibulum hendrerit. Sed hendrerit sit amet nunc nec rhoncus. Nunc tempor scelerisque congue. Morbi placerat eget nisi eu congue. Nullam efficitur eleifend congue. Ut ut risus suscipit, luctus nibh cursus, consectetur nibh. Nam est ante, hendrerit vitae turpis ut, placerat pharetra mauris. Vestibulum in quam interdum, semper felis sed, lacinia nulla.`

let wordCount = longText.split(" ").length

console.log(wordCount)

let wordCountEt = longText.split("et").length-1

console.log(wordCountEt)

// Bonus 2

const phraseToCheck = "step on no pets"

let phrase1 = ""
let phrase2 = ""

for (let u = 0 ; u<phraseToCheck.length ; u++) {
    if (phraseToCheck[u] !==" ")
    phrase1 += phraseToCheck[u]
}

for (let k = phraseToCheck.length-1 ; k>=0 ; k--) {
    if (phraseToCheck[k] !==" ")
    phrase2 += phraseToCheck[k]
}

if (phrase1 === phrase2) {
console.log("It is a Palindrome")
}
else {
    console.log("It is not a Palindrome")
}

console.log(phrase1)
console.log (phrase2)