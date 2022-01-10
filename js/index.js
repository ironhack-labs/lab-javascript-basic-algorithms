// Iteration 1: Names and Input

console.log("I'm ready");

let hacker1 = "Luis"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Karina"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
    }
    else if (hacker1.length < hacker2.length) {
      console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
    }
    else if (hacker1.length == hacker2.length) {
      console.log ('Wow, you both have equally long names, ${hacker1.length} characters')
    }


// Iteration 3: Loops


// 3.1 

let inCapitals = ""
for (let i=0; i < hacker1.length; i++) {
  inCapitals += `${hacker1[i].toUpperCase()} `
}
console.log(inCapitals)

// 3.2

let reverseString = ""
for (let i=hacker1.length-1; i>=0; i--) {
  reverseString += hacker1[i]
}
console.log(reverseString)

// 3.3

if (`${hacker1}`>`${hacker2}`) {
    console.log (`The driver's name goes first.`)
}
else if (`${hacker1}`<`${hacker2}`) {
    console.log (`Yo, the navigator goes first definitely.`)
}
else if (`${hacker1}`==`${hacker2}`) {
    console.log ('What?! You both have the same name?')
}

  // shouldn't it be uppercase to uppercase? or lowercase to lowercase?
