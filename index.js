// Iteration 1: Names and Input
// const hacker1 = prompt('hi! whats your name')
const hacker1 = 'ricardo'
console.log(`The driver's name is ${hacker1}`)
const hacker2 = 'miguel'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
	console.log(
		`The driver has the longest name, it has ${hacker1.length} characters.`
	)
} else if (hacker1.length == hacker2.length) {
	console.log(
		`Wow, you both have equally long names, ${hacker1.length} characters!`
	)
} else {
	console.log(
		`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
	)
}

// Iteration 3: Loops
let driverName = ''
for (let i = 0; i < hacker1.length; i++) {
	driverName += hacker1[i].toUpperCase() + ' '
}
console.log(driverName.trim())

let navigatorName = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
	navigatorName += hacker2[i]
}
console.log(navigatorName)

if (hacker1 < hacker2) {
	console.log("The driver's name goes first.")
} else if (hacker1 == hacker2) {
	console.log('What?! You both have the same name?')
} else {
	console.log('Yo, the navigator goes first definitely.')
}

// Bonus 1
const longString = `Minim et do in est cupidatat magna reprehenderit anim eiusmod Lorem. 
Quis ut ea non anim quis nulla aliqua in nulla.
Ut veniam id ut est laborum aliquip reprehenderit culpa non in. Dolor non eu ullamco sunt nostrud.
Esse et nostrud voluptate ullamco quis anim ea nisi dolore nisi ea laboris pariatur.
Cillum nisi quis qui non exercitation ea cillum duis anim in aliquip dolore qui dolor.
Consequat magna et ad cupidatat cupidatat proident deserunt.

Laborum do in aute laboris pariatur dolore amet id non Lorem velit incididunt.
Ipsum anim sunt labore mollit nulla esse aute est ad ullamco labore proident nisi in.
Duis eiusmod Lorem dolor elit cupidatat cillum proident eu non.
Laborum officia fugiat do cillum laboris laboris veniam.
Qui sit adipisicing excepteur nulla nostrud ullamco.
Cupidatat et sunt veniam exercitation Lorem in nostrud ex ex consectetur nostrud sit est exercitation.
Nisi Lorem aliqua dolore esse culpa officia proident deserunt dolore enim velit minim dolor proident.

Consectetur id ipsum et adipisicing sit reprehenderit exercitation magna laboris. 
Nisi nisi ut officia minim sint veniam voluptate ut qui. 
Reprehenderit ex dolore pariatur laboris tempor cillum. 
Aliqua duis non sunt fugiat enim sunt exercitation aute dolore commodo pariatur ea Lorem. 
Laboris sint in ad tempor aliquip id nulla. Enim duis nostrud id aliquip dolore. 
Ipsum ex esse est commodo mollit quis irure esse in dolor deserunt esse. 
Aliqua sit voluptate enim ex elit enim consequat labore anim officia in. 
Reprehenderit laboris irure incididunt est. 
Amet veniam occaecat id mollit laboris commodo officia est. 
Velit labore voluptate laboris dolore reprehenderit voluptate irure magna. 
Eu veniam elit anim qui. 
Nulla excepteur aliquip elit elit eiusmod. 
Commodo amet officia id labore officia occaecat.`

const countWords = (longString) => {
	let words = 0
	for (let i = 0; i < longString.length; i++) {
		if (longString[i] === ' ') words++
	}
	return words + 1
}
// const countEt = (longString) => {
// 	let words = 0
// 	for (let i = 0; i < longString.length - 1; i++) {
// 		if (longString[i] + longString[i + 1] === 'et') words++
// 	}
// 	return words
// }
const countEt = (longString) => {
	return longString.match(/et/).length
}
console.log(countWords(longString))
console.log(countEt(longString))

// Bonus 2
const isPalindrome = (phrase) => {
	let cleaned = ''
	for (let i = 0; i < phrase.length; i++) {
		let c = phrase[i].toLowerCase()
		if (c >= 'a' && c <= 'z') {
			cleaned += c
		}
	}
	for (let i = 0; i < cleaned.length / 2; i++) {
		if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
			return false
		}
	}
	return true
}
const phraseToCheck = 'Anana'
console.log(isPalindrome(phraseToCheck))
