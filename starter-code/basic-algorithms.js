// Names and Input

let hacker1 = 'Arnold';

console.log(`The driver's name is ${hacker1}`);

//let hacker2 = prompt("Name Navigator:", "kelly");

let hacker2 = "Kelly";

console.log(`The navigator's name is ${hacker2}`);

//Conditionals

if(hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker2.length > hacker1.length){
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)

} else{
  console.log("wow, you both got equally long names, XX characters!!")
}



//LOOPS

let nameUpperCase = hacker1.toUpperCase();
let newName = '';

for(i=0; i< nameUpperCase.length; i++){
  newName += nameUpperCase[i] + " "; 

}
console.log(newName);



let navigatorReverse='';
let sizeNavigator = hacker2.length-1;

for( k = hacker2.length-1; k >= 0; k--){
  navigatorReverse += hacker2[k];
}

console.log(navigatorReverse);



let result = hacker1.localeCompare(hacker2);

if(result > 0 ){
  console.log("The driver's name goes first");
} else if (result < 0) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}



// palindrome

let palindrome = prompt ("Digite nova palabra:");

let palindromeLowerCase = palindrome.toLowerCase().replace(re, '');

let tamanho = palindromeLowerCase.length;

for( x = 0; x < tamanho/2; x++){
  if(palindromeLowerCase[x] !== palindromeLowerCase[tamanho-1-x]){
     return console.log("No palindrome");
  } 

}


// Lorem ipsum generator
let numberOfWords = 1;
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt dignissim turpis, eget condimentum sem consectetur ut. Pellentesque commodo tristique magna, id hendrerit dui. Sed consectetur, lorem quis feugiat faucibus, justo ex facilisis justo, sed interdum tortor ante eget turpis. Aliquam erat volutpat. Cras sollicitudin semper urna, a aliquet tortor ullamcorper at. Vestibulum eu est quis lectus tempor facilisis. Nullam mollis mauris pretium, porta velit in, malesuada metus. Quisque et cursus nibh. Aliquam suscipit tellus molestie ex dictum pharetra. Vivamus id fermentum mauris. Aenean dolor est, molestie vel ex nec, lobortis tincidunt velit. Curabitur posuere efficitur tortor, non vulputate lectus dictum id. Donec posuere erat quis felis gravida ultrices. Duis tristique, eros vitae porta fermentum, nisi dolor dapibus augue, vitae rutrum massa eros ultricies eros. Donec accumsan feugiat cursus. Quisque eget gravida dui. Cras sagittis, leo in convallis posuere, mi lectus volutpat tortor, ut tempor diam mi vitae turpis. Donec varius viverra purus ac venenatis. Proin arcu sem, pharetra a faucibus ac, tincidunt vulputate nunc. Nam commodo dolor at sodales laoreet. Donec tempus tincidunt lobortis. Proin tempor fermentum placerat. Aenean lacinia nisl et nulla malesuada, sit amet volutpat justo elementum. Praesent tristique pharetra massa, sit amet aliquam lacus fringilla sit amet. Mauris est quam, suscipit ac ante sed, gravida vehicula elit. Aliquam interdum interdum tortor sit amet aliquet. Duis id nibh dictum, lobortis tellus a, dictum ligula. Quisque euismod est ligula, rhoncus laoreet turpis facilisis sit amet. In dignissim velit sem, aliquet rutrum tortor aliquam ut. Nullam ornare, nibh non volutpat faucibus, magna tortor facilisis metus, quis convallis leo massa nec lorem. Praesent commodo nunc arcu, nec ultrices augue convallis ornare. Suspendisse potenti. Ut dapibus eleifend urna non vulputate. Donec sit amet bibendum enim. Cras venenatis vehicula laoreet. Maecenas laoreet id tellus id egestas. Curabitur lacus nunc, aliquam vitae odio blandit, posuere imperdiet leo. Pellentesque condimentum orci a condimentum rhoncus."

for( i = 0; i < loremIpsum.length; i+= 1){
  if (loremIpsum[i] == " "){
    numberOfWords +=1;
  } else if(loremIpsum.length=0){
    console.log("No words");

  }

}

console.log(numberOfWords);

let repeatedString = 0;

for( i = 0; i < loremIpsum.length; i+= 1){
  if (loremIpsum[i] == "e"){
    let next = i;
    if(loremIpsum[next + 1] == "t"){
      repeatedString += 1; 
    }  
  } else if(loremIpsum.length=0){
    console.log("No words");

  }

}

console.log(repeatedString);

