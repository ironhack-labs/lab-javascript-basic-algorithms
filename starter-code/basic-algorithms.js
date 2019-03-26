// Names and Input

let hacker1 = "Allan"
let hacker2 = prompt()

console.log("The driver's name is " + hacker1)
console.log("The navigator's name is " + hacker2)

//Conditionals

if(hacker1.length > hacker2.length) {  
  console.log (`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log (`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
  console.log (`wow, you both got equally long names, ${hacker1.length} characters!!`)
}

// Loops

let hacker1Capitals = "" 
for (i = 0; i < hacker1.length; i++) {
  hacker1Capitals += hacker1.charAt(i).toUpperCase() + " "
}
console.log(hacker1Capitals)

let hacker2Reverse = ""
for (i = hacker2.length; i >= 0; i--) {
  hacker2Reverse += hacker2.charAt(i)
}
console.log(hacker2Reverse)


let maxLength = hacker1.length >= hacker2.length ? hacker1.length : hacker2.length
let n = 0
let hacker1Count = ''
let hacker2Count = ''
while (n < maxLength) {
 let h1char = hacker1.charAt(n)
 let h2char = hacker2.charAt(n)

 hacker1Count += h1char < h2char ? '2' : '1'
 hacker2Count += h2char < h1char ? '2' : '1'
 n++
}

if(hacker1Count > hacker2Count) { 
  console.log (`The driver's name goes first`)
} else if (hacker2Count > hacker1Count) {
  console.log (`Yo, the navigator goes first definitely`)
} else {
  console.log (`What?! You both got the same name?`)
}

// Bonus

let palindrome = prompt ()
let palindromeReverse = ""

for (i = palindrome.length; i >= 0; i--) {
  palindromeReverse += palindrome.charAt(i)
}
if(palindrome === palindromeReverse) {
  console.log(palindrome + " is a palindrome.")
} else {
  console.log(palindrome + " it's NOT a palindrome.")
}

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sollicitudin mi. Aenean sed mauris ipsum. Maecenas condimentum, lectus ut commodo sodales, nisi massa lobortis orci, eu ultricies lectus massa ac risus. Maecenas blandit ultrices risus, nec lacinia leo mattis ut. Aliquam hendrerit, odio ac gravida maximus, enim nisl dictum libero, ac volutpat nulla lacus eget mauris. Duis interdum justo ex, sed vulputate lectus dictum id. Nullam vel dictum erat. Fusce metus massa, viverra eu consectetur quis, elementum sed erat. Duis tincidunt nunc a justo auctor, at interdum mauris vehicula. Curabitur volutpat lacus ac auctor efficitur. Donec viverra, nisi pretium imperdiet maximus, tortor leo dignissim est, quis suscipit orci urna malesuada lectus. Donec porttitor mauris sapien, sit amet efficitur est iaculis in. Pellentesque sit amet leo at orci vehicula tristique. Donec sed tortor et diam gravida pretium. Sed pellentesque massa sagittis lacinia tristique. Donec mollis non nisl eu mattis. Phasellus tempus lacus orci, id pharetra turpis laoreet ac. Sed commodo nulla mauris, at congue felis commodo non. Sed nunc enim, sodales eget viverra quis, suscipit eget urna. Maecenas nec porttitor lectus, at venenatis nisl. Nulla dui neque, laoreet vitae bibendum blandit, egestas id mi. Morbi vestibulum nisi augue, in mollis lectus mollis nec. Vivamus egestas ultricies lectus, ac iaculis orci finibus ut. Ut commodo elit id lacus volutpat, in iaculis tortor bibendum. Nam vel egestas lorem, eu rutrum dolor. In augue tortor, iaculis ac dolor vel, imperdiet maximus mi. Nam ornare turpis mi, vitae tristique dui commodo at. Praesent pellentesque turpis vel elementum porttitor. Mauris libero orci, maximus vel dui non, dapibus rutrum felis. Etiam lobortis metus tortor. Suspendisse varius scelerisque tellus at suscipit. Maecenas euismod, odio non interdum pulvinar, tellus tellus pulvinar lacus, a posuere nibh nulla sollicitudin nulla."

console.log(text.split(" ").length)

console.log (text.split("et").length)