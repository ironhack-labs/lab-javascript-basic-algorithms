// Iteration 1: Names and Input
let hacker1 = "javier"

console.log(`the driver's name is ${hacker1}`)

let hacker2 = "carolina"

console.log(`the navigator's name is ${hacker2}`)



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`the driver has the longest name, it has ${hacker1.length} characters`)

}

else if (hacker2.length > hacker1.length) {

    console.log(`it seems that the navigators has the longest name, it has ${hacker2.length} characters`)
}

else if (hacker2.length === hacker1.length) {

    console.log("Wow, you both have equally long names, hacker1.length characters!)
}


// Iteration 3: Loops

let uppercase = hacker1.toUpperCase()





console.log(uppercase.split(""))

console.log(uppercase.substring(0, 1) + " " + uppercase.substring(1, 2) + " " + uppercase.substring(2, 3) + " " + uppercase.substring(3, 4) + " " + uppercase.substring(4, 5) + " " + uppercase.substring(5, 6))


for (let i = 0; i < uppercase.length; i++) {

    let j = i + 1

    console.log(uppercase.substring(i, j))


}









if ("Carolina".localeCompare("Javier") < 0) {

    console.log('Yo, the navigator goes first definitely')
}

if ("Carolina".localeCompare("Javier") > 0) {

    console.log("the driver's name goes first")
}


if ("Carolina".localeCompare("Javier") = 0) {

    console.log('What!! you both have the same name?')
}