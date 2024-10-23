// Iteration 1: Names and Input
let hacker1 = 'Bruno'
let hacker2 = 'Baptiste'
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
	console.log(
		`The driver has the longest name, it has ${hacker1.length} characters.`
	)
} else if (hacker1.length < hacker2.length) {
	console.log(
		`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
	)
} else {
	console.log(
		`Wow, you both have equally long names, ${hacker1.length} characters!`
	)
}
// Iteration 3: Loops
let revName = 'Baptistb'
let normalName = ''
for (let i = revName.length - 1; i >= 0; i--) {
	let letter = revName[i].toUpperCase()
	if (i !== 0) {
		normalName += letter + ' '
	} else {
		normalName += letter
	}
}

console.log(normalName)

// BONUS

let longText = `Et Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse dictum tempor condimentum; ad condimentum morbi. Aliquam dictum elementum curabitur eu a a blandit. Mollis et iaculis sollicitudin nulla eleifend mauris. Primis bibendum urna luctus nec torquent justo proin. Eleifend inceptos pellentesque cras fames blandit ante curae orci est. Eu elit proin gravida curabitur sit iaculis lobortis.

Adipiscing imperdiet aliquet congue habitasse; ut laoreet. Habitasse suscipit sollicitudin convallis eros accumsan. Massa lacinia nisi volutpat pretium curabitur, ad tempus sapien. Metus egestas consequat fringilla sagittis tempor aenean; nisl nisi. Vehicula habitasse praesent est nunc fringilla. Pulvinar senectus sem proin ex leo. Interdum quisque aenean dui montes dui malesuada eu nam non.

Ipsum ut est eu mattis at efficitur, morbi enim. Facilisis ante efficitur sit proin mauris gravida laoreet eget pulvinar. Ipsum urna mollis eleifend bibendum maecenas. Accumsan tortor pretium diam urna elit ullamcorper rhoncus tempor etiam. Potenti convallis volutpat sodales, viverra turpis hendrerit. Imperdiet mus eget metus curabitur fusce. Augue arcu tempus nam at potenti amet. Facilisi porta ligula sapien maximus penatibus proin mi potenti. Ultricies hendrerit pretium cursus nascetur dignissim et.`

let etCounter = 0
let tempWord = ''

for (let i = 0; i < longText.length; i++) {
	if (longText[i] !== ' ' && longText[i] !== '.') {
		tempWord += longText[i].toLowerCase()
	} else {
		if (tempWord === 'et') {
			etCounter++
		}
		tempWord = ''
	}
}
console.log(etCounter)

let phraseToCheck = "No 'x' in Nixom"
let newPhrase = ''
let revPhrase = ''
for (let i = 0; i < phraseToCheck.length; i++) {
	if (phraseToCheck[i].match(/[a-zA-Z]/)) {
		newPhrase += phraseToCheck[i].toLowerCase()
	}
}

for (let i = newPhrase.length - 1; i >= 0; i--) {
	revPhrase += newPhrase[i]
}

if (newPhrase === revPhrase) {
	console.log(`The phrase --> '${phraseToCheck}' <-- is a Polindrome!`)
} else {
	console.log(`The phrase --> '${phraseToCheck}' <-- is not a Polindrome!`)
}
