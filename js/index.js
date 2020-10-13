console.log("I'm ready!");
let hacker1= 'Gabriela'
console.log(`The driver's name is ${hacker1}`)
let hacker2= 'Gabriel'
console.log (`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} chracters`) 
 }
 else if ( hacker2.length > hacker1.length) { 
   console.log ( `It seems that the navigator has the longest name, it has ${hacker2.length} chracters`)
 }

else if ( hacker2.lenght = hacker1.length) {
  console.log (` Wow, you both have equally long names,${hacker1.length} chracters`)
}

test=" "
for(let i=0; i<hacker1.length; i++){ 
   test += hacker1.charAt(i).toUpperCase() + ' ';
} 

console.log(test) 

test2= " "
for(let u=hacker2.length; u>=0; u--) {
test2 += hacker2.charAt(u) 
}

console.log(test2) 

if (hacker1.localeCompare(hacker2) <0) {
console.log(`The driver's name goes first`) 
} else if (hacker1.localeCompare(hacker2) ===1 ){
  console.log(`Yo, the navigator goes first definitely.`)
} else if(hacker1.localeCompare(hacker2) ===0) {
  console.log(`What?! You both have the same name?`)
}
