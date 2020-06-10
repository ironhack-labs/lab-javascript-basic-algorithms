// Iteration 1: Names and Input
var hacker1="Marie";
console.log(`the driver's name is ${hacker1}.`);
var hacker2="Maya";
console.log(`the navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
    console.log(`the driver has the longest name. It has ${hacker1.length} characters`);
    }
else if(hacker1.length<hacker2.length){
    console.log(`the navigator has the longest name. It has ${hacker2.length} characters`);
}
else {console.log(`waow you both have equally long names ${hacker2.length} characters`)}

// Iteration 3: Loops

//3.1 

function capitalSpace (str) {
  var newName = ' ';
    for (let i=0; i<str.length; i++) {
    newName += str[i].toUpperCase()+" ";
  }
  return newName;
}
console.log (capitalSpace(hacker1));

// var newName=hacker1.toUpperCase();
// console.log(newName);
// console.log(newName.split(''));

//3.2 
function reverseString (str) {
  var hacker2Reversed = '';
  for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reversed +=  hacker2[i];
    }
    return hacker2Reversed
}
console.log (reverseString(hacker2));



// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString(hacker2));

if(hacker1<hacker2){
    console.log("the driver's name goes first");}
else if (hacker2<hacker1){
        console.log("Yo, the navigator goes first definitely");
    }
else{console.log("What?! You both got the same name?");
}

var paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis eleifend ante, eget gravida velit. Aliquam nec eleifend justo. Pellentesque mattis purus eu arcu lobortis, nec pretium sem elementum. Duis quis pellentesque leo, vel ornare nisl. Praesent imperdiet ultricies lorem, nec maximus sem scelerisque quis. Aliquam eu tincidunt mi. Vivamus vel risus ligula. Suspendisse quis aliquet augue, ac bibendum eros.Cras rutrum metus eget consequat finibus. Aliquam quis ligula eget purus tempus tempus sed auctor dolor. Vestibulum efficitur ligula in enim accumsan, egestas auctor enim bibendum. Ut finibus ultricies libero eget ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer efficitur, augue et eleifend ullamcorper, lorem sapien varius sapien, feugiat tristique lacus nulla a dui. Nullam bibendum leo nec arcu condimentum, eu volutpat dui fringilla. Ut faucibus massa in mauris vestibulum pellentesque. Suspendisse vestibulum vestibulum orci non accumsan. Nulla rhoncus hendrerit urna, quis luctus dolor dictum vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi posuere, quam nec accumsan consequat, nunc neque efficitur nibh, sed faucibus dolor tortor bibendum nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit scelerisque tellus, vel hendrerit libero vehicula non. Morbi pulvinar eleifend eros, in bibendum ex ultrices vel. Proin lorem purus, eleifend eu ullamcorper auctor, faucibus sed arcu. Nullam ex arcu, sagittis ut lacinia a, condimentum sed elit. Nulla ut vehicula odio, vel pulvinar metus. Curabitur malesuada purus neque, non finibus nisi consequat et. Curabitur ultrices scelerisque massa, ut mattis dui.";

function numberOfWords(str){
  var total=1;
  for (let i=0;i< str.length; i++){
  if (str[i]===" "){
      total += 1;
      }
   }
  return total;
  }

  console.log (numberOfWords(paragraphe));

  //trouver sur internet mais j'ai pas tout compris haha :) 
var count = (paragraphe.match(/et/g) || []).length;
console.log(count);

