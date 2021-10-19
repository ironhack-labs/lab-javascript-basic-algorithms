// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Tatiana"
// // 1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}.`)
// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Santi"


// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, XX characters!.`)
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let separatedDriver = "";
for(let i = 0; i < hacker1.length; i++) {
  
  separatedDriver += hacker1[i] + " "
  
}
console.log(separatedDriver.toUpperCase())
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseNavigator = "";

for(let i = hacker2.length - 1; i >= 0; i--){
  reverseNavigator += hacker2[i]
}

console.log(reverseNavigator)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if(hacker1[0] < hacker2[0]){
  console.log("The driver's name goes first.")
} else if (hacker1[0] > hacker2[0]){
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}


// Bonus 1:

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat dui nisi, sit amet convallis risus vehicula quis. Morbi eu ante nec enim tempus viverra vel quis nulla. Aenean tristique varius lorem. Fusce accumsan rutrum urna, non cursus metus malesuada id. Fusce congue nisi vitae est congue, vel imperdiet odio cursus. Vivamus imperdiet posuere metus, sit amet cursus odio ultrices ut. Sed interdum elementum urna, sed vehicula neque mattis non. Duis iaculis placerat ultrices. Praesent aliquet leo a erat semper, id rhoncus arcu lobortis. Vestibulum consequat mauris vitae eros tristique, vitae viverra leo interdum. Donec eget efficitur sem, a varius arcu. Donec ut gravida turpis, quis lacinia lorem.
Nam fermentum ultricies enim, mattis varius quam convallis eu. Fusce sit amet semper urna. Vivamus vitae libero sem. Quisque ac viverra massa, at gravida dolor. Sed rhoncus, enim ac auctor consectetur, ipsum orci facilisis augue, non auctor tortor nunc eget mi. Donec at purus vel diam pellentesque elementum. Nullam aliquam odio sodales metus hendrerit, nec sodales neque eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel risus nec sem commodo ultrices. Nulla consequat neque sit amet scelerisque feugiat.
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at orci venenatis, tristique ipsum eu, tristique nibh. Nulla tincidunt tortor pulvinar dolor fermentum iaculis a id mauris. Quisque aliquet vitae erat sit amet interdum. Nulla ex nibh, euismod commodo vulputate et, aliquam vitae dui. Suspendisse nibh lacus, luctus eget congue id, molestie vitae mauris. Suspendisse egestas, arcu a porta iaculis, lorem nisl vestibulum dolor, sed pretium justo justo sed dui. Maecenas vestibulum erat mauris, nec suscipit felis auctor ut. Phasellus sagittis non elit nec rutrum. Praesent nec leo ligula. Suspendisse accumsan in elit id gravida. Etiam sit amet felis nec magna vulputate ornare. Integer at orci vel enim accumsan imperdiet.`

let count = 0;
for(let i = 0; i < loremIpsum.length; i++) {
  if(loremIpsum[i].match(/[\s]|[\n]/gm)){
    count += 1;
  }
}
console.log(count + 1)

let countEt = 0;
for(let i = 0; i < loremIpsum.length; i++) {
  if((loremIpsum[i - 1] + loremIpsum[i]+ loremIpsum[i + 1]) === " et"){
    countEt += 1;
  }
}
console.log(countEt)


// Bonus 2:


let phraseToCheck = "A man, a plan, a canal, Panama!"
let checkPalindrome = ""
let modifiedPalindrome = phraseToCheck.toLowerCase().replace(/\W/gm, "")


for(let i = modifiedPalindrome.length - 1; i >= 0; i--) {
  checkPalindrome += modifiedPalindrome[i]
}
console.log(modifiedPalindrome)
console.log(checkPalindrome)
console.log(`Is a palindrome? ${modifiedPalindrome === checkPalindrome}`)

