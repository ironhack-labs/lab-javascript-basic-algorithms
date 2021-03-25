// Iteration 1: Names and Input
let hacker1 = 'Toretto'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Alonso'

console.log(`The driver's name is ${hacker2}`)


// Iteration 2: Conditionals
nameLength1 = hacker1.length
nameLength2 = hacker2.length

function nameLengthComparator (name1, name2){
  if(name1.length > name2.length){
    console.log(`The driver ${name1} has the longest name, it has ${name1.length} characters`)
    return name1
  }
  
  else if (name2.length > name1.length){
    console.log(`It seems that the navigator ${name2} has the longest name, it has ${name2.length} characters.`)
    return name2
  }

  else if (name1.length === name2.length){
    console.log(`Wow, you both have equally long names, ${name1.length} characters!.`)
    return name1
  }
}

// Iteration 3: Loops
longerName = nameLengthComparator(hacker1, hacker2)

function printName(name){
  let nameSeparated = ' '
  for(let i = 0; i < name.length; i++){
    nameSeparated += name[i].toUpperCase() + ' '
  }
  return nameSeparated
}

console.log(printName(longerName))

//Intentamos usar el forEach pero no funciono
//hacker1.forEach(letter => {
  //let capitalLetter = letter.upperCase()
  //console.log(letter)
//})

function printNameRev(name){
  let nameSeparatedRev = ' '
  for(let i = name.length-1; i >= 0; i--){
    nameSeparatedRev += name[i] + ' '
  }
  return nameSeparatedRev
}


console.log(printNameRev(longerName))

//----

if(hacker1.localeCompare(hacker2) === -1){
  console.log(`The driver's name ${hacker1} goes first.`)
}
else if(hacker1.localeCompare(hacker2) === 1){
  console.log(`Yo, the navigator ${hacker2} goes first definitely.`)
}
else if(hacker1.localeCompare(hacker2) === 0){
  console.log(`What?! You both have the same name?`)
}
