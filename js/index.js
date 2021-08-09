// Iteration 1: Names and Input
let hacker1 = 'Jordi'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Joan'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1

let stringUpperCase = ''

for (let i = 0; i < hacker1.length; i++){

  stringUpperCase = stringUpperCase + hacker1[i].toUpperCase() + ' '
}

console.log(stringUpperCase)

//3.2

let reverseString = ''

for (let x = hacker1.length-1; x >= 0; x--){
  reverseString = reverseString + hacker1[x]
}

//3.3

if(hacker1<hacker2){
    console.log(`The driver's name goes first`)
  } else if (hacker1>hacker2){
    console.log(`Yo, the navigator goes first definitely.`)
  } else {
    console.log(`What?! You both have the same name?`)
  }


//Bonus 1

let stringLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim hendrerit urna vel vestibulum. Aliquam erat volutpat. In accumsan lectus et nisi pharetra, in dictum orci efficitur. Ut imperdiet euismod est non pulvinar. Proin imperdiet tincidunt lectus, eu porta nunc luctus a. Cras non odio a ipsum viverra aliquam. Nunc elementum sem eu consectetur efficitur. Mauris malesuada blandit tellus, eget tempus orci tincidunt non. Donec a tempus lacus. Nullam scelerisque sit amet mauris a rutrum. Pellentesque eu tellus lacinia metus tristique vulputate sed eget orci. Morbi eget efficitur sem. Maecenas sodales sollicitudin diam eget vulputate. Aliquam et mollis lacus. Vivamus eget nunc consequat mauris blandit finibus a ut justo. Etiam vitae nisl sapien. Morbi at luctus lectus. Etiam eleifend vehicula tellus, eget sodales tortor ultrices et. Donec nec elit quis dolor congue pretium. Curabitur finibus facilisis metus at porttitor. Aliquam congue ipsum vel erat cursus, ut lacinia ipsum pellentesque. Aenean aliquet placerat turpis vel accumsan. Etiam eget lacus vel leo suscipit maximus a ultricies mi. Nullam massa massa, blandit ut elit vitae, finibus accumsan neque. Suspendisse a eleifend diam. Sed at urna ex. Proin vel ligula nec leo feugiat malesuada. Suspendisse vitae pellentesque augue. Donec placerat, nisi sed finibus ultrices, lacus nisi malesuada velit, eu vestibulum augue sapien ut mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet mi euismod risus ultricies bibendum. In mattis nisl sit amet pharetra blandit. Praesent congue sollicitudin tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere volutpat tortor ac tempus. Fusce eget turpis suscipit, dignissim massa ut, lobortis mi. Morbi faucibus sit amet nunc pretium iaculis. Nullam facilisis mollis consectetur.'

let wordString = 1;

for (let i = 0; i <stringLorem.length; i++){
  if(stringLorem[i] === ' '){
    wordString +=1
  }
}

console.log(wordString)



let stringUpperCase = stringLorem.toUpperCase()

let wordEtCount = 0

if(stringUpperCase[0] === 'E' && stringUpperCase[1] === 'T' && stringUpperCase[2] === ' '){
    wordEtCount +=1  }

for (let x = 0; x < stringUpperCase.length; x++){
 if(stringUpperCase[x] === ' ' && stringUpperCase[x+1] === 'E' && stringUpperCase[x+2] === 'T' && (stringUpperCase[x+3] === ' ' || stringUpperCase[x+3] === '.')){
    wordEtCount += 1;
   }
  }

console.log (wordEtCount)