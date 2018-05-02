// //NAMES AND INPUT
var hacker1 = 'fran';

console.log("the driver's name is ", hacker1);

var hacker2 = prompt("What's the driver's name? ");

console.log("The navigator's name is ", hacker2);

console.log(hacker1.length);
console.log(hacker2.length);

//CONDITIONAS
if(hacker1.length > hacker2.length){
    console.log('The driver has the longest name, it has ' + hacker1.length + ' characters');
} else if(hacker1.length === hacker2.length){
    console.log("wow, you both got equally long names, " +  hacker1 + ' and ' + hacker2);
    
} else{
    console.log('The navigator has the longest name, it has ' + hacker2.length + ' characters');
}


//LOOPS
//6
console.log(hacker1.split('').reverse().join(' '));

//7
console.log(hacker2.split('').join(' ').toUpperCase());

//9
var word = prompt('write a word to check if is a palindrome');
console.log(reverse(word));
function reverse(word){
    return word === word.split('').reverse().join('');
}

//10
var phrase1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
var phrase2 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)';
var phrase3 = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';


console.log(count(phrase3));
function count(phrase){
    return phrase.length;
}

console.log(wordEt(phrase1));
function wordEt(phrase){
    return phrase.match(/et/gi).length;
}
