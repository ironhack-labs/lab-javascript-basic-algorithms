// Iteration 1: Names and Input
const hacker1 = 'Pablo'
 console.log(`The drivers name is ${hacker1}`)

const hacker2 = 'Sergio'
 console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.lenght} characters. `)
  }else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `)
  }else{
    console.log(`Wow, you both have equally long names, ${hacker1.lenght} characters! `)
  }  

// Iteration 3: Loops

let capitalizedName = hacker1.toUpperCase();
let separatedName = ''

for(let i=0; i < hacker1.length; i++){
  separatedName += capitalizedName[i] + ' '
}
console.log(separatedName)

let reverseName = ''

for(let k=hacker2.length-1; k >= 0 ; k--){
  reverseName += hacker2[k]
}
console.log(reverseName)

let compare = hacker1.localeCompare(hacker2)
if(compare<0){
  console.log('The drivers name goes first')
}else if(compare>0){
  console.log('Yo! The navigators goes first definetly')
}else{
  console.log('What? You both have the same name?')
}

//Bonus

//Bonus 1
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non turpis venenatis, accumsan nisl ac, vehicula urna. Nulla vitae tellus sit amet dui aliquet efficitur ut ut tellus. Etiam hendrerit pharetra tempor. Morbi tempus tortor non ultricies dignissim. Aenean sed purus imperdiet, mattis massa vel, maximus diam. Ut congue fringilla metus, quis hendrerit diam viverra in. Etiam vitae imperdiet est, a mattis lectus.

Integer cursus massa turpis, ultricies vulputate nisl placerat et. Pellentesque enim tellus, gravida a ipsum in, mollis finibus felis. Sed id dolor sit amet ante elementum auctor. Donec eget leo efficitur, rutrum orci a, aliquam magna. Etiam sit amet massa vel tellus rutrum maximus. Etiam hendrerit placerat sapien, sit amet mollis justo ultricies vel. Sed fringilla quam ligula, ac lobortis enim consectetur sit amet.

Cras dignissim, quam at finibus laoreet, ligula tortor ullamcorper eros, et lobortis velit arcu id libero. Vivamus fringilla, leo vel vehicula placerat, velit sapien fringilla mi, id efficitur ligula tellus in quam. Nam eget erat libero. Phasellus at dapibus odio, nec pellentesque libero. Sed ex odio, tempus ut scelerisque vulputate, vestibulum ac risus. Aliquam erat volutpat. Proin eu dictum dui, et pharetra ex. Donec a convallis eros, ac gravida nulla.`
let counter = 3 //Empieza en 3 porque la ultima palabra de cada parrafo no la va a contar
let counterTwo = 0

for(let i=0; i<text.length; i++){
  if(text[i]==' '){
    counter+=1 
  }else{
    continue 
  }
}
console.log(counter)

for(let i=0; i<text.length; i++){
    if(text.startsWith(' et ', i)){
      counterTwo+=1
    }else{
      continue
    }
  }
  console.log(counterTwo)

  //Bonus 2

  const phraseToCheck = 'Was it a car or a cat I saw?'
  let simplifiedPhrase = ''
  let reversePhrase = ''
  for (i=0; i<phraseToCheck.length; i++){
    if (phraseToCheck[i]==',' || phraseToCheck[i]==' ' || phraseToCheck[i]=='?' || phraseToCheck[i]=='!' || phraseToCheck[i]=="'"){
      continue
    } else {
      simplifiedPhrase = simplifiedPhrase + phraseToCheck[i].toLowerCase()
    }
  }
  for (i=simplifiedPhrase.length-1; i>=0; i--){
    reversePhrase += simplifiedPhrase[i]
  }
   if(simplifiedPhrase===reversePhrase){
     console.log("It's a palindrome!")
   } else {
     console.log("It's not a palindrome :(")
   }