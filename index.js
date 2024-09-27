// Iteration 1: Names and Input
let hacker1 = "Angel"
let hacker2 = "Carlos"
let resultado = ""
let drivers = [`${hacker2}`, `${hacker1}`]
let resultado2 = ""
console.log(`The driver\'s name is ${hacker1} `)
console.log(`The navigator\'s name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it ${hacker1.length} characters!`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seem that the navigator has the longest name, it has ${hacker2.length} characters!`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// Iteration 3: Loops





for (let i = 0; i < hacker1.length; i++) {

    resultado += hacker1[i] + " "
}
console.log(resultado.toUpperCase())

for (let j = hacker1.length - 1; j >= 0; j--) {
    resultado2 += hacker1[j] + ""
}

console.log(resultado2)
console.log(drivers.sort())