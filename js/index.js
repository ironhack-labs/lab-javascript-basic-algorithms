// Iteration 1: Names and Input
let hacker1 = 'Logan';
console.log(`The driver\'s name is ${hacker1}`);

let hacker2 = 'Habid';
console.log('The navigator\'s name is ' + hacker2)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name. It has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length ){
  console.log(`The navigator has the longest name. It has ${hacker2.length} characters`);
}else{
  console.log(`Both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops
let  nametoUpperCaseName = ' '

for(let i = 0; i < hacker1.length; i++){
  nametoUpperCaseName += hacker1[i].toUpperCase()+ ' ';
}
console.log(nametoUpperCaseName);

let reverseName = ' '

for(let i = hacker2.length - 1; i >= 0; i--){
  reverseName += hacker2[i];

}

let lexicoGraphicOrder = [hacker1, hacker2];
lexicoGraphicOrder= lexicoGraphicOrder.sort()

if(lexicoGraphicOrder[0] == lexicoGraphicOrder[1]){
  console.log('What?! You both have the same name?')
} else if (lexicoGraphicOrder[0]=== hacker1){
  console.log('The driver\'s name goes first')
  } else if(lexicoGraphicOrder[0]=== hacker2){
    console.log('Yo, the navigator goes first definitely')
  }

  
  //bonus 1:
const paragraphs3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur tristique purus, ac blandit est dapibus quis. Duis sit amet risus in arcu dapibus semper ut nec nunc. Mauris congue felis a elit malesuada, eu dapibus lorem gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus facilisis facilisis ligula non laoreet. Mauris dapibus dapibus dictum. Nulla vitae vulputate nibh, vel vestibulum lorem. Pellentesque vulputate lorem id tempus mollis.Suspendisse potenti. Mauris tincidunt metus eu metus gravida molestie. Donec augue dolor, rutrum non odio aliquet, maximus convallis erat. Duis non lorem sit amet arcu varius tincidunt. Integer non velit id nibh consectetur fringilla quis eget risus. Vestibulum nec iaculis augue. Proin non fermentum nulla.Fusce semper lobortis erat, dignissim accumsan metus. Sed porta ac ligula in auctor. Morbi mollis sit amet urna nec congue. Praesent maximus nisl eu lacinia ornare. Duis rutrum eros quis justo congue viverra. Fusce sit amet nisi augue. Integer varius volutpat nisi, eu blandit ex congue vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis volutpat posuere dui, non lacinia felis suscipit vel. Nam id tellus tortor. Ut sit amet molestie neque, quis sodales dui."
  
    
  function WordCount(str) { 
  return str.split(" ").length;
}
console.log(WordCount(paragraphs3));

console.log(paragraphs3.match(/et/g).length);


//Bonus 2:
let phraseToCheck = 'step on no pets'

function palindrome(str) {
 let re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 let len = str.length;
 for (let i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
palindrome(phraseToCheck);