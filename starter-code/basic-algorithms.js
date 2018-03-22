// Names and Input
var hacker1 ="Baby";
console.log("The driver's name is " + hacker1);

var hacker2=prompt("What is the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker1.length < hacker2.length){
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
}
else{
  console.log('wow you both got equally long names, '  + hacker1.length + ' characters!!')
}

var caps=""
for (var j=0; j<hacker1.length; j++){
  caps += hacker1[j].toUpperCase() + " "
}
console.log(caps);

var backwards="";
for (var i=(hacker2.length)-1; i>-1; i--){
  backwards += hacker2[i];
}
console.log(backwards)


if(hacker2.length<=hacker1.length){
  for(var k=0; k<hacker2.length; k++){
    if (hacker1[k]<hacker2[k]){
      console.log("The driver's name goes first");
      break;
    }
    else if(hacker1[k]>hacker2[k]){
      console.log('Yo the navigator definitely goes first ');
      break;
    }
    else if(hacker1[k]===hacker2[k] && k===(hacker2.length-1)){
      console.log("What?! You both got the same name?");
    }
  }
  }
  else{
    for(var k=0; k<hacker1.length; k++){
    if (hacker1[k]<hacker2[k]){
      console.log("The driver's name goes first");
      break;
    }
    else if(hacker1[k]>hacker2[k]){
      console.log('Yo the navigator goes first definitely');
      break;
    }
    else if(hacker1[k]===hacker2[k] && k===(hacker2.length-1)){
      console.log("What?! You both got the same name?");
    }
  }
  }

  /*Palindromes */

var string=prompt("Please enter a string");
var stringTwo="";

/*Does not work if punctuation in string*/

for(var l=0; l<string.length;l++){
  if(string[l] !== ' '){
  stringTwo += string[l].toLowerCase();
}
}
console.log(stringTwo);

if(stringTwo.length % 2 === 1){
  var midPoint=Math.floor(stringTwo.length/2);
  var frontEnd= "";
  var backEnd="";
  for(var k=0; k<midPoint; k++){
    frontEnd += stringTwo[k];
  }
  
  for(var k=(stringTwo.length)-1; k>midPoint; k--){
    backEnd += stringTwo[k];
  }
  if(frontEnd===backEnd){
    console.log("You have a palindrome!");
  }
  else{
    console.log("Not a palindrome");
  }
  }
  else if(stringTwo.length % 2===0){
    var midPoint=stringTwo.length/2;
    var frontEnd= "";
    var backEnd="";
  for(var k=0; k<midPoint; k++){
    frontEnd += stringTwo[k];
  }
  console.log(frontEnd);
  for(var k=(stringTwo.length)-1; k>midPoint-1; k--){
    backEnd += stringTwo[k];
  }
  console.log(backEnd);
  if(frontEnd===backEnd){
    console.log("You have a palindrome!");
  }
  else{
    console.log("Not a palindrome");
  }
}


/*Lorem Ipsum Generator */

var loremIpsum ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et lacus lorem. Mauris non varius erat. Aliquam nec risus dignissim purus rhoncus rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non neque odio. Nulla mattis tincidunt tincidunt. Integer pulvinar ligula quam, in ultricies orci cursus eu. Quisque vel condimentum sapien. Quisque tempus ultrices ex non porttitor. Nunc nisi tellus, laoreet tristique dictum et, pretium in nulla. Donec pretium porttitor laoreet. Maecenas pretium purus posuere mi tempus ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In scelerisque, orci at molestie blandit, velit ante egestas lacus, vitae pretium enim felis eu ligula. Integer fringilla dolor et ligula accumsan dignissim. Proin pretium lobortis mauris, vitae venenatis mi vulputate in. Duis pharetra lectus pellentesque felis aliquet tincidunt. In non risus egestas, congue nisi non, faucibus est. Donec id mattis tellus. Etiam rutrum, purus non fermentum facilisis, mauris dui imperdiet risus, vel finibus ipsum diam vel leo. Aliquam ac pharetra est, vel sagittis urna. Cras non purus nec odio pulvinar feugiat. Maecenas dui quam, sagittis at hendrerit ut, congue in quam. Nulla dapibus tellus in posuere consectetur. Maecenas ut consequat lorem. Vivamus semper rhoncus rutrum. Mauris at varius neque, ut feugiat erat. Suspendisse sodales, sem vitae viverra tempus, nisl est congue ligula, sit amet consectetur turpis ligula at tortor. Integer fermentum felis id ante venenatis, non ornare diam auctor. Aenean sed nunc malesuada, facilisis mi lacinia, dapibus tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut cursus justo. Praesent urna est, hendrerit vehicula viverra vitae, dignissim et massa. Morbi vel arcu vel mauris mattis feugiat. Duis iaculis aliquet dolor. Integer ac leo nec nisi sollicitudin auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas tempor imperdiet eros, auctor pulvinar augue euismod nec. Praesent mollis enim id nibh luctus pulvinar. Proin id hendrerit sem. Vestibulum id consequat ligula. Cras ac mi tempor, consectetur magna quis, volutpat justo."

var stringArray = loremIpsum.split(" ");
var loremIpsumLength = stringArray.length;
console.log("The length of the Lorem Ipsum paragraph is " + loremIpsumLength + " words");

//Doesn't work if punctuation other than "," is next to "et"//
var etCounter=0;
for(var m=0; m<stringArray.length; m++){
  if(stringArray[m]==="et" || stringArray[m]==="et,"){
    etCounter+=1; 
  }
}
console.log("Et appears " + etCounter + " times");

