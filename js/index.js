// Iteration 1: Names and Input

let hacker1 = 'Fernando'

console.log(`The driver´s name is ${hacker1}`)

const hacker2 = 'Tomás'

console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if ( hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has  ${hacker2.length} characters. `)
} else { console.log(`Wow, you both have equally long names ${hacker1.length}`) }



// Iteration 3: Loops
// Iteration 3.1

  const hacker1Split = hacker1.toUpperCase().split('').join(' ');
  console.log(hacker1Split)

  // Iteration 3.2

  //Reverse with method

  const hacker2ReverseMethod = hacker2.split('').reverse().join('');
  console.log(hacker2ReverseMethod, "reverse1")

  

  //Reverese with a for loop:

  let hacker2Reverse = ''

  for (let i = 1; i <= hacker2.length; i++) {
      hacker2Reverse += hacker2[hacker2.length - i]
  }

  console.log(hacker2Reverse, 'reverse2')

  // Iteration 3.3

  // With a conditional:

   const str1 = 'The driver´s name goes first'
   const str2 = 'Yo, the navigator goes first definitely'
   const str3 = 'What?! You both have the same name?'

   let lexiHacker = hacker1.localeCompare(hacker2)
   console.log(lexiHacker)
   if ( lexiHacker > 0) {
     console.log(str2)
   } else if (lexiHacker === 0 ) {
     console.log(str3)
   } else {
     console.log(str1)
   }

// With a Switch:

hackerOrder = hacker1.localeCompare(hacker2)

switch (hackerOrder) {
  case -1:
    console.log('The driver\'s name goes first.');
    break;
  case 1:
    console.log('Yo, the navigator goes first definitely.');
    break;
  case 0:
    console.log('What?! You both have the same name?');
    break;
}


// Bonus 1:

// Create a string with three paragraphs:

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum augue in fermentum dictum. Duis tempus dui et sapien lobortis blandit. Quisque semper leo eget sodales hendrerit. Ut nec magna eros. Aenean lacinia accumsan libero. Suspendisse eleifend tempus commodo. Ut egestas ex mauris, eu mollis sapien tempus in. In eleifend neque est, non vestibulum nisl pulvinar et. Mauris justo libero, dictum nec gravida quis, tempor id leo. Donec euismod non diam malesuada convallis.\nPellentesque fermentum libero felis, ut lacinia enim congue ultricies. Quisque in arcu pretium, mattis justo id, ullamcorper sapien. Aenean convallis varius lorem, ut fringilla ipsum porta elementum. Sed eu egestas lacus, eget aliquam erat. Quisque rutrum ut odio vitae ultrices. Pellentesque ut fringilla sem. Suspendisse nec euismod tellus. Quisque tellus felis, congue at pretium id, fringilla sit amet augue. Phasellus faucibus elementum tristique. Pellentesque ac mi eget leo interdum aliquam vitae non neque.\nMorbi id est nec magna auctor sollicitudin et vestibulum velit. Proin massa nisi, porta vel pharetra sed, venenatis eget neque. Maecenas congue dapibus faucibus. Mauris eget rhoncus ex. Curabitur non risus varius, tempus libero ut, aliquam ligula. Praesent ullamcorper, mauris sed tempus euismod, augue mauris elementum lorem, et luctus dui magna in neque. Ut tempus neque et diam lobortis finibus. Fusce congue massa et sagittis euismod. Nullam convallis sodales urna, bibendum dignissim lectus maximus eu. Ut quis ipsum a dolor gravida tincidunt. Aenean sed bibendum odio, eu consequat ex. Vestibulum id purus id nisi fringilla tincidunt. Quisque in nisi nec est convallis pellentesque. Sed feugiat, erat sed aliquet malesuada, elit lacus porttitor felis, non dapibus nulla risus sed sem.'

// Make tour program count the number of words in the string:

const loremSplit = lorem.split(' ')
console.log(loremSplit.length, 'method')

// With a for loop:

//This doesn't work if str has blank spaces but no words

let words = 0

if (lorem.length > 0) {
  words = 1
} 

for (i = 0; i < lorem.length; i++)
  if (lorem[i] === ' ' && lorem[i+1] != ' ') {
    words ++
  }

console.log(words, 'for loop')

//Make you program count the number of times the Latin word 'et' appears:

//With a for loop:

let acum = 0;

for (let i = 0; i < loremSplit.length; i++) {
  if (loremSplit[i] === 'et' ) {
    acum++
  }
}
console.log(acum, 'for loop')

// With a filter method: 

 const filter = loremSplit.filter(j => j === 'et')

 console.log(filter.length, 'fiter method')

 // Bonus 2:

 function palindrome(str) {
  const regEx = /[\W]/g;
  const lowRegStr = str.toLowerCase().replace(regEx, '');
  console.log(lowRegStr)
  const reverseStr = lowRegStr.split('').reverse().join(''); 
  console.log(reverseStr)

  return reverseStr === lowRegStr?'It´s a palindrome':'Not a palindrome';
}
palindrome("A man, a plan, a canal. Panama");
/*console.log(palindrome("Amor, Roma"))
console.log(palindrome("race car"))
console.log(palindrome("stack cats"))
console.log(palindrome("step on no pets"))
console.log(palindrome("taco cat"))
console.log(palindrome("put it up"))
console.log(palindrome("Was it a car or a cat I saw?"))
console.log(palindrome("No 'x' in Nixon"))
console.log(palindrome("No 'x' in Nixonsss"))*/