const hacker1 = 'Irma'
const hacker2 = 'Adrián';

// Iteration 1: Names and Input
console.log(`The driver´s name is ${hacker1}`);
console.log(`The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}
// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
function getAllCharacters(string) {
    let characters = ''
    for (let index = 0; index < string.length; index++) {
        const characterFounded = string.charAt(index).toUpperCase()
        if (index + 1 === string.length) {
            characters += `${characterFounded}`
        } else {
            characters += `${characterFounded} `
        }
    }
    return characters
}

getAllCharacters(hacker1)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
function getCharacterReverse(character) {
    let reversedName = ''
    for (let i = character.length - 1; i >= 0; i--) {
        reversedName += character.charAt(i)
    }
    return reversedName
}

getCharacterReverse(hacker1);

// 3.3 Depending on the lexicographic order of the strings, print:
if (hacker2 > hacker1) {
    console.log(`The driver's ${hacker2} goes first.`)
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator ${hacker1} first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

// Bonus Time
// Bonus 1
const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget elit eu dolor pharetra elementum. Suspendisse magna erat, ultricies non urna eu, sodales molestie enim. Nulla id est venenatis, sollicitudin lorem quis, hendrerit nisi. Sed vestibulum nibh rhoncus est pharetra, sit amet semper magna lobortis. Fusce felis leo, luctus nec neque nec, bibendum ultrices augue. Donec ullamcorper nibh ut luctus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dolor leo, euismod sed leo ut, semper vestibulum felis. Sed tempor, risus eu iaculis consectetur, est ex lacinia mi, id lobortis orci magna sed neque. Sed placerat iaculis scelerisque. Duis fringilla eros sit amet sollicitudin ultrices.\nQuisque eget arcu sed dui sollicitudin tempus. Sed eu leo eget nisi pulvinar scelerisque. Etiam sodales dolor non dolor finibus vehicula et nec ex. Nulla vestibulum metus pellentesque facilisis commodo. Duis maximus velit tincidunt lorem eleifend, et facilisis felis pretium. Integer quis vulputate eros, eget tempor purus. Sed dui magna, euismod sit amet blandit a, facilisis non augue. Etiam ullamcorper pharetra erat, eu efficitur sem viverra ut. Sed vestibulum maximus aliquet. Mauris semper ipsum sit amet nibh placerat consequat. Pellentesque sollicitudin lacinia felis vel volutpat. Proin facilisis, quam a venenatis blandit, elit nulla volutpat enim, vel rutrum est nibh sed quam. Morbi tempus ante ut eros venenatis finibus eget in tellus. Mauris ex arcu, tristique at convallis ut, tempus nec lectus. Sed vehicula est sed lorem consequat, in tincidunt dolor lobortis. Cras malesuada a felis quis dictum.\nFusce elementum porta nibh, quis feugiat est ullamcorper a. Phasellus vitae euismod elit. Sed sit amet lectus sollicitudin, ultrices odio et, fringilla nibh. Aliquam eu elit aliquam arcu mollis facilisis. Donec risus urna, tempor at finibus nec, laoreet vehicula augue. Vivamus ut odio tristique ex cursus mattis non eu magna. Cras commodo vitae risus at fermentum. Nullam imperdiet sit amet tortor ac tincidunt.'

function getAllWords(string) {
    let wordCount = 0;
    const totalLineBreaks = paragraph.split('\n').length
    for (let index = 0; index <= string.length; index++) {
        const characterFounded = string.charAt(index)
        if (characterFounded === ' ') {
            wordCount++
        }
    }
    const totalWords = totalLineBreaks + wordCount
    return totalWords
}

getAllWords(paragraph)

// Alternative method 
const searchAllEnters = paragraph.match(/\n/igm).length
const searchAllSpaces = paragraph.split(' ').length
const searchTotalWords = searchAllEnters + searchAllSpaces
console.log(`Total words count is: ${searchTotalWords}`)

// Alternative method more advanced
const searchWordCaseSenitive = paragraph.match(/et /g).length
console.log(`Total word 'et' founded is: ${searchWordCaseSenitive}`)

// Bonus 2
const phraseToCheck = 'A man, a plan, a canal, Panama!'