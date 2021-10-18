// Iteration 1: Names and Input
//
const hacker1 = 'Kirsi'
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Ferhat'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  )
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  )
} else {
  console.log(`Wow, you both have equally long names,  characters!`)
}

// Iteration 3: Loops
// 3.1

let str = ''
for (let char of hacker1) {
  str += char.toUpperCase() + ' '
}

console.log(str)

// 3.2
let reversedNavigator = ''
for (let char of hacker2) {
  reversedNavigator = char + reversedNavigator
}
console.log(reversedNavigator)

// 3.3
let arr = [hacker1, hacker2]
const sortedArr = arr.sort(function (a, b) {
  return a.localeCompare(b)
})

if (hacker1.localeCompare(hacker2) === 0) {
  console.log('What?! You both have the same name?')
} else if (sortedArr[0] === hacker1) {
  console.log("The driver's name goes first.")
} else {
  console.log('Yo, the navigator goes first definitely.')
}

// Bonus 1:
const string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis enim enim, at posuere nisi blandit vitae. Integer venenatis justo quam, ut feugiat dolor condimentum ac. Maecenas vehicula consectetur purus, sit amet lobortis eros viverra placerat. Quisque venenatis efficitur tellus eu dictum. Curabitur imperdiet est eget enim semper feugiat. Nunc eleifend ante turpis, at scelerisque ex faucibus nec. Praesent rutrum nibh vitae porttitor tincidunt. Morbi metus lacus, mollis at viverra ut, consequat sit amet lacus. Pellentesque lorem nisi, lacinia sit amet nulla non, molestie tempus sapien. Suspendisse potenti.

Sed dignissim, sapien quis sodales mattis, erat felis vestibulum lacus, in congue metus odio ut augue. Duis eu libero nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus leo ut aliquet volutpat. Vestibulum vitae blandit nunc. Nam molestie enim mi. Vestibulum ornare lorem congue, imperdiet turpis et, pretium arcu. Etiam scelerisque fermentum mi, nec cursus sapien lobortis et. Maecenas nibh tellus, efficitur quis malesuada non, hendrerit eget erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula est sed dui euismod, ut ullamcorper justo rhoncus. Nulla imperdiet purus eget lobortis ultricies. Sed vulputate mauris turpis, at aliquet sem vulputate quis.

Curabitur rutrum iaculis quam et placerat. Mauris tristique risus quis est eleifend ullamcorper. In id consequat enim, non dignissim ex. Donec posuere consectetur dolor, vitae facilisis lorem elementum vel. Ut a orci a mi cursus tincidunt. Vivamus turpis eros, faucibus ut arcu eget, vehicula ornare felis. Suspendisse commodo nulla ut quam feugiat, id ultricies dolor fermentum. Nunc libero risus, accumsan at dolor vitae, gravida varius ex. Phasellus sed purus velit. Nullam lacinia consectetur sodales. Curabitur quis augue non diam ultricies finibus eu in nulla.`

let words = string.split(' ');
console.log(words.length);

let word = 'et';
const filteredWords = words.filter(w => w === word).length;
console.log(filteredWords);

// Bonus 2:
let phraseToCheck = 'taco cat';
let trimmed = phraseToCheck.replace(/\s/g,'')
let reversedPhrase = '';

for (let i = trimmed.length - 1; i >= 0; i--) {
  if (phraseToCheck[i] !== '') {
    reversedPhrase += trimmed[i]
  }
}
if (trimmed === reversedPhrase) {
  console.log('Palindrome');
} else {
  console.log('No palindrome');
}


