//Iteration1

let  hacker1;
hacker1="Anna"
console.log(`The driver's name is ${hacker1}`)

let hacker2;
hacker2="Simon"
console.log(`The navigator's name is ${hacker2}`)

//Iteration2

let message;
switch (true) {
    case hacker1.length > hacker2.length:
        message = `The driver has the longest name, it has ${hacker1.length} characters`;
        break;
    case hacker1.length < hacker2.length:
        message = `It seems that the navigator has the longest name, it has ${hacker2.length} characters`;
        break;
    default: 
        message = `Wow, you have equally long names, ${hacker1.length} characters!`;
}
console.log(message);

//Iteration 3.1
let capitalName = "";

for (let i = 0; i < hacker1.length; i++ ) {
    capitalName += hacker1[i]. toUpperCase() + "\n";
}
console.log(capitalName); 

//Iteration3 3.2

function reverseName(name){
    let reversedName = '';
    for (let i = name.length - 1; i >= 0; i--) {
      reversedName += name[i];
    }
    return reversedName;
  }
  console.log(reverseName(hacker2));

//Iteration 3.3 

function compareNames(hacker1, hacker2) {
    if (hacker1 < hacker2) {
      console.log("The driver's name goes first.");
    } else if (hacker2 < hacker1) {
      console.log("Yo, the navigator goes first, definitely.");
    } else {
      console.log("What?! You both have the same name?");
    }
  }
    compareNames(hacker1, hacker2);

//Bonus 1

function countWords(inputString) {
    let words = inputString.trim().split(/\s+/);
    return words.length;
}

let longText = "Morbi eu ultricies est. Fusce venenatis, sem at aliquam condimentum, neque nulla luctus dolor, ac commodo lectus nisi quis nisl. Ut posuere tempor mauris, vitae gravida erat convallis in. Ut vitae mi purus. In porta ipsum id tincidunt viverra. Aliquam erat volutpat. Nulla ut rhoncus elit, id pharetra lacus. Aenean lobortis augue sit amet ullamcorper facilisis. Nunc nec elit aliquet, mollis sem sed, elementum massa. Quisque velit nulla, tempus iaculis pellentesque ac, hendrerit eget neque. Aenean aliquet vitae nisl a porttitor. Integer ultrices rhoncus elit et venenatis. Nunc at bibendum ligula. Morbi eleifend nisl augue, dignissim venenatis massa porta nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Maecenas quis ex nec mi ultrices congue at eu ex. Nullam justo tortor, pretium a nisi id, congue vulputate erat. Aenean luctus velit erat, vitae tempus mauris mollis et. Vivamus eu nunc id ante hendrerit iaculis eu eget est. Vivamus vitae lectus et dui auctor luctus. Aliquam consectetur felis sed ultrices fermentum. Donec sodales sem urna, sit amet lobortis dolor aliquam sit amet. Quisque rhoncus purus suscipit mauris condimentum fringilla non et tortor. Ut dictum, risus quis malesuada pretium, lacus dolor venenatis purus, sed viverra arcu mauris sed augue. Proin varius tincidunt tempor. Curabitur vitae efficitur neque. Quisque vel ultrices massa. Integer ut ex interdum, pulvinar dolor quis, posuere neque. Morbi quis lectus sed lectus sagittis scelerisque vitae ut felis. Suspendisse potenti. Phasellus eu tortor ultrices, convallis lectus vitae, porta lacus. Etiam vel ante tincidunt, tincidunt quam ac, viverra ex. Vestibulum mauris est, porttitor ac sem nec, ultricies tempor urna. Vestibulum interdum consectetur nulla, a congue dolor feugiat quis. Vestibulum fringilla vel tortor non facilisis. Curabitur lacus orci, mattis id elementum luctus, auctor vitae lectus. Nunc imperdiet libero nibh, non venenatis turpis aliquam eu. Nam eleifend congue tortor consectetur lacinia. Integer eu commodo lacus, vel tincidunt mauris.";

console.log(countWords(longText)); 

function countEtWord(inputString, etWord) {
    let words = inputString.trim().split(/\s+/);
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === etWord) {
            count++;
        }
    }
    return count;
}
let etWord = "et";

console.log(countEtWord(longText, etWord)); 
//Bonus 2

let phraseToCheck = "lalka";
let reversed = " ";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    reversed += phraseToCheck[i];
}
console.log(reversed);