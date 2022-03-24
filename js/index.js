// Iteration 1: Names and Input-----------------------------------------------------


const hacker1 = 'Carmen'
const hacker2 = 'Iñigo'

//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`)

//1.3 Create a variable `hacker2` with the navigator's name.

const hacker2 = 'Iñigo'

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals----------------------------------------------------------


if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let capitals = ''
for(let i=0; i<hacker1.length; i++){
  if(i===hacker1.length-1){

    capitals += hacker1[i].toUpperCase() 
  }else{
    
  capitals += hacker1[i].toUpperCase() + ' '
  }
  console.log('En el bucle --->',capitals)
}
  console.log('Fuera del bucle -->',capitals)

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reverse = ''
for(let i=hacker2.length - 1; i>=0; i--){

  reverse += hacker2.charAt(i)
}
 console.log(reverse)

//3.3 Depending on the lexicographic order of the strings, print:


let names = [hacker1,hacker2]
  
  if(names[0]<names[1]){
    
  console.log('carmen')
  }
