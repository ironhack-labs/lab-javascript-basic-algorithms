// Iteration 1: Names and Input

let hacker1 = 'Antonio';




let hacker2 = 'Joseph';

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length ){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if(hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1
let driver = ' '

for(let i = 0 ; i <= hacker1.length ; i++){

    let driver = ' '
    
    for(let i = 0 ; i< hacker1.length ; i++){
      driver +=  ' ' + hacker1[i].toUpperCase()
    }
    
      console.log(driver)
    

}

//3.2

let driversReverse = ''

for(let i = hacker1.length - 1 ; i >= 0 ; i--){
 driversReverse += hacker1[i] 
  
}
console.log(driversReverse);

//3.3

if(hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first")
  }
  else if(hacker1.localeCompare(hacker2) > 0){
    console.log("Yo, the navigator goes first, definitely.")
    
  }
  else{
    console.log("What?! You both have the same name?")
  }

  //bonus 1

  let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices semper orci, in commodo orci. Suspendisse efficitur est eu interdum iaculis. Praesent volutpat nunc non ante fermentum iaculis. Integer turpis ante, viverra ac lacinia sed, finibus eu libero. Integer pellentesque mi vel ex tristique, at bibendum justo sagittis. Praesent gravida eu purus vitae vestibulum. Nulla facilisi.
Integer ut tempor lorem, dictum mattis nulla. Aenean placerat ut nunc et venenatis. Curabitur id tristique purus, sit amet tristique lectus. Maecenas viverra nulla neque, sed aliquet tellus tristique vitae. Quisque scelerisque tincidunt tortor. Praesent efficitur viverra sem, eu egestas lacus vestibulum ac. Maecenas ac sapien nisl. In fringilla, felis sed eleifend varius, purus elit fringilla nunc, nec posuere est tellus ac sem. Integer id diam vel mi tempus interdum.

Nam mauris risus, interdum eget laoreet non, volutpat a lorem. Vivamus dignissim, eros eu semper vulputate, urna risus tempor nulla, id tempus tortor justo non nunc. Morbi sed porttitor felis, id blandit enim. Proin tincidunt efficitur pulvinar. Quisque sapien ipsum, molestie sit amet facilisis ut, pretium sed nisl. Quisque ut odio leo. Aliquam interdum diam orci, ut sodales felis ultrices consequat. Proin ullamcorper interdum odio, vel blandit lorem pharetra pellentesque. Quisque euismod tempor tincidunt. Nam non sollicitudin lorem, rutrum gravida orci. Pellentesque ac sagittis leo, sed feugiat dui. Nulla blandit varius ante, in blandit enim auctor sit amet. Nullam ultrices lacus tellus, at rhoncus felis sagittis nec. Aliquam semper leo eu molestie condimentum.`

let j = 0

for( let i = 0 ; i < longText.length ; i++){
  let latinWord = longText[i] + longText[i+1]
  
  if(latinWord === "et"){
    j++
  }
  
}
 
console.log(`the text contains the word et ${j} times`)
