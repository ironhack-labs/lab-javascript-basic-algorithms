// Names and Input
const hacker1 = "Karen";
const hacker2 = "Heitor";
 
console.log ("The driver's name is " + hacker1);
console.log ("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The Driver has the longest name, it has ${hacker1.lenght} characters`);
} else if (hacker2.length > hacker1.length){
    console.log (`Yo, navigator got the longest name, it has ${hacker2.lenght} characters`);
} else {
    console.log (`Wow, you both got equally long names, ${hacker1.length} characters!!!`)
}

// let i = hacker1;
let newName = "";
for (i = 0;  i < hacker1.length; i += 1){
    newName += hacker1[i].toUpperCase() + " ";
}
console.log (newName);

let newName2 = "";
for (i = hacker2.length-1 ; i >= 0; i -= 1){
    newName2 += hacker2[i];
}
console.log (newName2);

// lexicographic order of the strings:
let stLetter = hacker1[0];
let ndLetter = hacker2[0];
let index1 = "";
let index2 = "";
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
for (let i = 0; i < alphabet.length; i += 1){
    if (stLetter === alphabet[i]){
        index1 = alphabet.indexOf(alphabet[i]);
    } 
    if (ndLetter === alphabet[i]){
        index2 = alphabet.indexOf(alphabet[i]);
    }
 }  if (index1 < index2){
    console.log ("The driver's "+ hacker1 +" goes first");
 } else if (index2 < index1){
    console.log("Yo, the "+ hacker2 +" goes first definitely");
 } else {console.log ("What?! You both got the same name?")};


// Bonus Time!
// Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:

let word = prompt("Insira uma mensagem, verificaremos PALINDROMOS");
let invert = "";
console.log(word.length);
for (let i=word.length-1; i>=0; i-=1){
   invert += word[i];
} 

if(word == invert){
    console.log("Uhuuu! That's Palindrome!");
} else {
    console.log("uh-oh, That is NOT Palindrome!");
}

// Lorem ipsum generator

// Go to lorem ipsum generator and:
// Generate 3 parragraphs. Store the text in a String

let lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu ipsum, ultricies at purus at, volutpat sagittis nulla. Cras quis sodales felis. Quisque eu arcu cursus, imperdiet libero et, tincidunt dui. Etiam suscipit turpis id ex molestie gravida. Nulla ac nulla id lacus ornare pharetra. Praesent purus sapien, mattis ut consectetur vel, mollis vitae turpis. Proin interdum odio porta, pellentesque est ut, hendrerit mauris. Nullam eget pretium sapien, vel mollis enim. Sed viverra est at purus semper vestibulum. Pellentesque sed ullamcorper justo. Vestibulum congue, elit vel vestibulum feugiat, velit mi euismod leo, ac porttitor dui tortor eget lorem. Vivamus consectetur justo augue, sed tincidunt nisl dignissim sit amet. Pellentesque sit amet venenatis neque. Maecenas gravida mollis augue, ut aliquam urna bibendum at. Proin eu felis malesuada, pretium tortor id, pretium justo. Sed eget quam eget dui pharetra finibus sit amet eget enim. Maecenas et tellus at justo interdum venenatis. Phasellus et enim a elit imperdiet ullamcorper. In tincidunt odio ut arcu luctus euismod. Proin malesuada felis nec massa gravida aliquet. Fusce gravida venenatis metus, id imperdiet quam rutrum quis. Donec quis condimentum justo. Vestibulum orci lacus, egestas sed justo quis, semper auctor lectus. Donec lorem urna, semper a molestie sed, ornare posuere velit. Nam scelerisque diam nunc, quis imperdiet sapien laoreet at. Nullam quis diam gravida, fermentum dui at, elementum enim. Duis in purus id lacus posuere vestibulum et id leo. Duis aliquam, tortor ac tempus auctor, nisl est tincidunt diam, vel rhoncus dolor nulla sit amet lectus. Morbi accumsan, massa eu semper sodales, risus purus facilisis lacus, vel ullamcorper est ipsum nec nulla. Nullam convallis urna et ultrices convallis. Praesent nec est arcu. Duis quis odio in nisl bibendum vestibulum at id diam. Nam nulla est, consequat id nunc vel, elementum auctor erat. Integer tempus, magna non tempus pretium, ligula nulla mollis lacus, tincidunt tempor ex dui ac lectus. Donec ut lorem vitae massa sodales ornare. Proin consectetur, velit quis elementum bibendum, massa tellus faucibus dolor, dapibus scelerisque magna magna ullamcorper mauris. Quisque viverra est et arcu luctus, sit amet semper tellus elementum. Nullam pellentesque orci nec massa cursus pellentesque."

// Make your program count the number of words in the string
let loremArr = lorem.split(" ");
console.log(loremArr.length);

// Make your program count the number of times the latin word 'et' appears
let timesEt=0;
for (let i=0; i<loremArr.length; i+=1){
    if (loremArr[i] === "et"){
        timesEt +=1;
    }
}
console.log (timesEt);