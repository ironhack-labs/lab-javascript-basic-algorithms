// Iteration 1: Names and Input
function NamesAndInput(){
    let hacker1 = prompt("Name, please:")
    let hacker2 = prompt("Navigators Name, please:")

    console.log(`The driver's name is ${hacker1}`)
    console.log(`The navigator's name is ${hacker2}`)
  
  //
  // Iteration 2: Conditionals

  if (hacker1.length > 10 && hacker1.length !== hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > 5 && hacker1.length !== hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else if (hacker1.length === hacker2.length){
    console.log("Wow, you both have equally long names, XX characters!")
  }

}

NamesAndInput()




// Iteration 3: Loops
