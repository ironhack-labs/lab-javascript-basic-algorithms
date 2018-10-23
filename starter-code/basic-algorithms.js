// //NAMES AND INPUT
var hacker1 = 'francisco';

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

//CAPITALIZE
function capitalize(){
    for (var result = '', i = 0; i < hacker1.length; i++) {
        result += hacker1[i].toUpperCase() + ' ';
    }
    return result;
}
console.log(hacker1.split('').join(' ').toUpperCase());
console.log(capitalize(hacker1));


//REVERSE
function reverse(array){   
    for (var reversed = '', i = array.length -1; i >= 0; i--) {
        reversed += array[i];       
    }
    return reversed;
}

console.log(hacker1.split('').reverse().join(''));
console.log(reverse(hacker1));

// PALINDROME
var palindrome = prompt("enter a sentence").toLowerCase().split(' ').join(',').replace(/[0-9]|,|&|@|–|_|\/|"|!|%|\$/gi, '');

function isPalindrome(palindrome){
    if (palindrome === palindrome.split('').reverse().join('')) {        
        return 'is a palindrome';
    } 
    return 'is not a palindrome';
    
}
console.log(isPalindrome(palindrome));


var phrase1 = 'mkdkdmslketdsakmlkmdsakmdet';
var phrase2 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)';
var phrase3 = 'There are many variations et et eteof passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';

console.log(phrase1.split(' ').length);

function wordEt(phrase){    
    for (var counter = 0, i = 0; i < phrase.length; i++) {        
        if (phrase[i].includes('et')) {
            counter += 1;            
        }
    }
    return counter;
}

console.log(wordEt(phrase3.split(' ')));

