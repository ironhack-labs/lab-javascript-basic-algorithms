let hacker1 = 'Doug'
let hacker2 = prompt("Who is the Navigator?")
let drivLetters = ""
let navLetters = ""
let names = [hacker1, hacker2]

console.log('The driver\'s name is', hacker1)
console.log('The navigator\'s name is', hacker2)

if (hacker1.length > hacker2.length) {
  console.log ('The Driver has the longest name, it\'s',hacker1.length,' characters')
} else if (hacker1.length === hacker2.length) {
  console.log('wow, you both got equally long names,',hacker1.length,'characters!')
} else {
  console.log('Yo, navigator got the longest name, it has',hacker2.length,'characters!')
}

for (var i = 0; i < hacker1.length; i++){
  drivLetters+= hacker1.toUpperCase()[i];
  drivLetters+= " ";
}
console.log(drivLetters)

for (var i = hacker2.length -1; i >=0; i--) {
  navLetters+= hacker2[i];
}
console.log(navLetters)

sort.names

if (names0 === hacker1){
  console.log('The Driver\'s name goes first')
}