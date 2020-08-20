// Iteration 1: Names and Input

const hacker1 = "Jon";

console.log(`The driver's name is ${hacker1}`)


const hacker2 = "David";

console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if( hacker1.length > hacker2.length ) {

    console.log(`The driver has the longest name, it has ${hacker1.lenght} characters`)
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }


// Iteration 3: Loops

const hacker1 = "Jon";

console.log(`The driver's name is ${hacker1}`)


const hacker2 = "David";

console.log(`The navigator's name is ${hacker2}`)
console.log("---------------")
let shortestName

if( hacker1.length > hacker2.length ) {

  console.log(`The driver has the longest name, it has ${hacker1.lenght} characters`)
  shortestName = hacker2
} else if (hacker1.length < hacker2.length){
  shortestName = hacker1
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  shortestName = hacker1
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}
console.log("---------------")
let driver = ""
let navigator = ""

for (let i in hacker1){
  driver += hacker1[i] + " "  
}
console.log(driver.toUpperCase())

for (let i = hacker2.length -1; i >= 0; i--) {
  navigator += hacker2[i]
}

console.log(navigator)
console.log("---------------")




if (hacker1.toUpperCase() === hacker2.toUpperCase()){
  console.log("What?! You both have the same name?")
} else {
  for(let i = 0; i < shortestName.length; i++){
  if (hacker1[i].toUpperCase() < hacker2[i].toUpperCase()){
    console.log("The driver's name goes first.")
    break;
  }else {
        console.log("Yo, the navigator goes first definitely.")
        break;
    }
  }
}


//BONUS//

// bonus 1


let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis auctor mi, et posuere justo. Praesent et tellus sit amet enim efficitur ornare non sed ipsum. Suspendisse orci nisl, laoreet id bibendum non, porttitor at turpis. Sed lobortis est arcu, eget imperdiet justo hendrerit eget. Cras rutrum erat in facilisis pellentesque. Curabitur maximus sit amet sapien eget condimentum. Aliquam porttitor, tortor non ornare porta, tellus nibh volutpat enim, at euismod neque erat ut nisl. Etiam hendrerit tincidunt tristique.

Pellentesque sed lorem convallis diam rutrum vehicula non eget ante. Donec commodo metus eget ligula sollicitudin dictum. Etiam venenatis bibendum augue at scelerisque. Pellentesque vestibulum eros ac enim volutpat porta. Etiam vel dui id augue condimentum eleifend. Integer porta diam sed lectus laoreet ultrices. Sed pretium metus dictum aliquam luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed ultrices nisl quis mattis sagittis. Nullam consequat neque eros, a vestibulum ex interdum eget. Nulla sodales euismod sagittis. Nullam ullamcorper velit tortor, vel varius massa pretium nec. Etiam fermentum nisi nec ligula ornare, a aliquam enim ullamcorper. Duis id dolor diam. Vestibulum in dictum libero. Nunc et sapien sed tellus venenatis semper."

function count() {
  text.split(" ").length
}

function countEt(){
  let indices = []
  for(var i = 0; i < text.length; i++) {
	  if (text[i].toLowerCase() === "o") indices.push(i);
  }
}

// Bonus 2


let palindromo = "Amor, Roma";



