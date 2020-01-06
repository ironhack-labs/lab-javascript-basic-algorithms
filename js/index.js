// Iteration 1
const hacker1 = 'Carlos'
const hacker2 = 'Esteban'

console.log(`The driver name is ${hacker1}`)
console.log(`The navigator name is ${hacker2}`)

// Iteration 2
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length}`)
} else if (hacker2.length === hacker1.length) {
    console.log(`Wow, you have both have equally long names, ${hacker2.length}`)
}

// Iteration 3
console.log(hacker1.split('').join(' ').toUpperCase())
console.log(hacker1.split('').reverse().join(''))

const names = [hacker1, hacker2]
console.log(names.sort())

if (names[0] === hacker1 && names[1] === hacker1) {
    console.log('What?! You both have the same name')
} else if (names[0] === hacker2) {
    console.log('Yo, the navigator goes first')
} else if (names[0] === hacker1) {
    console.log('The drivers name goes first')
}

//Bonus1
const threeParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis dictum nisl. Nunc tristique nisi nulla, sit amet tincidunt lorem laoreet vitae. Morbi fermentum eu ante sit amet consectetur. Phasellus neque velit, faucibus sed diam a, commodo dictum sem. Morbi finibus, leo a pellentesque porttitor, quam metus suscipit elit, eget ullamcorper risus felis sit amet arcu. Nam in elit congue, blandit felis vitae, tristique metus. Etiam mauris nunc, dictum id gravida sed, suscipit vitae nunc. Aenean pulvinar sed lacus nec egestas. Cras fringilla at felis nec sodales. Mauris egestas velit purus, sed facilisis nisi egestas in. Curabitur eget orci et enim accumsan ornare in sit amet quam. Aenean condimentum massa sit amet tellus vestibulum, nec rhoncus sapien consequat. Nullam lectus orci, sollicitudin a mi pellentesque, faucibus vehicula odio. Ut in vulputate urna. Curabitur eget ultrices erat. Curabitur tempus metus non lacus venenatis, non pharetra magna lacinia. Vestibulum eget metus venenatis, porttitor urna quis, faucibus nisi Vestibulum a pretium urna. Vivamus luctus libero sed augue venenatis malesuada. Donec bibendum vel purus nec aliquet. Curabitur lobortis, purus eget accumsan facilisis, dui orci auctor orci, vitae tempor nulla urna lobortis diam. Aliquam eu tellus sagittis, iaculis est quis, tempus diam. Duis pellentesque efficitur porttitor. Sed accumsan elit augue, ut porta felis euismod quis. Donec arcu risus, ullamcorper non ultricies eget, vehicula in neque. Proin justo massa, congue ut augue in, consectetur bibendum elit. Maecenas eu viverra purus. Aliquam erat volutpat. Fusce sodales augue quis neque efficitur, sit amet porttitor magna laoreet. Morbi porta ultrices lacus, sed luctus felis dapibus a. et et et"

const words = threeParagraphs.split(" ")
console.log(`The paragraphs have ${words.length} words`)

let acum = 0;
for (let i = 0; i <= words.length; i++) {
    if (words[i] === 'et') {
        acum += 1
    }
}
console.log(`The word et appears ${acum} times`)

//Bonus 2
let phraseToCheck = 'anita lava la tina'
let phrase2ToCheck = phraseToCheck.trim().split('').reverse().join('')
if (phraseToCheck.replace(/ /g, "") === phrase2ToCheck.replace(/ /g, "")) {
    console.log('es un palindromo')
} else {
    console.log('no es un palindromo')
}