let hacker1 = 'Larry'
console.log('The driver\'s name is ' + hacker1)
let hacker2 = prompt('What is your name?')
console.log('The navigator\'s name is ' + hacker2)

if (hacker1.length > hacker2.length) {
			console.log('The Driver ' + hacker1 + ', has the longest name, it has ' + hacker1.length + ' characters.')
} else if (hacker1.length < hacker2.length) {
			console.log('Yo, navigator ' + hacker2 + ', got the longest name, it has ' + hacker2.length + ' characters.')
} else {
			console.log('Wow, you both got equally long names, ' + hacker1.length + ' characters!!')
}

let hackerUC = hacker1.toUpperCase()
hackerUC = hacker1
			.split('')
			.join(' ')
console.log(hackerUC.toUpperCase())

let hackerrev = hacker2
			.split('')
			.reverse()
			.join('')
console.log(hackerrev)

let compare = hacker1[0].localeCompare(hacker2[0]);

if (compare === -1) {
			console.log("The driver's name goes first")
} else if (compare === 1) {
			console.log("Yo, the navigator goes first definitely")
} else {
			console.log("What?! You both got the same name?")
} 