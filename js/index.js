// Iteration 1: Names and Input

const hacker1="Jonan"
console.log(`The driver's name is ${hacker1}`)

const hacker2="Melissa"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const lh1=hacker1.length
const lh2=hacker2.length

if (lh1 > lh2) {
	console.log(`The driver has the longest name, it has ${lh1} characters.`)
}
else if (lh2 > lh1) {
	console.log(`It seems that the navigator has the longest name, it has ${lh2} characters.`)
}
else {
	console.log(`Wow, you both have equally long names, ${lh1} characters.`)
}
console.log("")


// Iteration 3: Loops

for (let i = 0; i < lh1; i++) {
	console.log(hacker1[i].toUpperCase())
	console.log(" ")
}

for (let i = lh1-1; i >= 0; i--) {
	console.log(hacker1[i])
}

console.log(" ")

if (hacker1[0] < hacker2[0]) {
	console.log(`The driver's name goes first`)
}
else if (hacker1[0] > hacker2[0]) {
	console.log(`Yo, the navigator goes first definitely.`)
}
else {
	console.log(`What?! You both have the same name?`)
}

console.log(" ")

//Bonus 1

lorem='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis ex quam, at facilisis dui scelerisque at. Nam ultrices lobortis diam et tincidunt. Sed aliquam eros eu orci sollicitudin lacinia. Nulla iaculis elementum tellus ut bibendum. Maecenas quis lacinia mi. Curabitur porta tortor at molestie lobortis. Aliquam erat volutpat. Suspendisse volutpat velit urna, et pharetra felis condimentum vitae. Nulla quis placerat orci. Sed aliquam a augue suscipit congue. Maecenas sapien ipsum, tristique quis magna vitae, consectetur posuere sapien. Quisque eros felis, tincidunt nec ex ut, gravida malesuada nunc. Pellentesque vel massa rhoncus, scelerisque quam nec, porta odio. Morbi risus turpis, congue ac elementum quis, volutpat sit amet turpis. Morbi in enim eros. In eget suscipit massa, ac porttitor mauris. Nulla facilisi. Sed sagittis magna in est tempus varius. Phasellus pretium convallis arcu vitae porta. In est neque, ullamcorper sed ornare vitae, vehicula ac leo. Nulla eleifend tincidunt scelerisque. Phasellus aliquam metus urna. Maecenas venenatis erat ac leo ultricies congue.'

lorem_list=lorem.split(" ")
nwords=lorem_list.length

nwords_et=0
for (i = 0; i <= lorem_list.length; i++) {
	if (lorem_list[i] == "et") {
		nwords_et++
	}
}

console.log(`The first three paragraphs of 'Lorem Ipsum' text contains ${nwords} words, ${nwords_et} of which are the word "et"`)

console.log(" ")

//Bonus 2

str="A man, a plan, a canal, Panama"
console.log(`The phrase to check whether it's palindrome is "${str}".`)

str_low=str.toLowerCase()

str_split_commas=str_low.split(", ")
str_join_wspaces=str_split_commas.join(" ")

str_split_spaces=str_join_wspaces.split(" ")
str_filtered=str_split_spaces.join("")

str_inverted=""

for (i = str_filtered.length-1; i >= 0; i--) {
	str_inverted += str_filtered[i]
}

if (str_filtered === str_inverted){
	console.log("Gotta have a palindrome!")
}
else {
	console.log("No, we don't have a palindrome ")
}