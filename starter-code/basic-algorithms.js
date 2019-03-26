// Names and Input
const hacker1 ="Ricardo"

//const hacker2 = prompt("Tell me your name baby <3")
hacker2 = "Regina"

console.log(`The navigator's name is ${hacker2} honey!`)

const hacker1Length = hacker1.length

const hacker2Length = hacker2.length

let test = ''
let test2 = ''

//Conditionals
if (hacker1Length == hacker1Length){
  console.log("wow, you both got equally long names, "+(hacker2Length + 1) +" characters!!")
}
else if (hacker1Length > hacker2Length){
  console.log("The Driver has the longest name. It has "+ (hacker1Length + 1)+" characters")
}
else{
  console.log("Yo, navigator got the longest name, it has "+ hacker1Length+" characters")
}


for (counter = 0; counter < hacker1Length; counter++ ){
  test += hacker1.charAt(counter) + ' '
  if (hacker1.charAt(counter)===hacker1.charAt(hacker1Length-1)){
    console.log(test.toUpperCase())
  }
  else{
  }
}

for (counter = hacker2Length; counter >= 0; counter-- ){
  test2 += hacker2.charAt(counter) + ' '
  if (hacker2.charAt(counter)===hacker2.charAt(0)){
    console.log(test2)
  }
  else{
  }
}

if(hacker1 < hacker2){
  console.log("The driver's name goes first")
}
else if(hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely")
}
else{
  console.log("What?! You both got the same name?")
}

const palindrome = prompt("Play with me, let's see if we can make a palindrome").replace(/ /g,'')
// Se intentó con trim en vez de replace pero no funcionaba
 let palindromeOriginal = palindrome.toLowerCase()
 palindromeOriginal = palindromeOriginal.split("")
 palindromeOriginal = palindromeOriginal.join("")
 let palindromeReverse = palindrome.toLowerCase()
palindromeReverse = palindromeReverse.split("")
 palindromeReverse =  palindromeReverse.reverse()
 palindromeReverse = palindromeReverse.join("")
 console.log(palindromeOriginal)
 console.log(palindromeReverse)
if(palindromeOriginal == palindromeReverse){
  console.log("Yay! We are intelligent enough")
}
else{
  console.log("Sorry dude, are you stupid? That's not a palindrome")
}
// Lorem ipsum generator

