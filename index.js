// Iteration 1: Names and Input

const hacker1 = "Caro"
const hacker2Sentence =(`The driver's name is ${hacker1}`)

console.log(hacker2Sentence)

const hacker2 = "Ali"
 console.log("The navigator's name is", hacker2)



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log ("The driver has the longest name, it has", hacker1.length, "characters.")
} else if (hacker1.length < hacker2.length) {
    console.log ("It seems that the navigator has the longest name, it has", hacker2.length, "characters.")
    } else if (hacker1.length === hacker2.length) {
        console.log ("Wow, you both have equally long names,", hacker2.length, "characters!") 
    }

// Iteration 3: Loops

let finalName= ""

for (let i = 0; i < hacker1.length  ; i++) {
    finalName += hacker1[i].toUpperCase() + " "
   
}
console.log (finalName) 

let finalNameReversed = ""
for (let i=hacker2.length -1; i >= 0; i--){


    finalNameReversed += hacker2[i]

}
console.log (finalNameReversed) 

if (hacker1[0] < hacker2[0]) {
console.log ("The driver's name goes first.")
} if (hacker1[0] > hacker2[0]) {
    console.log ("Yo, the navigator goes first, definitely.")
} if (hacker1.slice(0) === hacker2.slice(0)) {
    console.log ("What?! You both have the same name?")
}


//bonus 1 //

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin orci eget dolor tincidunt mattis non eget leo. Mauris placerat erat tempor justo lacinia, quis vehicula ante bibendum. Vestibulum quis elit eget lorem semper eleifend nec non erat. Vivamus rhoncus ultrices leo ac venenatis. Praesent non metus augue. Praesent gravida, nibh quis mollis mollis, libero turpis pharetra sem, eget viverra ipsum mi blandit ligula. Maecenas quis justo luctus turpis rhoncus laoreet id et ligula. Morbi orci nunc, placerat a ex sit amet, suscipit pulvinar quam. Duis odio nisl, pulvinar quis porttitor ac, posuere volutpat ligula. Duis ornare arcu ut massa lacinia placerat. Integer pulvinar leo vel lacus suscipit semper. Nullam facilisis sem ac pellentesque aliquam. Fusce lectus mi, fringilla non elit sed, pretium tincidunt ipsum.

Cras aliquam purus nibh, sit amet interdum justo imperdiet tempus. Aliquam sodales euismod imperdiet. Sed gravida finibus tristique. Duis sodales purus sed lacinia convallis. Vestibulum sollicitudin augue id magna vestibulum euismod. Nunc id mauris rhoncus, efficitur sapien nec, aliquam enim. Quisque nulla risus, hendrerit in ligula eu, commodo pulvinar turpis. Vivamus turpis ligula, molestie ut interdum non, tristique id risus. Nunc varius lobortis sem, nec tincidunt purus malesuada sagittis. Sed varius lacus nec posuere molestie.

Ut placerat odio vel interdum fermentum. Vestibulum tristique porttitor erat non feugiat. Etiam convallis nibh id placerat porta. Duis ornare libero magna, at pretium urna dapibus a. Curabitur elementum tristique turpis, id aliquam lorem scelerisque quis. Sed posuere enim sit amet enim egestas dapibus. Donec tincidunt viverra imperdiet. Aenean aliquet lacus id interdum consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`



let longTextwordcount = 0


for (let i = 0; i < longText.length ; i++) {

    if (longText[i] === " ") {
        longTextwordcount++
    }

}

console.log(longTextwordcount)





//bonus 2

const phraseToCheck = "step on no pets"

let reversed = ""

for (let i=phraseToCheck.length -1; i >= 0; i--){


    reversed += phraseToCheck[i]     
}

if (phraseToCheck == reversed) {
    console.log (phraseToCheck, "is equal to", reversed, "so it's a palindrome")
}

