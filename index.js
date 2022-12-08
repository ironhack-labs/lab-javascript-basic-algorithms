// Iteration 1: Names and Input
//-------------------------------------------------

let hacker1 = "Sunak"; //for testing
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Johnson"; //for testing
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
//-----------------------------------------------
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    
}


// Iteration 3: Loops
//3.1-----------------------------------------
let nameWithSpaces = "";
for (let i = 0; i<hacker1.length;i++){
    nameWithSpaces+= hacker1[i].toUpperCase() + " ";
}
console.log(nameWithSpaces.slice(0, nameWithSpaces.length-1));


//3.2-------------------------------------------

let reverseName = "";
for (let j = hacker2.length-1; j>=0; j--){
    reverseName += hacker2[j];
}
console.log(reverseName);


//3.3-------------------------------------------

if (hacker1.localeCompare(hacker2) === 1){
    console.log(`${hacker2} goes first`)
}
else if (hacker1.localeCompare(hacker2) === -1){
    console.log(`${hacker1}goes first definitely`)
}
else{
    console.log(`What?! You both have the same name?`)
}


//BONUS 1
//------------------------------------------------

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tincidunt enim tincidunt tincidunt. Suspendisse luctus mattis nibh id ultricies. Sed laoreet venenatis ornare. Aliquam erat volutpat. Integer congue tincidunt magna, at pretium massa efficitur id. Vivamus suscipit bibendum mi. Curabitur facilisis dolor vel accumsan venenatis. Aenean ut libero sit amet ipsum rutrum sollicitudin in sit amet massa. Phasellus eget convallis tortor.

Vestibulum eget auctor nibh. Donec tincidunt est urna, vitae efficitur erat lobortis sed. Donec iaculis tortor scelerisque, laoreet velit vitae, fringilla purus. Mauris egestas luctus nibh eget lobortis. Duis lacinia ligula quis aliquet euismod. Phasellus pretium semper quam. Donec at accumsan urna. Aenean id nulla molestie, pharetra nibh eu, facilisis eros. Phasellus est quam, tincidunt ac erat non, lobortis scelerisque libero.

Sed orci nulla, iaculis et tortor sit amet, varius volutpat nisi. Aliquam pretium non mi nec tincidunt. Morbi nec gravida velit, sed scelerisque urna. Duis laoreet imperdiet dolor, in commodo ex sollicitudin nec. Sed varius, nibh volutpat pharetra viverra, lectus risus porttitor augue, ac ullamcorper massa sem ac leo. Vestibulum condimentum porta dolor a sagittis. Integer aliquam mollis felis eget convallis. Maecenas vehicula a leo a pretium. Nam massa sem, faucibus ut dictum ac, imperdiet sed metus. Integer imperdiet nulla nec ornare ornare. Sed tristique molestie massa, vitae ultrices lectus viverra at. In nec nisl vel leo viverra pretium vel sed tellus. Aliquam tempus, risus sit amet porta rutrum, justo eros dignissim risus, eu sollicitudin orci quam ut justo. Donec auctor metus eget dolor suscipit, ut consequat libero feugiat.`;


function wordCount(text){
    let countingSpaces = 0;
    
for (let i = 0; i<text.length;i++){
    if (text[i]===" "){
        countingSpaces+=1
    }
}
return countingSpaces+1;
}

console.log(wordCount(longText));


//BONUS 2
//-----------------------------------------

let phraseToCheck1 ="LA man, a plan, a canal, Panama!"; // COMMA, SPACE AND EXCLAMATION MARK
let phraseToCheck2 ="Amor, Roma"; //SPACE
let phraseToCheck3="race car"; //SPACE
let phraseToCheck4 ="stack cats"; //SPACE
let phraseToCheck5 ="step on no pets"; //SPACE
let phraseToCheck6 ="taco cat"; //SPACE
let phraseToCheck7 ="put it up"; //SPACE
let phraseToCheck8 = "Was it a car or a cat I saw?"//SPACE & QUESTION MARK
let phraseToCheck9 ="No 'x' in Nixon" //SPACE & QUOTES   

function checkPhrase(phrase){
    
    // change all phrase to upperCase

    let upperPhrase = phrase.toUpperCase();

    // push all characters of the string into an array
    
    let phraseArray = [];
    for (let i = 0;i<upperPhrase.length; i++){
        phraseArray.push(upperPhrase[i]);  
    }
    
    // remove punctuation marks

    let phraseLength = phraseArray.length-1;

    for (let j = phraseLength;j>=0;j--){
        switch(phraseArray[j]){
            case ",":
            case "!":
            case "?":
            case "'":
            case " ":
            phraseArray.splice(j,1);
            break;      
        }           
    }

    // array back to string in forward order

    let forwardPhrase = "";
    for (let k=0; k<phraseArray.length;k++){
        forwardPhrase+=phraseArray[k]
    }

    // array back to string in reverse order
    
    let backwardPhrase = '';
    for (let k=phraseArray.length-1;k>=0;k--){
        backwardPhrase+=phraseArray[k]
    }
    
    //comparing values of forward and backwards strings

    if (forwardPhrase===backwardPhrase){
        return true
    }
    else{
        return false
    }
 }  

 //Returns true if Palindrome and False otherwise

console.log(checkPhrase(phraseToCheck1));
