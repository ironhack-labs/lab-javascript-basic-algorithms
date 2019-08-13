// Names and Input
let hacker1 = 'Raul'
let hacker2 = prompt('Dame el nombre del pasajero')

console.log(`The drivers name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

//Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name, it has ${hacker1.length}
         characters`)
}
else if (hacker1.length < hacker2.length){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
}
else {
console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
}

// Lorem ipsum generator

let parrafo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis libero eu arcu dapibus, id lobortis erat vehicula. Mauris venenatis magna ac purus tempus, sed congue nunc aliquet. Proin varius viverra dolor, nec volutpat sapien. Maecenas volutpat nulla a ligula posuere lacinia. Duis luctus et elit non accumsan. Nulla suscipit turpis imperdiet ex ultricies vestibulum. Suspendisse eget nunc dignissim, facilisis augue at, ultrices magna. Duis viverra nibh ac sagittis lacinia. Nam vel fringilla ante, at fringilla elit. Etiam sit amet convallis libero. Curabitur elementum ex et ipsum vehicula blandit. Aliquam felis massa, ornare at mi pulvinar, accumsan bibendum dolor. Pellentesque faucibus, neque non gravida lobortis, dui risus pellentesque lacus, quis scelerisque diam elit sit amet velit. Donec quis elementum dui, non egestas orci.

Sed lectus quam, lacinia ut elit non, scelerisque fringilla metus. Nullam vel vestibulum dolor. Curabitur eu sem ex. Suspendisse vel laoreet est. Vivamus hendrerit nisl vel erat condimentum auctor. Fusce vitae iaculis ex, in accumsan est. Proin vel orci nisi. In placerat purus id congue tincidunt. Nunc ut eros lorem. Aenean rutrum lacus felis, vel porta massa ultrices vitae.

Integer faucibus in nunc et dignissim. Nunc eget justo elit. Duis a suscipit ante, porta maximus diam. Aenean nec eleifend neque. Proin tempus ultricies libero, ac pharetra lectus blandit sit amet. Nunc turpis nisl, convallis ac massa non, aliquet eleifend est. Aliquam sed bibendum ligula, id fringilla massa.`

function wordcount (str){
  return str.split(" ").length;
}
wordcount(parrafo)

let etwords = parrafo.search('et');
console.log(etwords)

//Name checker

let name = hacker1.toUpperCase()
name = name.split(' ')
let spaced = ''
for(i=0; i<name.length; i++){
  spaced += name[i]+ ' '
}

console.log(spaced)

let reverse = ''

for (i=hacker2.length-1; i >= 0; i--){
    reverse += hacker2[i]
}

console.log(reverse)


if (hacker1>hacker2){
    console.log("The driver's name goes first")
  }
  else if (hacker2>hacker1){
    console.log("Yo, the navigator goes first definitely")
  }
  else{
    console.log("What?! You both got the same name?")
  }


  //Palindrome

  let palindromo = prompt('Escribe algo aqui')

function palindrome (palindromo){
  let nosym = palindromo.replace(/[^A-Z0-9]/ig,'').toLowerCase()
  let review = nosym.split('').reverse().join('')
  if(nosym===review){
    console.log(palindromo + " It's a palindrome")
  }
  else{
    console.log(palindromo + " It's not a palindrome")
  }
}

palindrome(palindromo)

