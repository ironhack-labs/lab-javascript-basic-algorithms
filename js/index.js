// Iteration 1: Names and Input

let hacker1 = "Andrea Lopez"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Josemaria Perez"
console.log(`The navigator's name is ${hacker2}`)
let hackerlength = hacker1.length
let hacker2length = hacker2.length


// Iteration 2: Conditionals

if (hackerlength > hacker2length) {
    console.log(`The driver has the longest name, it has ${hacker1.lenght} characters.`)
}


else if (hackerlength == hacker2length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2length} characters.`)
}


// Iteration 3: Loops

hacker = hacker2
space = hacker.split("").toString().replace(/,/g, " ")
console.log(space.toUpperCase())


function reverseString(s) {
    return s.split("").reverse().join("");
}
console.log(reverseString(hacker))


let sortArray = [hacker1, hacker2]
let sortArray2 = sortArray.sort()

if (sortArray2[0] == hacker1) {
    console.log("The driver's name goes first.")
}

else if (sortArray2[0] == hacker2) {
    console.log("Yo, the navigator goes first definitely.")
}

else {
    console.log("What?! You both have the same name?")
}