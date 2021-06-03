// Iteration 1: Names and Input
driver = 'Enrique'
navegador = 'Kike'

console.log(`hola ${driver} y ${navegador}`)

// Iteration 2: Conditionals

if (driver.length < navegador.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`)

} else if (driver.length > navegador.length) {
    console.log(`It seems that the navegador has the longest name, it has ${driver.length} characters`)
} else {

    console.log(`Wow, you both have equally long names, characters!`)
}


// Iteration 3: LoopsLoops
for (let i = 0; i < driver.length; i++) {
    console.log(`${driver.charAt(i)}`)
}

for (let i = driver.length - 1; i >= 0; i--) {
    console.log(`${driver.charAt(i)}`)
}




