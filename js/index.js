console.log("I'm ready!")

let hacker1 = "Matheus"
let hacker2 = "Coelho"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters`);
}  else {
  if (hacker1.length < hacker2.length) {
  console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}
}

console.log(hacker1.split('').join(' ').toUpperCase())
console.log(hacker2.split('').reverse().join(''))