// Iteration 1: Names and Input

let hacker1 = "John"
let hacker2 = "Al"

console.log(`"The driver's name is ${hacker1}"`)

console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals

let lenDriver=hacker1.length
let lenNavigator=hacker2.length

if(lenDriver > lenNavigator){
  console.log(`The driver has the longest name, it has ${lenDriver} characters.`)
}else if(lenNavigator >lenDriver){
  console.log(`It seems that the navigator has the longest name, it has ${lenNavigator} characters.`)
}else{
  console.log(`Wow, you both have equally long names, ${lenDriver} characters!`)
}


// Iteration 3: Loops

hackerCapitalLetters = hacker1.toUpperCase()

let capitalString =""
for(let i=0;i<lenDriver;i++){
  capitalString+=hackerCapitalLetters[i]
  if(i===lenDriver-1){break}
  capitalString+=' '
  }

console.log(`"${capitalString}"`)

reverseString=""
for(let i=lenDriver-1;i>=0;i--){
  reverseString +=hacker1[i]
}
console.log(`"${reverseString}"`)


// Bonus 1:

let pragraphS =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque purus vel molestie posuere. Vivamus cursus molestie turpis, sed aliquam enim accumsan ut. Duis ut tortor non metus aliquam egestas vel id enim. Sed vitae varius risus, faucibus luctus velit. Nulla facilisi. Quisque efficitur posuere dapibus. Praesent varius arcu id turpis congue, commodo viverra ante convallis. Suspendisse potenti. Donec sed dolor pulvinar arcu sollicitudin tincidunt. Vivamus lacus augue, sollicitudin lobortis tortor malesuada, bibendum eleifend augue. Donec vitae venenatis nunc. Morbi sem felis, feugiat ut massa et, euismod eleifend felis. Pellentesque lorem diam, dapibus nec leo finibus, dapibus tempor nulla.`
let lenParagraph = pragraphS.length

function wordCount(str){

  // checks if the string is empty
  if (str.length === 0){
      return 0
  }



  let countofWords = 0


  //exclude start and end spaces
  if (str.substring(0,1) === ' '){
       str = str.splice(0,1)
  }else if(str.substring(-1) === ' '){
      str = str.splice(-1,1)
  }

  //count the numnber of spaces
  str.forEach(character => {
      if (character === ' ')      {
          countofWords++
      }
  });

  //return the number of spaces + 1 to account for account for the last word
  return countofWords
}



//#### Bonus 2: 


let phraseToCheck = "A man, a plan, a canal, Panama!";
phraseToCheck = phraseToCheck.replace(/\W)/,' ')

function isPalindrome(stringToCheck){
  let mainString = stringToCheck.toLowerChase()
  
  return mainString == mainString.split(' ').reverse().join('')
}
