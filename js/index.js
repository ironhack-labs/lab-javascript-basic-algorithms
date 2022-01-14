// Iteration 1 - names and input

let hacker1 = 'joseph'
let hacker2 = 'jose'
let biggestName = 0
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2 - conditional

let isEqual = hacker1.length === hacker2.length

if (isEqual) { 
        biggestName = hacker1.length,
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) 
} else {
    hacker1.length > hacker2.length ? (
        biggestName = hacker1.length,
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    ) : (
        biggestName = hacker2.length,
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    )
}


// Iteration 3 - loops


const spacedArray = []
const reversedArray = []
// adding space
for (let index = 0; index < hacker1.length; index++) {
    if (index < hacker1.length -1){
        spacedArray.push(hacker1[index])
        spacedArray.push(' ')
    } else{
        spacedArray.push(hacker1[index])
    }
}

// reversing

for (let index = hacker2.length; index >= 0; index--) {
    
    reversedArray.push(hacker2[index])
}


console.log(spacedArray.join('').toUpperCase())
console.log(reversedArray.join(''))


// lexicographic order

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
for (let index = 0; index < biggestName; index++) {
    if(hacker1 === hacker2){
        console.log('What?! You both have the same name?')
        break
    }else if(hacker1[index] === hacker2[index]){
        continue
        // here I'm checking if the character on position INDEX comes first in the alphabet and if it's true, the driver name goes first
        // in case of having one name shorter than the other but similar between them like `Jose` and `joseph` the shortest will be the chosen.
        /* the method indexOf returns by default -1 when an element has not been found, so using the 
        example above when we go through the 5th loop the name `Jose` has nothing after the letter `e` so doesn't matter what comes next.*/
    } else if( (alphabet.indexOf(hacker1[index])) <  (alphabet.indexOf(hacker2[index]))  ){
        console.log(`The driver's name goes first.`)
        break
    }   else if ( (alphabet.indexOf(hacker1[index])) >  (alphabet.indexOf(hacker2[index])) ) {
        console.log(`Yo, the navigator goes first definitely.`)
        break
    }
    
}


// bonus 1
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ligula vitae dolor pretium tempus pharetra id nisi. Curabitur mattis lorem et tristique rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec odio est, vulputate et ullamcorper non, blandit ut nunc. Sed cursus, nisi in eleifend congue, ipsum diam dapibus massa, a mollis nibh turpis at augue. Aliquam velit dui, semper a libero ut, sollicitudin imperdiet ipsum. Quisque blandit viverra lacus. Mauris et rutrum magna. Vestibulum quis lorem eu massa iaculis finibus. Proin vitae velit pulvinar, ornare augue vel, condimentum turpis. Aenean vestibulum aliquet arcu, at gravida ante cursus vitae. Nunc felis sapien, tincidunt eu pellentesque vel, lacinia non sem. Suspendisse cursus arcu sapien, sit amet venenatis lectus sodales in. Aliquam lorem felis, faucibus vitae scelerisque bibendum, commodo eget ipsum.

Phasellus vitae ipsum non justo finibus consequat in ac felis. Donec at lectus porttitor, pharetra nisl eu, facilisis risus. Cras elit libero, euismod vehicula libero ac, sollicitudin lacinia ex. Nullam nec pellentesque magna. In ultrices nibh eu laoreet ultrices. In at aliquet diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque porttitor purus lacinia, dictum urna a, eleifend mi. Aenean fermentum tempus commodo. Proin ut aliquam ante. Fusce dapibus ipsum at eros egestas, at sollicitudin lectus finibus. Quisque placerat, lacus sed lobortis elementum, nibh urna pharetra mi, eget ornare augue neque mollis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus, ligula in scelerisque commodo, tortor felis lacinia ex, et faucibus sapien tellus eu purus.

Nullam quis lobortis ipsum. Proin ut semper elit. Suspendisse efficitur suscipit lacinia. Quisque egestas ullamcorper ante pretium ornare. Morbi quis interdum tellus. Donec vel tellus consequat, sollicitudin orci nec, tincidunt arcu. Cras ligula augue, iaculis sed odio vitae, ornare consequat justo. Etiam eget gravida felis. Ut facilisis ultrices dui eu ultrices. Quisque fermentum, tellus porta condimentum efficitur, libero nisi sodales erat, ut convallis ante augue nec turpis. Etiam ornare lacinia laoreet.`

const paragraphArray = paragraph.split(' ')
const isEt = word =>  {if(word==='et') return word}

console.log(`number of words ${paragraphArray.length}`)
console.log(`number of et ${paragraphArray.filter(isEt).length}`)


//bonus 2

let phrase = 'Was it a car or a cat I saw?'
let reversedPhrase = ''

phrase = phrase.replace(/[^A-Za-z]/g, '').toLowerCase()
reversedPhrase = phrase.split('').reverse().join('').toLowerCase()

if (phrase === reversedPhrase) console.log('the phrase is a polindrome')