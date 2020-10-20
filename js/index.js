// Iteration 1: Names and Input
const hacker1 = 'Raquel'
const hacker2 = 'Iñigo'

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters `)
  } else if (hacker1.length < hacker2.length){
    console.log (`The navigator has the longest name, it has ${hacker2.length} characters `)
  } else if (hacker1.length === hacker2.length){
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
let space = " "
let hacker1Name = ""

for (let i= 0; i < hacker1.length; i++){
  let letter= hacker1.charAt(i).toUpperCase()
  hacker1Name += letter + space
  } 

  console.log (hacker1Name);

let reverseName= "";

for (let i= hacker1Name.length-1; i>=0; i--){
  reverseName += hacker1Name[i];
}
  console.log(reverseName)


//BONUS EXERCISES

//Bonus 1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate, velit et tincidunt faucibus, leo lorem ornare est, vel lobortis leo lectus at odio. Phasellus sit amet ultrices massa. Cras imperdiet augue purus, quis dictum dui scelerisque egestas. Quisque lorem orci, finibus vel lacus non, tristique lobortis leo. Vestibulum pellentesque nunc sed mollis efficitur. Phasellus vitae enim vitae leo faucibus consectetur ac quis odio. Etiam dictum a risus id hendrerit. Donec ut leo quis erat feugiat dictum a sed metus. Ut turpis urna, feugiat non lorem in, consectetur congue magna. Sed rutrum, est viverra posuere porta, magna diam feugiat felis, vitae volutpat nunc mi at mauris. Aliquam mauris mauris, tincidunt eu tellus sed, laoreet interdum magna. Nullam velit arcu, sagittis quis ex at, scelerisque sodales velit. Integer quis iaculis massa. Nullam euismod nisl a mauris blandit, et vulputate odio ullamcorper. Donec hendrerit congue est, ac elementum turpis molestie eu. Duis dignissim purus elit, quis congue justo vulputate a. Etiam euismod urna tincidunt, commodo diam in, aliquet sem. Nunc felis magna, venenatis a hendrerit nec, semper eu turpis. In pharetra tristique odio quis condimentum. Aliquam non mi quis erat lacinia bibendum in sed est. Quisque dapibus nulla nec erat rutrum faucibus. Fusce quis auctor orci. Fusce nec vehicula elit. Donec sagittis nunc sit amet congue accumsan. Nullam eget convallis tortor. Phasellus vehicula dui ac est hendrerit pharetra. Praesent hendrerit egestas faucibus. Ut ac lorem sodales mauris faucibus facilisis. Morbi placerat justo a risus tempor, id facilisis mi posuere.`

console.log(loremIpsum);

let counter = loremIpsum.split(" ");
console.log (counter.length)

let appears = loremIpsum.split("et");
console.log (appears.length)


//Bonus 2
let phraseToCheck = "step on no pets"

let reversePhrase= "";

for (let i= phraseToCheck.length-1; i>=0;i--){
  reversePhrase += phraseToCheck[i];
} if(phraseToCheck === reversePhrase){
  console.log ('They are equal')
} else {
  console.log(`They aren't equal`)
}