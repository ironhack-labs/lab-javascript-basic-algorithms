// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Nahum"

//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Paola"

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker1}`);
//
// Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:

let hacker1Length = hacker1.length
console.log(hacker1Length)
let hacker2Length = hacker2.length
console.log(hacker2Length)

if( hacker1Length > hacker2Length ){
  
  console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
	
	} else if( hacker1Length < hacker2Length ){
    
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
    
  }else{
    
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
    
  }
  


// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let separatedName = ""

for ( let i = 0 ; i < hacker1Length ; i++ ) {
 separatedName = separatedName + hacker1[i] + " "
}
 console.log(separatedName);
 
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = ""
let lastLetter = hacker1Length-1

for(let i = lastLetter ; i >= 0 ; i--){
  reverseName = reverseName + hacker1[i];
  
}
console.log(reverseName)

//3.3 Depending on the lexicographic order of the strings, print:
let names = [hacker1 , hacker2];
let orderedNames = names.sort()
console.log(orderedNames);

if(orderedNames[1] == orderedNames[0]){
  console.log("What?! You both have the same name?");
} else if (orderedNames[0] === hacker1){
  console.log("The driver's name goes first.");
} else{
  console.log("Yo, the navigator goes first definitely.")
}


//BONUS 1

// Generate 3 paragraphs. Store the text in a variable type of string.

threeParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie, lacus ut eleifend faucibus, neque sapien commodo odio, eget vehicula augue quam ut ligula. Nullam aliquam diam massa, sit amet ultrices tellus pharetra vel. Nunc sit amet varius leo. Mauris sit amet laoreet tellus, nec laoreet arcu. Curabitur fermentum pulvinar dui. Vestibulum posuere mi risus, nec imperdiet turpis pellentesque eu. Vivamus euismod interdum urna ac tincidunt. Mauris volutpat tincidunt ornare. Duis ut laoreet massa, a mattis risus. Cras porta risus nulla, eu sodales nisi rhoncus vel.Nulla nec vehicula quam, ut porta ante. Sed ut elit mollis, posuere velit et, lacinia augue. Nam orci eros, maximus accumsan suscipit ac, hendrerit at lorem. Quisque non luctus ex. Mauris finibus congue lobortis. Maecenas suscipit ligula vitae interdum imperdiet. Proin eu ex sed eros commodo tristique. Proin quis lorem faucibus, fringilla mauris quis, maximus mi. Praesent elementum sem non urna efficitur, sed dapibus ipsum vestibulum. Donec vel purus at tortor posuere bibendum. Nullam a ante vitae metus accumsan faucibus. Fusce non urna lobortis, auctor diam vel, blandit urna.Duis ultricies commodo risus, ultrices tincidunt purus porta sit amet. Sed sagittis velit id eleifend gravida. Etiam tristique nisl elit, at feugiat lacus cursus nec. Maecenas dapibus pharetra sollicitudin. Quisque maximus ligula interdum tincidunt gravida. Fusce sit amet massa in nisl commodo hendrerit at vitae leo. Fusce viverra, ligula dictum egestas volutpat, arcu lorem condimentum metus, in dapibus orci nulla ut magna. Nullam vestibulum, nisl vel dictum sollicitudin, nunc nibh cursus lacus, ac molestie massa nisi vel lectus. Curabitur ornare, dui nec fringilla pulvinar, tortor neque aliquet augue, vulputate imperdiet ipsum ex vitae augue. Vivamus interdum, ex a pellentesque placerat, eros dolor ultricies orci, a finibus turpis est et odio. Phasellus ornare erat ac tortor scelerisque vehicula. Ut eget egestas sem, eget ornare dolor. Ut interdum interdum dapibus. Etiam consequat lorem et tristique tempor. Morbi viverra ipsum vel tincidunt fermentum. Pellentesque tempor efficitur imperdiet."

// Make your program count the number of words in the string.

let wordByWord = threeParagraphs.split(' ');
//console.log(wordByWord)
let countWords = wordByWord.length
console.log("There are " + countWords + " words in this paragraph");

// Make your program count the number of times the Latin word et appears.

countEt = 0
for ( i = 0 ; i <= countWords ; i++){
    if(wordByWord[i] == "et"){
        countEt = countEt + 1;
    }
}
 console.log(`There are ${countEt} words 'et' in the 3 paragraphs.`);


//BONUS 2

var phraseToCheck = "Was it a car or a cat I saw?"

phraseToCheck = phraseToCheck.replace(/\W/g, '')
phraseToCheck = phraseToCheck.toLowerCase()
console.log(phraseToCheck);

lastLetterPhrase = phraseToCheck.length
console.log(lastLetterPhrase)
reversePhrase = ""

for (let i = lastLetterPhrase-1 ; i >= 0 ; i--){
    reversePhrase = reversePhrase + phraseToCheck[i];
  }

  console.log(reversePhrase);

if (phraseToCheck == reversePhrase){
    console.log(`${phraseToCheck} is a palindrome!`)
} else{
    console.log(`${phraseToCheck} is NOT a palindrome!`)
}


