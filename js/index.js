
// iteration1

let hacker1 = "Ernesto"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Arseni"
console.log(`The navigator's name is ${hacker2}`)

//iteration 2

let result

function getLongestName(name1, name2) {



    if (name1.length > name2.length) {
        result = `The driver has the longest name, it has ${name1.length} characters.`
    }
    else if (name1.length < name2.length) {
        result = `It seems that the navigator has the longest name, it has ${name2.length} characters`
    }

    else {
        result = `Wow, you both have equally long names, ${name1.length} characters!`
    }

    return result
}


function printLongestName() {
    console.log(result)
}

getLongestName(hacker1, hacker2)
printLongestName()

//iteration 3

// 3.1
let newHacker1 = ""

for (i = 0; i < hacker1.length; i++) {

    if (i !== hacker1.length - 1) { newHacker1 += hacker1[i] + " " }


    else { newHacker1 += hacker1[i] }

    if (i === hacker1.length - 1) { console.log(newHacker1.toUpperCase()) }

}

//3.2  nos hemos quedado a +- 10min para sacarlo

let newHacker2

for (i = hacker2.length; i >= 0; i--) {

    if (i = hacker2.length) {
        newHacker2 = hacker2[i]
    }
    else {
        newHacker2 += hacker2[i]
    }


    if (i = 0) {
        console.log(newHacker2.toUpperCase())
    }
}


//3.3  por ahora genera lop infinito. nos hemos quedado a +- 10min para sacarlo

