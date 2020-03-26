// ITERATION 1 //

let hacker1 = "FRAN"

let hacker2 = "Enrique"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// ITERATION 2 //

let driverName = hacker1.length
let navigatorName = hacker2.length


if (driverName > navigatorName) {

    console.log(`The driver has the longest name, it has ${driverName} characters`)

} else if (driverName === navigatorName) {

    console.log(`Wow, you both have equally long names, ${navigatorName} characters!`)

} else {

    console.log(`It seems that the navigator has the longest name, it has ${navigatorName} characters`)

}

// ITERATION 3 //

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N" //


let arrayOfLetters = [];

for (let i = 0; i < driverName; i++) {

    let nameLetters = hacker1.substr(i, 1)

    let capitalLetters = nameLetters.toUpperCase()

    arrayOfLetters.push(capitalLetters)

}

let finalText = " ";

arrayOfLetters.forEach(function (elm) {

    let capitalLetters = elm.toUpperCase()
    finalText += capitalLetters + " "

})

console.log(finalText)


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ" //

for (let i = navigatorName; i > 0; i--) {
    let nameLetters = hacker2.substr(i, 1);
    console.log(nameLetters)
}