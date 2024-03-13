// Iteration 1: Names and Input

let hacker1 = "Saeideh";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Vinotha";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else{
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops

/******************3.1****************/
let upperCaseDriver = hacker1.toUpperCase();

let newStr=""; 

for(let i = 0 ; i<hacker1.length; i++){
    
    newStr += upperCaseDriver[i];
    if(i!== hacker1.length){
        newStr += " ";
    }
}
console.log(newStr);

/******************3.2****************/
let newHacker2= "";
for(i=hacker2.length-1; i>=0 ; i--)
{
    newHacker2 +=hacker2[i];
}
console.log(newHacker2);

/******************3.2****************/
lowerHacker1 = hacker1.toLowerCase();
lowerHacker2 = hacker2.toLowerCase();

const result = lowerHacker1.localeCompare(lowerHacker2);

 switch(result){

    case 1:
        console.log(`${hacker1} goes first.`) ;
        break;
    case -1: 
        console.log(`yo, ${hacker2} goes first, definitely.`);
        break;
    case 0:
        console.log(`What?! You both have the same name?`);
        break;
    default:
        console.log("Something is wrong!!!")
            
 }

 /****************** Bonus 1:****************/
 let wordCount= 0;
 let etItem = 0;
 let longText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?";

 for(let i = 0; i<longText.length; i++){
    if(longText[i]=== " "){
        wordCount += 1;
    }
    if(longText[i]==='e' && longText[i+1]==='t'){
        etItem ++;
    }
 }
  
 if(longText.length!=0){
    wordCount +=1;
 }
 console.log(`The number of words: ${wordCount}`);

 console.log(`The number of "et"'s Item : ${etItem}`);


/****************** Bonus 2:****************/


let phraseToCheck = "Was it a car or ad cat I saw?" 
let cleanedStr = phraseToCheck.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
console.log(cleanedStr);
let reverseStr = "";
for(let i = cleanedStr.length-1 ;i>=0; i--){
    reverseStr += cleanedStr[i];
}

if(reverseStr===cleanedStr){
    console.log("Phrase is a palindrome.");
}
else{
console.log("Phrase is not a palindrome.");
}




