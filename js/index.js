// Iteration 1: Names and Input
let hacker1 = 'Inés';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Jorge';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
function largestName(name1, name2) {
    if (name1.length > name2.length) {
        return `The driver has the longest name, it has ${name1.length} characters.`
    } else if (name2.length > name1.length) {
        return `It seems that the navigator has the longest name, it has ${name2.length} characters.`
    } else {
        return `Wow, you both have equally long names, ${name1.length} characters!`
    }
}

console.log(largestName(hacker1, hacker2))

// Iteration 3: Loops
function capitalSeparated(name) {

    let capitalizedName = name.toUpperCase();
    let finalName = ""

    for (let i = 0; i < capitalizedName.length; i++) {
        finalName += capitalizedName[i];
        finalName += " ";
    }

    return finalName
}

console.log(capitalSeparated(hacker1))

// --------------

function reversedName(name) {
    let reversedName = "";

    for (let i = name.length - 1; i >= 0; i--) {
        reversedName += name[i]
    }

    return reversedName
}

console.log(reversedName(hacker2))

// ---------------

function lexOrderName(name1, name2) {

    if (name1 < name2) {
        return `Yo, the navigator goes first definitely.`
    } else if (name1 > name2) {
        return `The driver's name goes first.`
    } else {
        return `What?! You both have the same name?`
    }

}

console.log(lexOrderName("jorge", "jorge"))
