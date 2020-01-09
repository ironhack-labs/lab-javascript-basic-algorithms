// Iteration 1: Names and Input

var hacker1 = "Yuval";
console.log (`The driver's name is ${hacker1}`);

var hacker2 = "María";
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

// Iteration 3: Loops

var capitalLetters = "";
for (let i=0; i < hacker1.length; i++) {
    capitalLetters += hacker1[i].toUpperCase() + " ";
};
console.log(capitalLetters);

var reverseOrder = "";
for (let i = (hacker2.length-1); i>=0; i--) {
    reverseOrder += hacker2[i];
};
console.log(reverseOrder);

var LexicOrder = hacker1.localeCompare(hacker2);

if (LexicOrder>0){
    console.log("Yo, the navigator goes first definitely");
} else if (LexicOrder<0){
    console.log("The driver's name goes first.");
} else {console.log("What?! You both have the same name?");}

// Bonnus 1:

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac tortor mattis, luctus lacus quis, mattis tortor. Nam elementum lobortis dui. Aliquam convallis elit ligula, vitae ultrices tortor sollicitudin ut. Sed tristique nulla a interdum varius. Nunc porta vehicula velit. Suspendisse feugiat, dolor nec dapibus malesuada, urna felis rhoncus nulla, non rutrum nibh lectus in elit. Donec malesuada elit erat, a scelerisque ante pharetra eu. Curabitur pellentesque enim est, eu tempus metus hendrerit a. Sed fringilla non velit in luctus.

Donec rutrum ut velit sed varius. Cras viverra, mi in vulputate laoreet, elit sem volutpat quam, vitae ornare elit est sed tellus. Etiam aliquet porttitor neque. Vivamus elementum aliquet suscipit. Mauris molestie eleifend felis, quis gravida est convallis gravida. Donec at turpis ut nisi condimentum sodales in vel tortor. Sed turpis neque, venenatis eu risus vel, consequat imperdiet leo. Integer nec urna urna. Mauris ac ante dui. Ut ullamcorper metus vel rhoncus posuere. Sed blandit felis dolor, a bibendum enim pellentesque nec. Ut volutpat dui rutrum odio condimentum ultrices. Phasellus et varius mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum feugiat sollicitudin.

Pellentesque massa justo, scelerisque eget sapien quis, ullamcorper volutpat nisi. Aliquam vehicula velit eu ex luctus consequat. Donec id sapien quis dui pharetra congue. Donec in mauris a leo pretium blandit. Nulla velit massa, molestie ac pretium eget, consectetur non ex. Sed lacinia nisl est, ut dapibus erat fringilla non. Pellentesque rhoncus est elementum eros dictum vestibulum. Phasellus feugiat mi at nibh eleifend, id vestibulum lectus vulputate. Nulla quis metus mi. Suspendisse maximus erat eu urna venenatis, quis lacinia enim finibus. Integer malesuada iaculis justo, vitae sagittis erat dictum id. Nulla sit amet bibendum neque. Donec sed orci est.`;

function wordCount(str) {
    console.log((str.split(/\s+/gi).length));
    }

wordCount(text);

//284

function wordNumber (str,word){
    var n = 0;
    for (let i=0;i<str.split(/\s+/gi).length;i++){
    if(str.split(/\s+/gi)[i]=== word){n++};
    }
    console.log(n);
}
    
wordNumber (text,'et');

// Bonnus 2:

var phraseToCheck = `stack cats`;

function palindrome(phrase){
    var wordArr = phrase.split(/\s+/gi).join();
    if(wordArr.split(``).reverse().join().toLowerCase().replace(/,/g,``)===wordArr.split(``).join().toLowerCase().replace(/,/g,``)){
        console.log (`Is a Palindrome!`);
    } else {`Is not a Palindrome`;}
}

palindrome (phraseToCheck);





