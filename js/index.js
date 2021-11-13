    console.log("I'm ready!");

  // Iteration 1: Names and Input;
      //1.1 Create a variable `hacker1` with the driver's name.
      let hacker1 = 'Ricardo';
      //1.2 Print `"The driver's name is XXXX"`.
      console.log(`The driver's name is ${hacker1}`);
      //1.3 Create a variable `hacker2` with the navigator's name.
      let hacker2 = 'Vandicleia'
      //1.4 Print `"The navigator's name is YYYY"`.
      console.log(`The navigator's name is ${hacker2}`);

  // Iteration 2: Conditionals
      //2.1. Depending on which name is longer, print:
      if (hacker1.length > hacker2.length) {
      console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }  
      else if (hacker2.length > hacker1.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
      //else if (hacker1.length = hacker2.length) {
      else {  
      console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`);
  }
  // Iteration 3: Loops
      //3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

      /* let splittedString = hacker1.split('');
      let stringWithSpaces = splittedString.join(' ');
      let upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
      console.log(upperCaseStringWithSpaces);*/
      
      /* let stringToPrint = '';
      for ( let i = 0; i < hacker1.length; i++) {
      stringToPrint += hacker1[i] + ' ';
      };
      console.log(stringToPrint.slice(0, -1).toUpperCase());*/
      
      let resultString = '';
      for (let i = 0; i < hacker1.length; i++) {
        resultString += hacker1[i].toUpperCase() + ' ';
      }
      //string.tim() removes the line breaks and whitespaces from the beginning and end of the String.
      console.log(resultString.trim());
      
      //3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
      let stringReverse = '';
      for (let i = hacker2.length -1; i >= 0; i--) {
        stringReverse += hacker2[i];
      };
      console.log(stringReverse);

     //3.3 Depending on the lexicographic order of the strings, print: 
      if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
        console.log(`What?! You both have the same name?`)
      }else if (hacker1.toLowerCase() <hacker2.toLowerCase()) {
        console.log(`The driver's name goes first.`);
      }else {
        console.log(`Yo, the navigator goes first definitely.`);
      }

     //Bonus 1:Go to lorem ipsum generator and:
       // Generate 3 paragraphs. Store the text in a variable type of string.
        let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        
     //Make your program count the number of words in the string.
        let textArr= text.split(' '); 
        console.log(`Number of words: ${textArr.length}`);
    
     //Make your program count the number of times the Latin word et appears.
        let etCounter = 0;
        for (let i = 0; i < textArr.length; i++) {
            if (textArr[i].toLowerCase() === 'et') {
                etCounter++;
            };
        }
        console.log(`Number of times the latin word 'et': ${etCounter}`)
     
     /*Bonus 2:
    Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
    "A man, a plan, a canal, Panama!"
    "Amor, Roma"
    "race car"
    "stack cats"
    "step on no pets"
    "taco cat"
    "put it up"
    "Was it a car or a cat I saw?" and "No 'x' in Nixon". */
           
    let str = '';
let phraseToCheck = "No 'x' in Nixon";

// Remover espaço e símbolos 
for ( let i = 0; i < phraseToCheck.length; i++) {
  if ( 
        phraseToCheck[i] === ' ' || 
        phraseToCheck[i] === '!' ||
        phraseToCheck[i] === '.' ||
        phraseToCheck[i] === '?' ||
        phraseToCheck[i] === ',' ||
        phraseToCheck[i] === '\''
      )
  {
    continue;
  } else {
    str += phraseToCheck[i];
  }
}
// Palindrom é quando uma palavra e sua inversa são iguais
let strReverse = '';
for ( let i = str.length - 1; i >= 0; i--) {
  strReverse += str[i];
};

if (str.toLowerCase() === strReverse.toLowerCase()) {
  console.log(`The phrase: '${phraseToCheck}' is a palindrom`);
} else {
  console.log(`The phrase: '${phraseToCheck}' is not a palindrom`);
}
        
    