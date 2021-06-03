//Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Alexander'

//1.2 Print `"The driver's name is XXXX"`.
console.log(`The drivers name is ${hacker1}.`)

//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Marino'

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator name is ${hacker2}.`)




//Iteration 2: Conditionals

//- The driver has the longest name, it has XX characters.
if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
//- It seems that the navigator has the longest name, it has XX characters.
else if (hacker2.length > hacker1.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
//- Wow, you both have equally long names, XX characters!.
else {

    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}




//Iteration 3: Loops


//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
capital1 = hacker1.toUpperCase()

blankSpace = " "

let upperCaseName = ""

for (let i = 0; i < capital1.length; i++) {
    upperCaseName += capital1[i] + blankSpace
}
console.log(upperCaseName)

//Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reverseName = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i]
}
console.log(reverseName)


//3.3 Depending on the lexicographic order of the strings, print:


hacker1 = hacker1.toUpperCase()
hacker2 = hacker2.toUpperCase()

let split1 = Array.from(hacker1)
let split2 = Array.from(hacker2)

if (hacker1 === hacker2) {
    console.log('What?! You both have the same name?')
}

else {
    let j = 0

    if (split1.length > split2.legth) {
        moreLength = split1.length
    }
    else {
        moreLength = split2.length
    }

    for (let i = 0; i < moreLength && split2.length; i++) {
        if (split1[i] < split2[j]) {

            console.log("The driver's name goes first.");
            break
        }
        else if (split1[i] != split2[j]) {
            console.log("Yo, the navigator goes first definitely.");
            break
        }
        else if (split1[i] === split2[j]) {
        }
        else {
            console.log("Error inesperado")
            break

        }
        j++;
    }

}