// Iteration 1: Names and Input
let hacker1 = 'XXXX'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Mozilla'
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals


function whoWhat(name, navigator) {
    if (name.length > navigator.length) {
      return `The driver has the longest name, it has ${name.length} characters.`;
    }
    else if (name.length == navigator.length) {
      return `Wow, you both have equally long names, ${name.length} characters!`;
    }
    else {
      return `It seems that the navigator has the longest name, it has ${navigator.length} characters.`;
    }
  }
  
  


// Iteration 3: Loops

function concatenateUpper(word) {
    word = word.toUpperCase();  
    return word.split('').join(' ');  
  }


  function reversing(word) {
    return word.split('').reverse().join(' ');  
  }



  function lexOrder(name, navigator) {
    if (name < navigator) {
      return `The driver's name goes first.`;
    }
    else if (name == navigator) {
      return `What?! You both have the same name?`;
    }
    else {
      return `Yo, the navigator goes first, definitely.`;
    }
  }


console.log(lexOrder(hacker1, hacker2))
  