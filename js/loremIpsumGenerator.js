/* Bonus 2
Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

var text = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. ";

//Generate lorem ipsum text paragraphs
function generateLoremIpsumText(numberOfParagraphs){
    
    let result = "";
    
    for(let i=0;i<numberOfParagraphs;i++){
        for(let j=0;j<10;j++){
            result += text;
        }
        result += "\n";
    }

    return result;
}

//Count number of words in a given string.
function getNumberOfWordsInAString(inputText){
    return inputText.split(" ").length;
}

//get the count of any given word in a given string
function getNumberOfOccurences(inputText, wordToBeSearched){
    let counter = 0;
    let inputTextArray = inputText.split(' ');

    for(let i=0;i<inputTextArray.length;i++){
        if(inputTextArray[i].includes(wordToBeSearched)){
            counter++;
        }   
    }
    return counter;
}

/* Test samples */

let loremText = generateLoremIpsumText(3);
console.log(loremText);

const numberOfWords = getNumberOfWordsInAString(loremText);
console.log(`Total number of words in lorem ipsum text is ${numberOfWords}`);

const count = getNumberOfOccurences(loremText, 'et');
console.log(`count of word 'et' in loremText is ${count}`);