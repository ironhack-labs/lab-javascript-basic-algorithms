// Iteration 1: Names and Input

let hacker1 = `Adriano`
console.log(`The driver's name is ${hacker1}`)

let hacker2 = `Alba`
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  }else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`)
  }else {
    console.log(`Wow, you both have equally long names, XX characters!`)
  }

// Iteration 3: Loops

let upper = hacker1.toUpperCase()
console.log(upper)
let split1 = upper.split('').reverse();
console.log(split1)

let rev = hacker2.split('').reverse().join('')
console.log(rev)

var nombres = ['Alba', 'Adriano']
nombres.sort()
console.log(nombres)
 