// Iteration 1: Names and Input
    console.log("I am ready");
    
    let hacker1="Kama";
    const message= "The Driver's name is " + hacker1 + "!";
    console.log (message);
    
    
    let hacker2="George";
    const message2= "The Navigator's name is " + hacker2 + "!";
    console.log(message2);
    


// Iteration 2: Conditionals

 if(hacker1.length > hacker2.length ){
        console.log ("The driver has the longest name, it has " + hacker1.length +  "characters");
    } else if (hacker2.length > hacker1.length) {
        console.log ( "it seems The navigator has the longest name, it has " + hacker2.length + " characters" );
    }
    else{console.log ("Wow, you both have equally long names, " + hacker1.length +  "characters");
        }


// Iteration 3: Loops

    let capName = hacker1.toUpperCase();
    let sprtChar= capName.split('').join(' ');
    console.log (sprtChar);



let rvrseName = hacker2.split('').reverse().join('');
console.log(rvrseName);

    
     if(hacker1 > hacker2){
        console.log ("The driver's name goes first.");
    } else if (hacker2 > hacker1) {
        console.log ("Yo,the navigator goes first, definetly" );
    }
    else{console.log ("What?! You both have the same name?");
        }
    
// Bonus 1 :

let longText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem libero, pharetra quis sagittis id, porttitor in lorem. Sed eget enim eu sem vestibulum tincidunt. Praesent vulputate sit amet quam nec dapibus. Vestibulum sed arcu ante. Mauris et gravida felis. Integer et posuere mi. Phasellus condimentum ex vel finibus rutrum. Nam leo est, pretium vel enim et, ultrices varius nulla. Aliquam non consectetur risus. Sed ullamcorper ornare diam vitae tempus. Nulla dictum enim libero, sed tempus velit aliquet ac.  Vivamus ut velit egestas, porttitor elit pretium, sollicitudin neque. Aenean orci ex, commodo ac luctus ac, elementum sed lectus. Suspendisse consectetur lacus erat, ac imperdiet felis bibendum at. Duis ac purus ex. Fusce consectetur urna sed tempor sagittis. Vivamus semper nec dolor ac tempus. Sed consequat metus id enim aliquam euismod. Nunc euismod pulvinar odio, nec elementum mi gravida sit amet. Sed consequat nulla ligula, at convallis ligula dapibus vel. Pellentesque at ultrices lectus. Curabitur quis mauris scelerisque, vestibulum purus eu, feugiat orci. Fusce vitae dolor eu dui feugiat feugiat. Nulla ornare consectetur tellus, sed iaculis ex auctor eget. Nulla vitae tortor in urna bibendum posuere eu ac nisi. Donec imperdiet consectetur malesuada. Fusce laoreet leo non metus aliquam laoreet.Suspendisse fringilla quam ut ornare viverra. Vestibulum vitae egestas justo. Suspendisse at sagittis nunc. Maecenas tortor eros, porttitor ut mi a, porta ornare mi. Suspendisse aliquam aliquet tempus. Nunc varius ullamcorper orci vitae tristique. Cras hendrerit porta metus, vel tempus libero blandit et. Donec pharetra imperdiet tortor, ut rhoncus mauris. Duis tristique interdum placerat. Vestibulum ornare tempus eros, et iaculis turpis scelerisque et. Sed vel metus a lacus dapibus varius. Pellentesque mollis lectus nec justo egestas suscipit. Vestibulum efficitur consequat orci ac varius. Cras nisl ex, aliquet ac ipsum et, luctus feugiat lectus."

    let NumWords = longText.split(' ').length;
    console.log ("This paragraph has " + NumWords + " words in it.");
    
    const wordToCount = "et";
    const words = longText.split(' ');
    let wordCount = 0;
    
    for (let i=0;i < words.length; i++){
        if (words[i]==wordToCount){
            wordCount++;
        }  
    }
    console.log ("The word " + wordToCount + " appears " + wordCount + " times in the above text" );


//Bonus 2 
let phraseToCheck = "race car";
let normalPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]/g, "");
let isPalindrome = true;

for(i=0; i< normalPhrase.length/2 ;i++){
    if(normalPhrase[i] !== normalPhrase[normalPhrase.length-1-i] ){
        isPalindrome=false;
        break;
    }   
}

if (isPalindrome) {
  console.log(+phraseToCheck+ " is a palindrome.");
} else {
  console.log(+ phraseToCheck + " is not a palindrome.");
}




