// Iteration 1: Names and Input

let driver = "Fer"
console.log(`The driver's name is ${driver}`)
let navegador= "Pedro"
console.log(`The navigator's name is ${navegador}`)

// Iteration 2: Conditionals
if (driver.length>navegador.length){
    console.log(`The driver has the longest name its has ${driver.length} characters`)
}
else if (navegador.length>driver.length){
    console.log(`The navegator's has the longest name its has ${navegador.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${navegador.length} characters!.`)
}

// Iteration 3: Loops

let upper = driver.toUpperCase()
    let space = ""
    for(let letters of upper) {
        space += `${letters} `
    }
    console.log(space)

let reverse = ""
    for(i = driver.length; i >= 0 ; i--) {
    reverse += `${driver.charAt(i)}`
    }
    console.log(reverse)

if (driver.localeCompare(navigator)==1){
    console.log("driver is first")
}
else{
    console.log("navigator is first")
}
    

