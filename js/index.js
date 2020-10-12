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


for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}
