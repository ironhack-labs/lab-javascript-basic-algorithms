// Iteration 1: Names and Input

var hacker1 = "Frederico";
console.log(`The driver's name is ${hacker1}`)

var hacker2 = "Alice"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '))

var reverseName = "";
for (var i=hacker2.length-1; i>=0; i--){
    var lettersHacker2 = hacker2[i];
    reverseName = reverseName + lettersHacker2
}
console.log(reverseName)

for (i=0, j=0; (i<hacker1.length) && (j<hacker2.length); i++, j++){
    var letterHacker1 = hacker1[i];
    var letterHacker2 = hacker2[j];
    
    if (letterHacker1 === letterHacker2) {
      continue;
    }
    
    else if (letterHacker1 > letterHacker2) {
        console.log("Yo, the navigator goes first definitely")
        break;
    }
    else if (letterHacker1 < letterHacker2) {
        console.log("The driver's name goes first")
        break;
    }
    else {
        console.log("What?! You both have the same name?")
    }
}

// Bonus 1 

var paragraphe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget diam molestie, laoreet nisl sit amet, maximus diam. Sed sed semper ex. Suspendisse potenti. Duis sagittis a purus vitae semper. Mauris dapibus lorem vitae eros vehicula, eget vulputate ipsum tempus. Maecenas a tincidunt neque. Cras interdum lacus tellus, vehicula consectetur leo sollicitudin sed. In convallis ex nec finibus sollicitudin. In facilisis pharetra aliquam. Morbi sollicitudin ultricies mi, sed rhoncus mi interdum vitae. Nunc non felis sed velit rutrum venenatis. Pellentesque placerat felis facilisis erat tristique, nec varius lectus aliquam. Morbi ut viverra metus, ac bibendum dui. Mauris ante est, bibendum ac pretium ut, dignissim quis sapien."

function countWord(string){
    var howManyWords = 1;
     if (string.length === 0){
          howManyWords--
        }
    
        else {
          for (let i = 0; i<string.length; i++){
            if (string[i] === " "){
              howManyWords++;
            }
          }
        }  
    return howManyWords
    }

    function countEt(string){
        var howManyEt = 0;
        for (let i = 0; i < string.length; i++){
            if(string[i] + string[i+1] + string[i+2] + string[i+3] === " et "){
                howManyEt++
            }
        }
        return howManyEt
    }

    // Bonus 2

    var phraseToCheck = "Amor, Roma"

    // V1 

    function isPalindrome(string){
        
        var lowerString = string.toLowerCase();

        var lowerStringWoSpace = "";
        for (var i = 0; i < lowerString.length; i++) {
          var letter = lowerString[i];
          if (letter === " " || letter === "," || letter === "." || letter === ";" || letter === "?" || letter === "!") {
            continue;
          }
          else {
            lowerStringWoSpace += letter;
          }
        }

        var reverseString = "";
        for (var j = lowerStringWoSpace.length-1; j >= 0; j--) {
          reverseString += lowerStringWoSpace[j];
        }

        if (lowerStringWoSpace === reverseString) {
          console.log('The string is a palindrome.')
        }
        else {
          console.log('The string is not a palindrome.')
        }
      }
      isPalindrome(phraseToCheck);

      // V2 - Avec aide internet, pour faire moins long 
     
    function isItaPalindrome(str){
        var removePonct = /[^A-Za-z0-9]/g
        var words = str.toLowerCase().replace(removePonct,'')
        for (let i = 0; i<words.length/2; i++){
            if(words[i] === words[words.length - 1 - i]){
                continue;
            }
            else {
                return false
            }

        }
        return true;
    }

