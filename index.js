// Iteration 1: Names and Input



const hacker1 = "Nuria"
const hacker2 = "Carlos"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is  ${hacker2}`)


// Iteration 2: Conditionals
// Comparamos la longitud de los nombres


function compareNamesLong(user1, user2) {

    if (user1.length > user2.length) {
        console.log (`The driver has the longest name, it has ${user1.length} characters.`)

    } else if (user2.length > user1.length) {
        console.log (`It seems that the navigator has the longest name, it has ${user2.length} characters.`)
    
    } else {
        console.log(`Wow, you both have equally long names, ${user1} characters!.`)
    }
}

compareNamesLong(hacker1, hacker2)

// Iteration 3: Loops 
// imprimimos el nombre del conductor por caracteres en mayúsculas y con espacios

function printNameUpperCase(driver) {
    let driverUpperCase = ''

    for (let i = 0; i < driver.length; i++) {

        driverUpperCase += driver[i].toUpperCase()
        
        if (i < driver.length - 1) {
            driverUpperCase += ' '
        }
    }
    return driverUpperCase
}

console.log(printNameUpperCase(hacker1))

// Le damos la vuelva al nombre del navigator

function nameInReverse(navigator) {
    let navigatorReverse = ''

    for (let i = navigator.length - 1; i >= 0; i--) {

        navigatorReverse += navigator[i]
        
    }
    return navigatorReverse
}

console.log(nameInReverse(hacker2))

// Hacemos el lexicographic order ni puta idea de lo que es, por orden alfabetico vamos.

function sameName(driver, navigator) {
    
    const comparisonResult = driver.toUpperCase().localeCompare(navigator.toUpperCase());

    if (comparisonResult < 0) {
        console.log("The driver's name goes first.");
    } else if (comparisonResult > 0) {
        console.log("Yo, the navigator goes first, definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }
}

sameName(hacker1, hacker2)


// BONUS

const longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

