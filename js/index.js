// Iteration 1: Names and Input

let hacker1 = 'bob'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'name'

console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else if (hacker2.length > hacker1.length){
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}

else {
	console.log(`Wow, you both have equally long names, XX characters!`)
}
// Iteration 3: Loops

let s =''
for (const char in hacker1){
	
	s+=hacker1[char]+' '
}
console.log(s.toUpperCase())

s = ''
for (let i = hacker2.length-1; i>=0; i--){
	s+=hacker2[i]
	
}
console.log(s)

if (hacker1 < hacker2){
	console.log(`The driver's name goes first.`)
}

else if (hacker2 > hacker){
	console.log(`Yo, the navigator goes first definitely.` )
}
else{
	console.log(`What?! You both have the same name?`)
}

//Bonus1

let paragraphs = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim odio at odio efficitur luctus. Praesent nec tincidunt purus, ut ullamcorper erat. Mauris nec viverra tellus, sit amet ultrices dolor. Morbi sollicitudin sem tellus, nec euismod elit ultrices eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia elit sed tortor sodales accumsan sed vitae neque. Fusce eget lacus convallis, rutrum risus nec, fringilla erat. Vestibulum ex dui, egestas eu imperdiet quis, dictum eu quam. Mauris tempus ullamcorper metus. Nunc eu sollicitudin ex.Morbi et urna tempus augue suscipit dapibus egestas vitae turpis. Nullam posuere vitae libero eget eleifend. Vivamus augue massa, molestie at euismod a, vulputate eget metus. Nulla elit odio, efficitur quis dignissim eu, sodales vel nulla. Proin et venenatis odio. Suspendisse dapibus rhoncus ante eu consectetur. Vivamus lectus est, sollicitudin ac pretium vel, porttitor feugiat erat. Integer non ligula nec lacus malesuada congue at ut magna.Praesent a blandit felis, ac tincidunt turpis. Sed facilisis gravida lacus, non suscipit massa viverra sit amet. Praesent sed enim quis ipsum placerat maximus at elementum nisi. Vivamus consectetur purus ac urna laoreet, sit amet tempus lectus tempor. Sed vel blandit nunc. Quisque orci lacus, bibendum et nisi quis, dignissim suscipit tellus. Proin et nisl a nisl hendrerit placerat id sed ligula. Maecenas malesuada ullamcorper auctor. Donec condimentum turpis vitae dui varius varius. Nam at nibh ac sapien dapibus ultricies. Proin ut metus ut magna imperdiet posuere. In eu dolor sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'

const wordCounter = paragraphs =>{
	console.log(paragraphs.split(' ').length)
}

wordCounter(paragraphs)

const etCounter = paragraphs =>{
	let counter = 0
	for (let word of paragraphs.split(' ')){
		if (word =='et'){
			counter +=1
		}
	}
	console.log(counter)
}

etCounter(paragraphs)

//Bonus2

const isPalindrome = phraseToCheck => {
	let reversedString = ''
	phraseToCheck=phraseToCheck.replace(/\W|_/g, '').toLowerCase()
	for (let i = phraseToCheck.length-1; i>=0; i--){
		reversedString+=phraseToCheck[i]
	
}
	if (reversedString==phraseToCheck){
		return true
	}
	else{return false}
}

console.log(isPalindrome(`A man, a plan, a canal, Panama!`))