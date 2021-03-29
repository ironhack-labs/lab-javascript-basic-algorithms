//Iteration1
const hacker1 = "Pepe"
console.log(`The driver's name  is ${hacker1}.` )

const hacker2 = "Antonio"
console.log(`The navigator's name is ${hacker2}.`)

//Iteration2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} 
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} 
else { console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)}

//Iteration3
//3.1
driver = hacker1
newDriver = ""
for (let i = 0; i < driver.length; i++) {
  if (i < driver.length -1) {
    newDriver += driver[i].toUpperCase() + " "
  }
  else {newDriver += driver[i].toUpperCase()}
}
console.log(newDriver)

//3.2
let newNavigator = ""
for (let i = hacker2.length -1; i >= 0; i--) {
  newNavigator += hacker2[i]
}
console.log(newNavigator)

//3.3
let lexic = hacker1.localeCompare(hacker2)
console.log(lexic)

if (lexic === -1) {
  console.log(`The driver's name goes first.`)
}
else if (lexic === 1) {
  console.log(`Yo, the navigator goes first definitely.`)
}
else {console.log(`What?! You both have the same name?`)}

//Bonus 1
let paragraph = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

console.log(paragraph.split(" ").length)
words = paragraph.split(" ")
counter = 0

for (let i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    counter++
  }
}
console.log(counter)

//Bonus
const palindrome ="step on no pets"
let palindromeInverse = ""
for (i = palindrome.length -1; i >= 0; i--){
 palindromeInverse += palindrome[i]
}
if (palindrome == palindromeInverse) {
console.log(`Wow! It seems that your string it's a palindrome!`)}
else {console.log(`Oh! Your string it's not a palindrome`)}