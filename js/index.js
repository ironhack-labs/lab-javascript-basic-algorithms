// Iteration 1

let hacker1 = "Miguel"
console.log(`The drivers name is ${hacker1}`)
let hacker2 = "Martin Giura"
console.log(`The drivers name is ${hacker2}`)

//Iteration 2

//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

function longerName(driver, navigator) { //definimos 2 parametros driver y navigator

    const hacker1 = driver;
    const hacker2 = navigator; // definimos 2 variables const y las inizializamos

    // Si hacker1 tiene mas caracteres que hacker2, por ende el driver tiene el nombre mas largo

    if (hacker1.length > hacker2.length)
        console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

    // Si hacker1 es igual que hacker2, por ende tienen misma cantidad de caracteres

    if (hacker1.length === hacker2.length) {
        console.log(`Wow, you both have equally long names, ${hacker2.length}  characters!.`)
    }

    // Si hacker2 tiene mas caracteres que hacker1, por ende el navegador tiene el nombre mas largo

    if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
}
// Mostrar en console.log la funcion longerName con datos de Miguel y Martin

console.log(longerName("Miguel", "Martin")) // Miguel y Martin son los argumentos



// Iteration 3: Loops