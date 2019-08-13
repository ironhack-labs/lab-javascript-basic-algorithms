// Names and Input
const hacker1 = "guille"
console.log('the drivers name is ' + hacker1)
const hacker2 = prompt('whats your name')
console.log('the drivers name is ' + hacker2)


//Conditionals
if (hacker1.length > hacker2.length){
    console.log ('the driver ' + hacker1 + ' has the longest name, it has ' + hacker1.length)
  }
  else if (hacker1.length < hacker2.length){
    console.log ( 'the navigator got the longest name ' + hacker2 +' it has ' + hacker2.length + ' characters')
  }
   else if(hacker1.length === hacker2.length){ 
     console.log ('wow, you both got equally long names, ' + hacker1.length + ' characters')
    
   }
    else {
      console.log( 'put a valid name')
    }
//loops
//Loops

 /*let upper1 = hacker1.toUpperCase()
 let upper2 = hacker2.toUpperCase()*/
 let space1 = ''
 let space2 = ''
 for(let i=0; i<hacker1.length; i++){
   space1 += hacker1[i] + ' '
 }
for(let i=0; i<hacker2.length; i++){
   space2 += hacker2[i] + ' '
 }
  console.log(space1.toUpperCase(), space2. toUpperCase())

  console.log(hacker1.split('').reverse().join(''))

console.log(hacker2.split('').reverse().join(''))  

/*if (hacker1 === hacker2){
  console.log('what! you both got the same name ')
}
else{

}*/
//nos basamos en el codigo de elias para hacerlo, y estamos estudiando mejor el tema  
let i = 0
while (hacker1.charAt(i) === hacker2.charAt(i)) i++

if (i=== hacker1.length)
console.log("You both got the same name" )

else 
if(hacker1[i] < hacker2 [i])
console.log("the drivers name goes fisrt")

else 
console.log("yo, the navigator goes fisrt")


// Lorem ipsum generator
//los bonus no nos dio tiempo de hacerlos