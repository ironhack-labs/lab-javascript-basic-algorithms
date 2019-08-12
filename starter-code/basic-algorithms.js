// Names and Input

let hacker1 = 'Larry'
console.log('The driver\'s name is ' + hacker1)
let hacker2 = prompt('What is your name?')
console.log('The navigator\'s name is ' + hacker2)

if (hacker1.length > hacker2.length) {
  console.log('The Driver ' + hacker1 +', has the longest name, it has ' + hacker1.length + ' characters.')
 } else if (hacker1.length < hacker2.length) {
   console.log('Yo, navigator ' + hacker2 + ', got the longest name, it has ' + hacker2.length + ' characters.')
 } else {console.log('Wow, you both got equally long names, ' + hacker1.length + ' characters!!')
 }
  
let hackerUC = hacker1.toUpperCase()
hackerUC = hacker1.split('').join(' ')
console.log(hackerUC)

let hackerrev = hacker2.split('').reverse().join('')
console.log(hackerrev)


//Conditionals


// Lorem ipsum generator
