// Iteration 1: Names and Input

const hacker1 = "Anna";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Karina";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if ((hacker2.length > hacker1.length)) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
  };


// Iteration 3: Loops
// task 3.1

function upperCase(name) {
    let endResult = "";
  
    for (let i = 0; i < name.length; i++) {
      endResult = endResult + name[i] + " "
    };
    
    return endResult.toUpperCase();
  };
  
  upperCase(hacker1);
  
  // task 3.2
  function reverse(name) {
    let endResult = "";
    
    for (let i = name.length-1; i >= 0; i--) {
      endResult = endResult + name[i];
    };
    return(endResult);
  };
  
  reverse(hacker1);
  
  // task 3.3
  function alphabetical(name, name2) {
    let alphabeticalOrder = name.localeCompare(name2);
    if (alphabeticalOrder === -1) {
      return "The driver's name goes first.";
    } else if (alphabeticalOrder === 1) {
      return "Yo, the navigator goes first definitely.";
    } else {
      return "What?! You both have the same name?";
    }
  };
  
  console.log(alphabetical(hacker1, hacker2));

// Bonus 1

const generatedParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est lacus. Sed eu lectus vel est rhoncus hendrerit. Morbi a diam vel urna ornare aliquet sed eget nunc. Nullam porttitor libero sit amet suscipit ullamcorper. Donec nibh arcu, efficitur sagittis arcu eget, fringilla rhoncus turpis. Aliquam fringilla leo ac sapien finibus porttitor. Sed vestibulum porta lectus, eu sollicitudin purus ullamcorper in. Cras eleifend velit in elit molestie, sed semper lacus eleifend. Cras in gravida purus. Duis ultrices purus non ante hendrerit, sit amet venenatis turpis mollis. Pellentesque at semper purus. In massa purus, posuere sed suscipit eu, feugiat eget arcu. Etiam dignissim, felis nec fringilla sagittis, libero dolor sagittis nibh, eu vehicula leo sapien ac dolor. Vestibulum vel pretium magna, et ultricies augue. Mauris nisl lorem, faucibus ut nibh vitae, tincidunt euismod sapien. Nullam malesuada ligula eu orci consequat rhoncus. Cras eget dolor magna. Vivamus semper vestibulum nisi non dignissim. Donec interdum mi turpis, gravida sollicitudin urna lacinia volutpat. Nam consectetur sapien id felis luctus pulvinar. Vivamus ligula orci, efficitur non blandit ac, accumsan fermentum neque. Sed vel venenatis purus. Etiam tempus sodales nisl. Nunc gravida nec sem vitae luctus. Curabitur eget nunc interdum diam pellentesque sollicitudin nec et dolor. Sed ornare nunc vitae consequat tempus. Etiam aliquet fermentum mauris ac rhoncus. In nisl purus, faucibus ac nulla sed, condimentum pharetra enim. Sed accumsan eros id sem pretium vulputate. Aenean aliquet iaculis auctor. Nulla facilisi. Quisque et cursus ex, nec sagittis nunc. Etiam vel blandit mi. Vestibulum vehicula bibendum sem et dictum. Integer ornare dui vel quam vehicula, non tincidunt est aliquam. Etiam ut tristique diam."

function countWords(str) {
    let counter = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ' ') {
            counter +=1;
        }
    }
    return counter+1;
};

console.log(countWords(generatedParagraphs));


function countOccurrences(str, searchedWord) {
    let counter = 0;
    let word = str.split(' ');
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === searchedWord) {
            counter += 1;
        }
    }
    return counter;
}

console.log(countOccurrences(generatedParagraphs, 'et'));

// Bonus 2

const phraseToCheck = 'saippuakivikauppias';

function palindromeCheck(phrase) {
    let reversePhrase = ""; 
    for (let i = phrase.length-1; i >= 0; i--) {
        reversePhrase = reversePhrase + phrase[i];
    };
    if (phrase === reversePhrase) {
        return true
    } else {
        return false
    }
}

console.log(palindromeCheck(phraseToCheck));