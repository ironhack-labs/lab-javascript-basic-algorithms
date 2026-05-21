// Iteration 1: Names and Input
let hacker1='Elon';
console.log('The driver name is: ' + hacker1);
let hacker2 = 'Mark';
console.log('The navigator name is: ' + hacker2);


// Iteration 2: Conditionals
if(hacker1.length  > hacker2.length ){
    console.log('The driver has the longest name, has '+ hacker1.length + ' characters');
}else if(hacker1.length < hacker2.length){
    console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters');
}else{
    console.log('Both names have the same length');
}

// Iteration 3: Loops

let chars = hacker1.split('');
console.log(chars.join(' '));

let chars2 = hacker2.split('');
console.log(chars2.reverse().join(' '));

//Bonus1
let longText = `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;
let lowercaseText = longText.toLowerCase();
let words = lowercaseText.split(' ');
console.log('The number of words in the longText is: ' + words.length);
    
let counter = 0;
for(let i = 0; i<words.length; i++){
    if(words[i] ==='et'){
        counter++;
    }

}
console.log('The number of times the Latin word "et" appears is: ' + counter);


//Bonus2
let phraseToCheck = 'race car';
let cleanPhrase = phraseToCheck.toLowerCase();
let splitedPhrase= cleanPhrase.split('')
let stichedCaracters;
for(let i = 0; i<splitedPhrase.length; i++){
    if(splitedPhrase[i] !== ' '){
        stichedCaracters +=splitedPhrase[i];
    }
}

let reverseStichedCaracters;
for(let i = stichedCaracters.length -1; i>=0; i--){
    reverseStichedCaracters += stichedCaracters[i];
}
if (stichedCaracters ===reverseStichedCaracters){
    console.log('The phrase is a palindrome');
}else{
    console.log('The phrase is not a palindrome');
}
