function NamesAndInput(){
  // Iteration 1: Names and Input

  let hacker1 = prompt("Name, please:")
  let hacker2 = prompt("Pet Name, please:")

  console.log(`The driver's name is ${hacker1}`)
  console.log(`The pet name is ${hacker2}`)

  //
  // Iteration 2: Conditionals

  if (hacker1.length > hacker2.length) {
    console.log(`The driver's has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker2.length) {
    console.log(`It seems that the pet has the longest name, it has ${hacker2.length} characters.`)
  } else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

  // Iteration 3: Loops

  let lexicalValueHacker1 = [];
  let lexicalValueHacker2 = [];
  let totalLexicalValueHacker1 = 0;
  let totalLexicalValueHacker2 = 0;
  const hacker2Reverse = hacker2.split("").reverse().join("")

  for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toLocaleUpperCase())
    lexicalValueHacker1.push(hacker1.charCodeAt(i))
  }

  for (let j = 0; j < hacker2.length; j++) {
    console.log(hacker2Reverse[j])
    lexicalValueHacker2.push(hacker2.charCodeAt(j))
  }
  
  for (let k = 0; k < lexicalValueHacker1.length; k++) {
    totalLexicalValueHacker1 += lexicalValueHacker1[k];
  }

  for (let l = 0; l < lexicalValueHacker2.length; l++) {
    totalLexicalValueHacker2 += lexicalValueHacker2[l];
  }

  if (totalLexicalValueHacker1 > totalLexicalValueHacker2){
    console.log("The driver's name goes first.")
  }else if (totalLexicalValueHacker2 > totalLexicalValueHacker1){
    console.log("Yo, the pet goes first definitely.")
  }else if (totalLexicalValueHacker2 === totalLexicalValueHacker1){
    console.log("What?! You both have the same name?")
  }
  

}

NamesAndInput()


