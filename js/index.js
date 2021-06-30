console.log("I'm ready!");

//Morning excercices
//Exo 1
for(let i = 0 ; i < 101 ; i++){
    console.log(i)
    i % 5 === 0 ? console.log("foo") : null
}

//Exo2
const myString = "I like turtles"
let myNewString = ""

for(let i = 0 ; i < myString.length ; i++){
    const letter = myString.charAt(i) 
    if(letter === "l" || letter === "t"){
        continue 
    }
    myNewString += letter
    
}

console.log(myNewString)

//Iteration 1
const hacker1 = "Quentin"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Tibooooooo"
console.log("The navigator's name is " + hacker2)


//Iteration 2
const nameComparison = function(){
  const h1Length = hacker1.length
  const h2Length = hacker2.length

  if(h1Length === h2Length) return console.log(`Wow, you both have equally long names, ${h1Length} characters!`)

  if(h1Length > h2Length) return console.log(`The driver has the longest name, it has ${h1Length} characters.`)

  return console.log(`It seems that the navigator has the longest name, it has ${h2Length} characters.`)
}

nameComparison()

//Iteration 3
const propaganda = function(name){
  const capName = name.toUpperCase()
  const nameLength = name.length
  const result = []

  for(let i = 0; i < nameLength; i++){
    result.push(capName[i] + " ")
  }

  return console.log(result.join(''))
}

propaganda(hacker1)


  //oneliner using an array 

  console.log(hacker2.toUpperCase().split('').map(x => x + " ").join('').slice(0, -1))

//3.2
const reverse = function(name){
  const nameLength = name.length
  let result = ""

  for(let i = nameLength - 1; i >= 0 ; i--){
      result += name[i]
  }

  return console.log(result)
}

reverse(hacker1)


  //oneliner using an array and destructuration

  console.log([...hacker2].reverse().join(''))

//3.3
const lexicorder = function(driver, navigator){
    if(driver === navigator) return console.log("What?! You both have the same name?")
    if(driver < navigator) return console.log("The driver's name goes first.")
    return console.log("Yo, the navigator goes first definitely.")
}

lexicorder(hacker1, hacker2)
lexicorder("Nina", "Franck")
lexicorder("Nina", "Ninon")
lexicorder("Pierre-Henry","Pierre-Henry")

//Bonus 1
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare blandit dapibus. Vestibulum imperdiet risus nisi, elementum rutrum odio mattis ac. Suspendisse magna tellus, sollicitudin at risus a, euismod posuere tellus. Curabitur orci nisl, vestibulum ac consectetur sit amet, efficitur vitae nulla. In egestas blandit erat. Mauris et laoreet turpis. Morbi nisi lectus, ullamcorper quis vehicula non, posuere sed dolor. Integer nec molestie mauris. Pellentesque fringilla lacinia lacus id dignissim. Mauris porttitor mauris et semper feugiat. Ut at fringilla sem. Aenean cursus, ipsum vitae hendrerit dictum, libero tellus accumsan nulla, eu luctus risus nulla in turpis. Cras nec enim id sapien elementum ornare. Integer rutrum interdum massa in ultrices. Nulla facilisi. Quisque eu tincidunt diam, sodales auctor augue. Etiam porttitor rhoncus neque, sit amet finibus est. Donec sed lacinia ex, vel interdum ante. Cras non finibus orci. Cras commodo ipsum a tincidunt ultrices. Duis congue vestibulum magna, a porttitor tellus. Vivamus vitae pellentesque velit, nec posuere leo. Donec rutrum neque non varius finibus. Suspendisse ipsum turpis, dapibus vel nulla a, vehicula dictum urna. Nunc tristique lacus ac nunc tincidunt, id laoreet massa pulvinar. Aliquam at nibh risus. Sed pulvinar augue ultricies viverra elementum. Nulla sed augue tincidunt metus tincidunt aliquam. Quisque sit amet nulla et neque fringilla malesuada. Donec auctor volutpat libero, quis congue mi finibus vel. Integer et semper justo. Maecenas mollis arcu vehicula lacus pulvinar, id mattis sem placerat. Ut sit amet commodo ipsum."

const loremCounter = function(lorem){
    let words = lorem.split(' ').length
    let etOccurences = lorem.toLowerCase().replace(/[^\w\s]/g, "").split(' ').filter(x => x === "et").length
    
    console.log(`There is ${words} words in our paragraphs`);
    console.log(`There is ${etOccurences} occurences of the word "et" in our paragraphs`)
    
    return
}

loremCounter(lorem)

//Bonus 2
const palindromes = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon",
    ")(()"
]

const notPalindromes = [
    "This is not a palindrom !",
    "abcdecbd",
    "()()"
]

const isPalindromeBasic = function(phraseToCheck){
    let cleanedPhraseToCheck = ""

    for(let i = 0 ; i < phraseToCheck.length ; i++){
        switch (phraseToCheck[i]){
            case '.':
                break
            case ',':
                break
            case ';':
                break
            case ':':
                break
            case '!':
                break
            case '"':
                break
            case "'":
                break
            case '?':
                break
            case ' ':
                break
            default:
                cleanedPhraseToCheck += phraseToCheck[i]    
        }
    }

    cleanedPhraseToCheck = cleanedPhraseToCheck.toLowerCase()

    const length = cleanedPhraseToCheck.length

    if(length % 2 === 0){
        for(let i = 0 ; i < length / 2 ; i++){
            if(cleanedPhraseToCheck[i] !== cleanedPhraseToCheck[length - 1 - i]){
                return console.log(false)
            }
            return console.log(true)
        }
    }
    else{
        for(let i = 0 ; i < (length - 1) / 2 ; i++){
            if(cleanedPhraseToCheck[i] !== cleanedPhraseToCheck[length - 1 - i]){
                return console.log(false)
            }

            return console.log(true)
        }
    }
}

console.log("Palindromes - Basic function")
for(let i = 0 ; i < palindromes.length ; i++){
    isPalindromeBasic(palindromes[i])
}

console.log("Not Palindromes - Basic function")
for(let i = 0 ; i < notPalindromes.length ; i++){
    isPalindromeBasic(notPalindromes[i])
}

//using more sophisticated methods
const isPalindrome = function(phraseToCheck){
    const tidyLetters = phraseToCheck.toLowerCase().replace(/[^\w\(\)]/g, "").split('')
    const length = tidyLetters.length
    let array1 = null
    let array2 = null

    if(length % 2 === 0){
        array1 = tidyLetters.slice(0, length/2)
        array2 = tidyLetters.slice(length/2, length).reverse()
    }
    else{
        array1 = tidyLetters.slice(0, (length - 1)/2)
        array2 = tidyLetters.slice((length + 1)/2, length).reverse()
    }

    console.log(array1.join('') === array2.join(''))
    return
}

console.log("Palindromes - Advanced")
for(let i = 0 ; i < palindromes.length ; i++){
    isPalindrome(palindromes[i])
}

console.log("Not Palindromes - Advanced")
for(let i = 0 ; i < notPalindromes.length ; i++){
    isPalindrome(notPalindromes[i])
}


