// Iteration 1: Names and Input

const hacker1 = 'Thaís';

console.log(`The driver's name is ${hacker1}.`)

const hacker2 = 'Tahaís';

console.log(`The navigator's name is ${hacker2}.`)



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name: it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name: it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, with ${hacker1.length} characters.`)
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '))

console.log(hacker2.split('').reverse().join(''))

const whitchNameFirst = (name1, name2) => {
    let shortestName = name1.length <= name2.length ? name1 : name2;

    let firstInAlphabet = shortestName;
    
    for (let i = 0; i < shortestName.length; i++) {
        if (name1[i] !== name2[i]) {
            if (name1[i].charCodeAt() < name2[i].charCodeAt()) {
                firstInAlphabet = name1;
                break;
            } else {
                firstInAlphabet = name2;
                break;
            }
        } else {
            continue;
        }        
    }

    return firstInAlphabet;
}

if (hacker1 === hacker2) {
    console.log('What?! You both have the same name?')
} else if (whitchNameFirst(hacker1, hacker2) === hacker1) {
    console.log(`The driver's name goes first.`)
} else {
    console.log(`Yo, the navigator goes first definitely.`)
}

//Bonus 1

const latinText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non blandit dui. Suspendisse et nulla rhoncus, ultrices nunc molestie, tincidunt mi. Etiam euismod tellus vitae est vestibulum, nec lacinia tellus fermentum. Donec cursus porttitor sapien, quis tempus mauris elementum a. Fusce ullamcorper leo at dictum ultrices. Mauris metus nulla, ultrices sit amet hendrerit eget, fringilla ac nisl. Sed sit amet volutpat lectus. Nunc elit nulla, condimentum ut augue eu, cursus laoreet lectus. Mauris ac tempus elit, vitae consequat risus. Ut vehicula mauris ex, et sollicitudin mi porttitor eget. In hac habitasse platea dictumst. Nullam nec arcu a ligula tempus semper.

Pellentesque vestibulum dignissim venenatis. Donec congue quis purus quis ultrices. Fusce risus ex, auctor ac pellentesque ut, rutrum at nibh. In et urna diam. Quisque eu mi tincidunt, consequat odio nec, gravida tellus. Praesent eu sem ligula. Vestibulum sit amet mi est. Vestibulum vel leo risus. Fusce neque urna, dictum at molestie nec, mollis non libero.

Integer fringilla, mauris in mattis volutpat, urna lacus tincidunt ligula, eget feugiat augue arcu non sem. Cras vel finibus est, at luctus neque. Curabitur lacus arcu, gravida non aliquam gravida, feugiat a lacus. Sed ut magna nunc. Nullam blandit, magna faucibus varius placerat, eros lorem auctor est, nec sodales arcu felis et nibh. Praesent quis feugiat nisl, a auctor lectus. Morbi malesuada eget mauris sit amet viverra. Sed dapibus convallis massa, sit amet consequat lacus semper eget. Nunc consequat, augue et convallis lacinia, justo massa semper eros, interdum pulvinar nisi nisl et ipsum. Proin tristique eget augue dictum cursus. Nullam tincidunt sodales libero, vulputate auctor mauris tempor eget. In varius tortor orci, a tempor purus interdum non. Sed eu nisi varius, maximus erat sit amet, finibus eros.`

const arrayOfLatinText = latinText.replace(/\n{1,}/g, ' ').split(' ')

console.log(arrayOfLatinText.length)

const howManyOcurrences = (arrayOfText, wordRegex) => {
    let ocurrences = 0;

    for (let i = 0; i < arrayOfText.length; i++) {
        if (wordRegex.test(arrayOfText[i])) {
            ocurrences++;
        }
    }

    return ocurrences;
}

console.log(howManyOcurrences(arrayOfLatinText, /^[Ee]t[,.]*$/));

//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!"

const checkIfPalindrome = phrase => {
    let treatedPhrase = [];
    let regex = /[^A-z]/;

    for (let i = 0; i < phrase.length; i++) {
        if (regex.test(phrase[i])) {
            continue;
        } else {
            treatedPhrase.push(phrase[i].toLowerCase())
        }
    }

    if (treatedPhrase.join() === treatedPhrase.reverse().join()) {        
        return 'We have a palindrome!'
    } else {
        return 'The phrase is not a palindrome.'
    }


}

console.log(checkIfPalindrome(phraseToCheck))

//Bonus 2 according to given instructions - checking for a palindrome withou the reverse() method or functions

// let treatedPhrase = []
// let reversedPhrase = [];
// let regex = /[^A-z]/

// for (let i = 0; i < phraseToCheck.length; i++) {
//     if (regex.test(phraseToCheck[i])) {
//         continue;
//     } else {
//         treatedPhrase.push(phraseToCheck[i].toLowerCase())
//         reversedPhrase.unshift(phraseToCheck[i].toLowerCase());
//     }
// }

// console.log(reversedPhrase, treatedPhrase)

// for (let i = 0; i < reversedPhrase.length; i++) {
//    if (reversedPhrase[i] === treatedPhrase[i] && i === reversedPhrase.length - 1) {
//        console.log('We have a palindrome!');
//    } else if (reversedPhrase[i] === treatedPhrase[i]) {
//        continue;
//    } else {
//        console.log('The phrase is not a palindrome.');
//        break;
//    }
// }