let hacker1 = 'Arthur'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Jonas'
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
  else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
else {
  console.log('Wow, you both have equally long names, XX characters!')
}

const str = hacker1.toUpperCase()

for (let  i = 0; i < hacker1.length; i++) {
  console.log(str[i])
}

for (let  i = 4; i >= 0; i--) {
  console.log(hacker2[i])
}