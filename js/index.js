
let hacker1 = "Michael Scott"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Dwayne Johnson"
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length}`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length}`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

for (let i=0; i<hacker1.length; i++){
  if (hacker1)
console.log(hacker1[i].toUpperCase());
}

for(let i=hacker2.length; i>=0; i--) {
  console.log(hacker2[i])
}