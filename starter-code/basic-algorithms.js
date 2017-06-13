// Names and Input
var hacker1 = 'Laura';
console.log('The driver\'s name is ' + hacker1);
var hacker2 = prompt('Please enter hacker2\'s name');
console.log('The navigator\'s name is ' + hacker2);

var hacker1Length = hacker1.length;
var hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log('The driver has the longest name, it has ' + hacker1Length + ' characters' );
} else if (hacker1Length < hacker2Length) { 
  console.log('Yo, navigator get the longest nanme, it has ' + hacker2Length + ' characters');
  
} else {
  console.log('wow, you both got equally long names, ' + hacker1Length + ' characters');
}

//Conditionals
if(hacker1>hacker2){
  console.log('The driver\'s name goes first');
}else if(hacker1<hacker2){
  console.log('Yo, the navigator goes first definitely');
}else{
  console.log('What?! You both got the same name?');
}

//Loops
var driversCapitalizedWithSpaces = ''
for (var i=0; i<hacker1Length; i++) {
  driversCapitalizedWithSpaces += hacker1[i].toUpperCase() + ' '
}

console.log(driversCapitalizedWithSpaces);

function palindrome(str) {
 var re = /[^A-Za-z0-9]/g; 
 str = str.toLowerCase().replace(re, '');

 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }

}
 return true; 
}

palindrome(hacker1);

// Lorem ipsum generator
var loremIpsumParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras metus ligula, gravida vitae nibh vel, accumsan posuere magna. Cras nec elementum dui, id ultricies mi. Sed elementum risus eget libero cursus pulvinar. Etiam ut vulputate velit. Quisque pharetra leo sit amet condimentum volutpat. Vivamus a sapien urna. Morbi pretium nec magna in bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent aliquam vel risus nec convallis. Nulla at gravida justo. Mauris vehicula felis id laoreet dignissim. Aliquam pretium dui in aliquam placerat. In quis sapien eu lacus faucibus finibus. Nullam sed elit egestas, tempor felis eget, elementum purus. Donec eu tincidunt risus. Nunc lacus libero, porttitor et convallis quis, euismod sed augueAenean varius diam odio. Curabitur condimentum, augue a vulputate venenatis, magna tortor tempus lacus, ullamcorper feugiat lorem massa id nisi. Proin dictum placerat nibh, at accumsan neque vehicula quis. Mauris in purus volutpat, semper quam nec, tincidunt orci. Mauris ultrices nunc arcu, vitae pretium felis commodo in. Mauris nec purus eu augue dignissim gravida. Integer ultrices vel massa a rutrum. Nulla rhoncus tristique augue, et pretium ex venenatis ut. Suspendisse egestas, felis euismod accumsan feugiat, lectus mi viverra velit, eget tempor justo felis eget mauris. Sed id mollis purus. Maecenas tempor odio in fringilla viverra.Sed facilisis eros sit amet viverra ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum consequat risus ac erat gravida, id tempor est dignissim. Donec ut nisi convallis, bibendum nunc id, efficitur ante. Cras in massa eget justo ornare vehicula vitae quis sem. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque porta a nibh luctus vulputate. Praesent nec risus pellentesque, auctor quam vitae, tincidunt mauris. Suspendisse volutpat in felis ac ultrices. Etiam fringilla tincidunt arcu at elementum. Duis varius placerat diam, at congue leo feugiat a. Curabitur eget faucibus magna. Vivamus accumsan tortor non purus sagittis lacinia. Cras orci libero, aliquet et nulla id, porttitor tincidunt justo."

var words = loremIpsumParagraphs.split(" ");
var counter = 0;
for (var i = 0; i<words.length; i++) {
  if(words[i] === 'et'){
     counter ++;
  }
}
console.log(counter);
