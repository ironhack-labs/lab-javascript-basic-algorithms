let hacker1 = 'Alfonso';
console.log (`The drivers name is ${hacker1}`)

let hacker2 = 'Alex';
console.log (`The navigators name is ${hacker2}`)

console.log (hacker1.length)
console.log (hacker2.length)

if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.legth} characters.`) 
} else if (hacker1.length < hacker2.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

console.log ((`"${hacker1[0]} ${hacker1[1]} ${hacker1[2]} ${hacker1[3]} ${hacker1[4]} ${hacker1[5]} ${hacker1[6]}"`).toUpperCase())

console.log ((`"${hacker2[3]} ${hacker2[2]} ${hacker2[1]} ${hacker2[0]}"`).toLowerCase())

console.log (hacker1.localeCompare(hacker2))

console.log ("Yo, the navigator goes first definitely")