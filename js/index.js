// Iteration 1: Names and Input
let hacker1 = 'Shania'
return `the driver's name is ${hacker1}`
let hacker2 = 'Safira'
 return `the navigator's name is ${hacker2}`

// Iteration 2: Conditionals
if( hacker1.length > hacker2.length){
    return `The driver has the longest name, it has ${hacker1.length} characters`
 }else if(hacker1.length < hacker2.length){
    return `It seems that the navigator has the longest name, it has${hacker2.length} characters.`
 }else if(hacker1.length === hacker2.length){
    return `Wow, you both have equally long names,${hacker1.length} characters!`
 }

// Iteration 3: Loops
let string=''
for(let letter of hacker1){
  let name = letter.toUpperCase() + ' '
  string += name 
}
 return string;

let stringReverse =''
for(let i = hacker2.length - 1; i > -1 ; i--){
   stringReverse += hacker2[i];
  }
 return stringReverse

if(hacker1.localeCompare(hacker2) === -1){
    return "The driver's name goes first."
}else if(hacker1.localeCompare(hacker2) === 0){
    return "What?! You both have the same name?"
}else if(hacker1.localeCompare(hacker2) === 1){
    return "Yo, the navigator goes first definitely"
}

