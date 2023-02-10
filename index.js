// Iteration 1: Names and Input
// 1.1, 1.2
let hacker1 = 'Elisabeth';
console.log (`The driver's name is ${hacker1}`);

// 1.3, 1.4
let hacker2 = "Simon";
console.log (`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals 
if (hacker1.length > hacker2.length) {
  console.log(`the driver has the longer name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
}else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

// 3.1
let hacker1UpperCase = "";

for (let i=0; i < hacker1.length; i++) {
  hacker1UpperCase += `${hacker1[i].toUpperCase()} `
}
console.log(`name in Uppercase:`, hacker1UpperCase)

// 3.2
let hacker2Reverse = "";
for (let i= hacker2.length -1; i >=0; i--) {
  hacker2Reverse += hacker2[i]
}
console.log(`Name backwards:`, hacker2Reverse)

// 3.3
// Arrey
const hackerSorted = [
  hacker1, hacker2
];

//function with .sort
function mySort(a, b) {
  if (a > b)  {
      console.log("The driver's name goes first");
  } else if (a < b) {
      console.log("Yo, the navigator goes first definitely.")
  } else {
      console.log("What?! You both have the same name?")
  }
}

hackerSorted.sort(mySort)

// modern way: hackerSorted.sort(mySort((a, b) => { ...}


// Bonus 1

let longText = `The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"`;

const shortText = `This is text`;

function countWords (text) {
  let totalWords = 0;
  for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        totalWords += 1;
      }  
    }  
    return totalWords + 1;
  }

  // test if function works
const shortTextCountWords = countWords(shortText);
console.log(`Test Counting words:`, shortTextCountWords);

// actual call to function
const longTextCountWords = countWords(longText);
  console.log(`counted words:`, longTextCountWords);

  // Bonus count the word et

const shortEtText = " the Latin word et appears." ;

function countWordEt (text) {
  let totalEt = 0;
  for (let i = 0; i < text.length; i++) {
      if (text[i] === " " && text[i + 1] === "e" && text[i + 2 ] === "t")
      { 
        totalEt += 1;
      }  
    }  
    return totalEt;
  }
//check if function works
const CountEtshort = countWordEt(shortEtText);
  console.log(`counted et test:`, CountEtshort);

//funtion count et
const CountEt = countWordEt(longText);
  console.log(`counted et:`, CountEt);


  //Bonus 2
  let phrasetoCheck = "Amor, Roma";

function reversePhrace (text) {
  let reverseText = "";
  for (let i = text.length -1; i >= 0; i--) {
      if (text[i] !== " " && text[i] !== ",") {
        reverseText += text[i]; 
      } 
    }  
   return reverseText.toLowerCase(); 
  } 

  // Phrase reverse: phrasetoCheckReverseWithoutSpace
  const phrasetoCheckReverseWithoutSpace = reversePhrace(phrasetoCheck)


  function phraceWithoutSpace (text) {
    let PhraseOnlyLetters = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " " && text[i] !== ",") {
        PhraseOnlyLetters += text[i]; 
      }   
     }  
     return PhraseOnlyLetters.toLowerCase();
  }
  //phreace without space: palindromReverse
  const phraceToCheckWithoutSpace = phraceWithoutSpace(phrasetoCheck)
  console.log(phraceToCheckWithoutSpace, phrasetoCheckReverseWithoutSpace)

//check if both  phraseToCheack and PhraseToCheckReverse are the same

  console.log(phrasetoCheckReverseWithoutSpace === phraceToCheckWithoutSpace);
