// Iteration 1: Names and Input

var hacker1 = "Alan";
console.log(`The driver's name is ${hacker1}`)

var hacker2 = "Alice"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops []

console.log(hacker1.toUpperCase().split('').join(' '))

var reverseName = ""
for (var i=hacker2.length-1; i>=0; i--){
    var lettersHacker2 = hacker2[i]
    reverseName = reverseName + lettersHacker2
}
console.log(reverseName)

for (i=0, j=0; (i<hacker1.length) && (j<hacker2.length); i++, j++){
    var letterHacker1 = hacker1[i];
    var letterHacker2 = hacker2[i];
    if (letterHacker1 > letterHacker2) {
        console.log("Yo, the navigator goes first definitely")
        break;
    }
    else if (letterHacker1 < letterHacker2) {
        console.log("The driver's name goes first")
        break;
    }
    else {
        console.log("What?! You both have the same name?")
    }
}

