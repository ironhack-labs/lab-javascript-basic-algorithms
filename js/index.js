// Iteration 1: Names and Input
const hacker1 = "Bruno"
const hacker2 = "Marta"
console.log( `The driver's name is ${hacker1}`)
console.log( `The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
else if (hacker1.length < hacker2.length)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
else
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)


// Iteration 3: Loops
const hacker1ToUpper = hacker1.toUpperCase()
console.log(hacker1ToUpper.split('').join(' '))

console.log(hacker2.split('').reverse().join(''))

const team = [hacker1, hacker2]
const teamSorted = Array.from(team).sort()

if (team == teamSorted.sort())
    console.log(`The driver's name goes first`)
else if (hacker1 == hacker2)
    console.log('What?! You both have the same name?')
else
    console.log('Yo, the navigator goes first definitely')

// Bonus 1
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus tincidunt dolor sed feugiat. Duis interdum, neque at scelerisque euismod, urna lacus vestibulum diam, a pulvinar erat urna vel dolor. In hac habitasse platea dictumst. Sed condimentum molestie tempus. Vestibulum facilisis, augue in mattis venenatis, lectus eros cursus ex, vitae aliquet eros enim vel ipsum. Curabitur eu lorem ullamcorper leo fermentum auctor. Duis a convallis mi. Mauris ex massa, pretium quis ligula eleifend, mollis placerat urna.

Maecenas sed nisl ut sapien vestibulum elementum ac vitae tortor. Duis est sem, ultricies in nisi sit amet, malesuada vestibulum massa. Phasellus vulputate dolor tincidunt ultricies elementum. Nam id dui in odio consequat finibus. Vestibulum volutpat odio euismod velit semper, eget varius risus tincidunt. Nunc tristique massa sed purus sodales sollicitudin. Maecenas rhoncus turpis ac risus malesuada, eu iaculis nisl suscipit. Integer dictum, nunc vel dictum dignissim, orci purus iaculis est, eu laoreet ex nulla ac dolor.

Sed blandit risus eu nunc euismod semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla finibus nisl nunc, quis luctus nisl ullamcorper quis. Nunc blandit nec nisl ac dictum. Phasellus et tellus et ipsum semper lacinia sed id tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras congue elit at semper faucibus. In quis massa condimentum sem convallis lacinia a sed nisl. Vivamus nec augue leo. Proin nunc eros, porta ut massa et, condimentum imperdiet lacus.`

words = loremIpsum.split(' ')
console.log(`There are ${words.length} words in the loremIpsum text`)

let contador=0
for (var i = 0; i<words.length; i++)
    if (words[i] == 'et')
        contador++

console.log(`The word 'et' appears ${contador} times`)

// Bonu 2
phraseToCheck = 'A man, a plan, a canal, Panama!'
phraseOnlyLetters = phraseToCheck.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

if (phraseOnlyLetters == phraseOnlyLetters.split('').reverse().join(''))
    console.log("palindromo")