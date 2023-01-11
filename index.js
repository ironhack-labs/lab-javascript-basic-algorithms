console.log("I'm ready!");
let hacker1 = "driver"
console.log(`The driver's name is ${hacker1}`);
let hacker2 ="navigator"
console.log(`The navigator's name is ${hacker2}`);

console.log(hacker2.length);

if ( hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
}
if(hacker1.length > hacker2.length){
  console.log(`It seems that the driver has the longest name, it has ${hacker1.length} characters!`)
}

let driversName = "J"+" "+"o"+" "+"h"+ " "+"n" ;

let nameCapitalLetters = driversName.toUpperCase();

console.log(nameCapitalLetters);


let nameCapitalLettersReserved = "";
let navigator = "John" 
for(let i = navigator.length - 1; i >= 0; i--){
  const char = navigator[i]
  nameCapitalLettersReserved += char ;
  }
console.log(nameCapitalLettersReserved);



if ( hacker1 < hacker2){
  console.log(`The ${hacker1} is the first`);
}
else if ( hacker2 < hacker1){
console.log(`Yo, the ${hacker2} is the first definitely`);
}
else if ( hacker1 === hacker2 ){
  console.log(`What?! You both have the same name?`);
}
else {
  console.log(`Nobody is the first`);
  
}


/*Bonus*/

const longString = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat sapien. Vestibulum in aliquam quam. Fusce ut urna pharetra, accumsan libero et, molestie nulla. Vestibulum interdum nisi lacinia, porttitor odio eu, gravida orci. Duis eu ligula sed sem luctus lacinia ac vitae lectus. Aenean ac nisl maximus, auctor sem at, condimentum magna. Pellentesque ultricies erat a dolor posuere luctus. Aliquam erat volutpat. Cras lorem nisi, porta quis eros quis, finibus colet modo nisl. Nulla in pretium lacus. Praesent orci lorem, consectetur at consequat tincidunt, ultrices quis nulla. Etiam quis dignissim massa, ac imperdiet eros.,Donec gravida, lectus sit amet rutrum malesuada, tortor erat hendrerit nunc, vitae feugiat mi elit quis est. Suspendisse potenti. Donec sit amet massa nisl. Phasellus eros nisi, interdum at leo lobortis, tempor feugiat sem. Maecenas nec consectetur sem, at porta metus. Vivamus iaculis ipsum eu accumsan pulvinar. Etiam aliquam ligula eu ultricies accumsan. Nunc condimentum sodales mi, non maximus nisi pellentesque eu. Sed sed quam sollicitudin, pretium mauris id, iaculis tellus. Vivamus augue metus, accumsan mattis mollis sed, lobortis vitae lorem. Ut in eros ac nulla placerat venenatis. Morbi eu arcu quis ligula lobortis ultricies at sed turpis. Cras bibendum maximus quam eget porttitor. Mauris iaculis varius arcu, a vestibulum urna malesuada at. Vivamus malesuada nisl quis odio convallis egestas. Donec id orci condimentum, tempus felis aliquet, pretium neque.Donec fringilla, purus non ultricies luctus, neque orci varius neque, vel placerat felis turpis ac lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras efficitur dui in porttitor iaculis. Nulla facilisi. Proin ac dignissim diam. Aenean auctor molestie mauris, ac sodales lectus varius ac. Maecenas gravida diam ac orci efficitur porta. In non tincidunt risus, non lobortis arcu. Nam vitae diam vulputate, auctor velit pulvinar, viverra massa. Vivamus bibendum libero non laoreet posuere. Sed mollis ante in elit vulputate, quis tempor neque molestie. Pellentesque commodo, magna eu cursus tempor, dui augue iaculis nulla, non gravida tortor nisi sit amet arcu ."


let counter= 0;
for ( let i = 0; i < longString.length; i++){
  
  if ( longString[i] === " "){
  counter++;
}
}
console.log(counter);

let etcounter = 0;
for ( let i = 0; i <longString.length; i ++){
  if (  longString[i] + longString[i +1] === "et"){
    etcounter++;
  }
}
console.log(etcounter);


const phraseToCheck = "taco cat"
let phraseForward = "";

for ( let i = 0; i < phraseToCheck.length; i++){
  if(phraseToCheck[i] !== " "){
    phraseForward += phraseToCheck[i];
  }
}

  let phraseReverse = "";

for ( let i = phraseForward.length -1 ;  i >= 0; i --) {
  phraseReverse += phraseForward[i] ;
}
if (phraseReverse === phraseForward){
  console.log(`It's a palindrome`);
}
 else {
   console.log(`It's not`);
}
 
console.log(phraseForward);
console.log(phraseReverse);

