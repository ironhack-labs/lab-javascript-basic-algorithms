console.log('I`m ready! \n')
// Iteration 1: Names and Input

console.log('====ITERATION 1=====\n')

const driversName = 'Pedro'

console.log("The driver's name is " + driversName+"." )

const navigatorsName = 'Paula'

console.log(`The navigator's name is ${navigatorsName}`)

// Iteration 2: Conditionals
console.log('\n====ITERATION 2=====\n')

if (driversName.length > navigatorsName.length) {
    console.log(`The driver's name has the longest name, it has ${driversName.length}.`)
} else if (driversName.length < navigatorsName.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorsName.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${driversName.length} characters!`)
}

// Iteration 3: Loops
console.log('\n====ITERATION 3=====\n')

let separatedDriversName = ''

for (let i = 0; i < driversName.length; i++){
    let spaceOrNothing = " "
    if(i==driversName.length-1){
        spaceOrNothing = ""
    }
    separatedDriversName += driversName[i].toLocaleUpperCase() + spaceOrNothing
}

console.log(separatedDriversName)

let reversedNavigatorsName = ''

for(i=navigatorsName.length-1; i>=0; i--){
    reversedNavigatorsName += navigatorsName[i]
}

console.log (reversedNavigatorsName)

if (driversName > navigatorsName) {
    console.log(`The driver's name goes first.`)
} else if (driversName < navigatorsName) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

console.log('\n====BONUS 1=====\n')

const loremIpsumParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin convallis risus a pellentesque. Aliquam magna mi, lobortis facilisis sagittis quis, elementum eu sem. Nunc et risus dui. Curabitur sit amet nulla iaculis, posuere quam et, gravida risus. Sed sagittis, felis nec malesuada pellentesque, tortor dui tristique turpis, in rhoncus elit enim sit amet elit. Morbi finibus leo a condimentum tempor. Fusce maximus erat sed nunc convallis sodales sed eu tortor. Sed non nunc sem. Morbi ut ultrices nulla.

Aliquam sem est, lacinia a felis vel, ullamcorper fringilla dui. Quisque dui turpis, bibendum et vehicula eget, cursus sed nibh. Aenean dictum laoreet blandit. Donec ultrices ex felis, feugiat porta leo rhoncus nec. Nullam convallis facilisis odio ut posuere. Sed pellentesque fringilla elit, id interdum nibh tristique sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non dui mollis, consequat nisl id, ultricies risus. Phasellus tristique odio diam, sit amet ultricies ex consequat sodales.

Proin eu luctus neque, condimentum cursus nisi. Aliquam imperdiet, velit mollis suscipit ullamcorper, enim urna feugiat nibh, a consequat lorem sapien a mauris. Sed vitae euismod diam, a tincidunt massa. Cras faucibus leo commodo odio dapibus congue. Donec aliquam lorem nunc, vel accumsan ipsum dapibus sed. Ut congue ante ipsum, id pellentesque lorem rhoncus in. Integer ultrices orci quis ex sagittis, sit amet molestie lacus hendrerit. Sed et mi at libero egestas vulputate eget sit amet risus. Integer lobortis convallis ipsum, vitae lacinia turpis semper sed. Maecenas faucibus malesuada neque, a cursus metus sollicitudin sed. Praesent non mi sed neque semper hendrerit. Cras venenatis nec dolor ut maximus. Pellentesque pharetra feugiat erat in sodales. Nullam sit amet tempus turpis. Nullam sed felis varius, euismod ipsum vel, iaculis lectus.`

let countWords = 0
let wordVerifier = 0
let countSpaces = 0

for(let i = 0; i<loremIpsumParagraph.length; i++){
    if(loremIpsumParagraph[i] !== ' ' && loremIpsumParagraph[i] !== '\n' ){
        wordVerifier++
    } else {
        if(loremIpsumParagraph[i-1] && 
            loremIpsumParagraph[i-1]!== ' ' && 
                loremIpsumParagraph[i-1] !== '\n'){
            countSpaces++
            countWords++
            wordVerifier = 0
        }
    }
}

if(wordVerifier>0){
    countWords++
}

console.log(`The Lorem Ipsum text has ${countWords} words!`)

let countEt = 0

for(let i = 0; i<loremIpsumParagraph.length; i++){
    if(loremIpsumParagraph.slice(i,i+2)==='et' || loremIpsumParagraph.slice(i,i+2)==='Et'){
        countEt++
    }
}

console.log(`There ${countEt>1 ? 'are':'is'} ${countEt} word${ countEt>1 ? 's':'' }!`)

console.log('\n====BONUS 2=====\n')

function checkPalindrome(phraseToCheck){
    let cleanPhrase=''
    let invertedPhrase=''
    for(i = phraseToCheck.length-1; i>= 0;i--){
        if(phraseToCheck[i].match(/[a-z]/i)) {
            cleanPhrase += phraseToCheck[i]
        }
    }
    for(i = cleanPhrase.length-1; i>= 0;i--){
        invertedPhrase+=cleanPhrase[i]
    }

    if(invertedPhrase.toUpperCase() === cleanPhrase.toUpperCase()){
        return `The phrase ${phraseToCheck} is a palindrome!`
    }
    return `The phrase ${phraseToCheck} is NOT a palindrome!`
}

console.log(checkPalindrome("A man, a plan, a canal, Panama!"))
console.log(checkPalindrome("Amor, Roma"))
console.log(checkPalindrome("step on no pets"))
console.log(checkPalindrome("Was it a car or a cat I saw?"))
console.log(checkPalindrome("No 'x' in Nixon"))
console.log(checkPalindrome("Maybe this phrase is not a palindrome..."))
console.log(checkPalindrome(" !nsal 3i$&* 93"))